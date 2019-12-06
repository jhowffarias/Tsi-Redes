<h2>Requisições HTTP</h2>
<h4>Uma requisição HTTP consiste em três componentes:</h4><br>

Cabeçalho da mensagem<br>
Corpo da mensagem<br>
Requisição<br>
<br>
<h4>Um exemplo de uma requisição HTTP:</h4><br>

POST /servlet/default.jsp HTTP/1.1<br>
Accept: text/plain; text/html <br>
Accept-Language: en-gb <br>
Connection: Keep-Alive <br>
Host: localhost <br>
Referer: http://localhost/senac/tsi.htm<br> 
User-Agent: Mozilla/4.0 (compatible; MSIE 4.01; Windows 98) <br>
Content-Length: 33 <br>
Content-Type: application/x-www-form-urlencoded <br>
Accept-Encoding: gzip, deflate <br>
LastName=Jonthan&FirstName=Farias<br>
<br>
<h4>A requisição aparece na primeira linha:</h4>

<b>POST /servlet/default.jsp HTTP/1.1</b><br>

Onde o POST é o método da requisição , /servlet/default.jsp representa a URI e HTTP/1.1 representa a versão do protocolo.<br>
Cada requisição HTTP pode usar um dos muitos métodos de requisição existente, a versão HTTP/1.1 suporta sete tipos de requisição: GET, POST, HEAD, OPTIONS, PUT, DELETE e TRACE. GET e POST são os mais usados em aplicações na internet.<br>
A URI é geralmente interpretado como sendo o diretório relativo de raiz do servidor. Assim, ele deve sempre começar com uma barra (/). Uma URL é um tipo de URI.<br>
O cabeçalho da mensagem contem informações importantes sobre o ambiente de trabalho do cliente e sobre o corpo da mensagem. Por exemplo, pode conter a língua para qual o browser está definido, o comprimento do corpo da mensagem, e assim por diante.<br>