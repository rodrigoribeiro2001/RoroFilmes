

function pagina(){

        let nome = document.getElementById('fnome').value;
        let senha = document.getElementById('senha').value;
        if(nome == "" && senha == ""){
            alert("informe Usuário ou senha");
        }
        else{
        sessionStorage.setItem("usuario", nome);
        alert("Bem vindo:" + "!" + sessionStorage.getItem("usuario"));
        window.location.replace("tfilmes.html");
    } 
}

function pagina1(){
    document.getElementById("demo").innerHTML = sessionStorage.getItem("usuario");
    // alert(sessionStorage.getItem("usuario"))
}
    