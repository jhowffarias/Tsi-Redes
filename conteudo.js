document.getElementById("HTTP").onclick = function () {

    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            document.querySelector("#texto").innerHTML = ajax.responseText;
            document.getElementById("conthttp").style.display = "block";
            document.getElementById("requisicao").style.display = "none";
            document.getElementById("funcionamento").style.display = "none";
            document.getElementById("https").style.display = "none";
        }
    }
    ajax.open("GET", "http.php")
    ajax.send();

}

document.getElementById("requisicao").onclick = function () {

    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            document.querySelector("#texto").innerHTML = ajax.responseText;
            document.getElementById("conthttp").style.display = "none";
            document.getElementById("requisicao").style.display = "block";
            document.getElementById("funcionamento").style.display = "none";
            document.getElementById("https").style.display = "none";
        }
    }
    ajax.open("GET", "requisicao.php")
    ajax.send();

}

document.getElementById("funcionamento").onclick = function () {

    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            document.querySelector("#texto").innerHTML = ajax.responseText;
            document.getElementById("conthttp").style.display = "none";
            document.getElementById("requisicao").style.display = "none";
            document.getElementById("funcionamento").style.display = "block";
            document.getElementById("https").style.display = "none";
        }
    }
    ajax.open("GET", "funcionamento.php")
    ajax.send();

}

document.getElementById("https").onclick = function () {

    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            document.querySelector("#texto").innerHTML = ajax.responseText;
            document.getElementById("conthttp").style.display = "none";
            document.getElementById("requisicao").style.display = "none";
            document.getElementById("funcionamento").style.display = "none";
            document.getElementById("https").style.display = "block";
        }
    }
    ajax.open("GET", "https.php")
    ajax.send();

}

//API https://reqres.in/

document.getElementById("Lister").onclick = function () {
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            document.querySelector("#texto").innerHTML = ajax.responseText;
            document.getElementById("conthttp").style.display = "none";
            document.getElementById("requisicao").style.display = "none";
            document.getElementById("funcionamento").style.display = "none";
            document.getElementById("https").style.display = "none";
            document.getElementById("Lister").style.display = "block";
        }
    }
        ajax.open("GET", "https://reqres.in/api/users?page=2", true);
        ajax.send();
    }