import { createServer, ServerResponse, IncomingMessage } from 'http';
import { parse } from 'query-string';
import * as url from 'url';
import { writeFile } from 'fs';

//definição de endereço
const port = 5000;

const server = createServer((request: IncomingMessage, response: ServerResponse) => {
    const urlParse = url.parse(request.url ? request.url : '', true);
    var resposta;

    //receber info do usuário
    const params = parse(urlParse.search ? urlParse.search : '');

    //criar usuário & att usuário
  if (urlParse.pathname == "/criar-atualizar-usuario") {

    //salvar informações
    writeFile("users/" + params.id + ".txt", JSON.stringify(params), function (err: any) {
      if (err) throw err;
      console.log("Saved!");
      resposta = "Usuário criado/atualizado com sucesso";

      response.statusCode = 200;
      response.setHeader("Content-Type", "text/plain");
      response.end(resposta);
    });
  }
})

//execução
server.listen(port, () => {
    console.log(`Server running on ${port}/`);
})

//http://127.0.0.1:5000/criar-atualizar-usuario?id=1&nome=rafael