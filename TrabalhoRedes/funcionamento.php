<h1>Como é o funcionamento do HTTP?</h1>
        HTTP é um protocolo baseado em texto sem conexão. Isso significa que as pessoas que acessam o site da sua empresa enviam solicitações a servidores que as exibem na forma do seu site em formato de texto, imagens, e outros tipos de mídia. Depois que a solicitação é atendida por um servidor, a conexão entre o usuário e o servidor é desconectada.<br>

        Uma nova conexão deve ser feita para cada solicitação, isto é, cada vez que alguém acessa o seu site. Em suma, quando alguém digita a URL do seu site em um navegador, é isto que acontece:<br>

        1 - Se a URL pertencer a um domínio próprio, o navegador primeiro se conecta a um servidor e recuperará o endereço IP correspondente ao servidor;<br>
        2 - O navegador se conecta ao servidor e envia uma solicitação HTTP para a página da web desejada;<br>
        3 - O servidor recebe a solicitação e verifica a página desejada. Se a página existir, o servidor a mostrará. Se o servidor não conseguir encontrar a página solicitada, ele enviará uma mensagem de erro HTTP 404, ou seja, página não encontrada;<br>
        4 - O navegador, então, recebe a página de volta e a conexão é fechada;<br>
        5 - Caso a página exista (e é isso que se espera), o navegador a analisa e procura outros elementos necessários para concluir a sua exibição, o que inclui seus textos, imagens e afins;<br>
        6 - Para cada um desses elementos, o navegador faz conexões adicionais e solicitações HTTP para o servidor para cada elemento;<br>
        7 - E por ultimo quando o navegador terminar de carregar todos os elementos, a página será carregada na janela do navegador.