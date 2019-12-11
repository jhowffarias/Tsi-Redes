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

// GET_LIST_USERS
var get = document.getElementById("LIST_USERS");
get.onclick = function(){
    
    var params = 'page=' + encodeURIComponent(2);
    // AJAX
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var resposta = this.responseText;
            var get_resp = document.getElementById("texto");
            get_resp.innerHTML = resposta;
        }
    }
    xmlhttp.open("GET", "https://reqres.in/api/users?" + params,true);
    xmlhttp.send();
}
// GET_SINGLE_USER
var get = document.getElementById("SINGLE_USER");
get.onclick = function(){
    
    var params = encodeURIComponent(2);
    // AJAX
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var resposta = this.responseText;
            var get_resp = document.getElementById("texto");
            get_resp.innerHTML = resposta;
        }
    }
    xmlhttp.open("GET", "https://reqres.in/api/users/" + params,true);
    xmlhttp.send();
}
// SINGLE USER NOT FOUND
var get = document.getElementById("SINGLE_USER_NOT_FOUND");
get.onclick = function(){
    
    var params = encodeURIComponent(23);
    // AJAX
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 404) {
            var resposta = this.responseText;
            var get_resp = document.getElementById("texto");
            get_resp.innerHTML = resposta;
        }
    }
    xmlhttp.open("GET", "https://reqres.in/api/users/" + params,true);
    xmlhttp.send();
}
// GET_LIST_RESOURCE
var get = document.getElementById("LIST_RESOURCE");
get.onclick = function(){
    // AJAX
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var resposta = this.responseText;
            var get_resp = document.getElementById("texto");
            get_resp.innerHTML = resposta;
        }
    }
    xmlhttp.open("GET", "https://reqres.in/api/unknown",true);
    xmlhttp.send();
}
// GET_SINGLE_RESOURCE
var get = document.getElementById("SINGLE_RESOURCE");
get.onclick = function(){
    
    var params = encodeURIComponent(2);
    // AJAX
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var resposta = this.responseText;
            var get_resp = document.getElementById("texto");
            get_resp.innerHTML = resposta;
        }
    }
    xmlhttp.open("GET", "https://reqres.in/api/unknown/" + params,true);
    xmlhttp.send();
}
// SINGLE_RESOURCE_NOT_FOUND
var get = document.getElementById("SINGLE_RESOURCE_NOT_FOUND");
get.onclick = function(){
    
    var params = encodeURIComponent(23);
    // AJAX
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 404) {
            var resposta = this.responseText;
            var get_resp = document.getElementById("texto");
            get_resp.innerHTML = resposta;
        }
    }
    xmlhttp.open("GET", "https://reqres.in/api/unknown/" + params,true);
    xmlhttp.send();
}
// POST_CREATE
var get = document.getElementById("POST_CREATE");
get.onclick = function(){
    var cadastro = new Object ();
    cadastro.name = 'morpheus';
    cadastro.job = 'leader';
    var params = JSON.stringify(cadastro);    
    // AJAX
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            var resposta = this.responseText;
            var get_resp = document.getElementById("texto");
            get_resp.innerHTML = resposta;
        }
    }
    xmlhttp.open("POST", "https://reqres.in/api/users", true);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send(params);                    
}
// PUT_UPDATE
var get = document.getElementById("PUT_UPDATE");
get.onclick = function(){
    var cadastro = new Object ();
    cadastro.name = 'morpheus';
    cadastro.job = 'zion resident';
    var params = JSON.stringify(cadastro);    
    // AJAX
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var resposta = this.responseText;
            var get_resp = document.getElementById("texto");
            get_resp.innerHTML = resposta;
        }
    }
    xmlhttp.open("PUT", "https://reqres.in/api/users/2", true);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send(params);                    
}
// PATCH_UPDATE
var get = document.getElementById("PATCH_UPDATE");
get.onclick = function(){
    var cadastro = new Object ();
    cadastro.name = 'morpheus';
    cadastro.job = 'zion resident';
    var params = JSON.stringify(cadastro);    
    // AJAX
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var resposta = this.responseText;
            var get_resp = document.getElementById("texto");
            get_resp.innerHTML = resposta;
        }
    }
    xmlhttp.open("PATCH", "https://reqres.in/api/users/2", true);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send(params);                    
}
// DELETE_UPDATE
var get = document.getElementById("DELETE");
get.onclick = function(){
    // AJAX
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 204) {
            var resposta = this.responseText;
            var get_resp = document.getElementById("texto");
            get_resp.innerHTML = resposta;
        }
    }
    xmlhttp.open("DELETE", "https://reqres.in/api/users/2", true);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send();                    
}