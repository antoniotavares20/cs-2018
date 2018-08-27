//importação dos modulos do protocolo http na constante http
const http = require('http');
// definição do host em uma constante
const hostname = '127.0.0.1';
// definição da porta
const port = 3000;
//criação do servidor http
const server = http.createServer((req, res) => {
    // resposta assincroa ao cliente de status OK
  res.statusCode = 200;
  //resposta no Header definindo o tipo da mensagem na pagina html
  res.setHeader('Content-Type','text/plain' );
  //resposta e ultima mensagem enviada
  res.end('Trabalhando com Nodejs');
});
//escreve no servidor a porta e o host conectado
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});