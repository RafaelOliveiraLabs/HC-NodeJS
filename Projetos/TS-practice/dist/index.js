"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var query_string_1 = require("query-string");
var url = __importStar(require("url"));
var fs_1 = require("fs");
//definição de endereço
var port = 5000;
var server = http_1.createServer(function (request, response) {
    var urlParse = url.parse(request.url ? request.url : '', true);
    var resposta;
    //receber info do usuário
    var params = query_string_1.parse(urlParse.search ? urlParse.search : '');
    //criar usuário & att usuário
    if (urlParse.pathname == "/criar-atualizar-usuario") {
        //salvar informações
        fs_1.writeFile("users/" + params.id + ".txt", JSON.stringify(params), function (err) {
            if (err)
                throw err;
            console.log("Saved!");
            resposta = "Usuário criado/atualizado com sucesso";
            response.statusCode = 200;
            response.setHeader("Content-Type", "text/plain");
            response.end(resposta);
        });
    }
});
//execução
server.listen(port, function () {
    console.log("Server running on " + port + "/");
});
//http://127.0.0.1:5000/criar-atualizar-usuario?id=1&nome=rafael
