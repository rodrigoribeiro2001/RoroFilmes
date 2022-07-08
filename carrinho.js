// let card = document.getElementById("card");
// card.addEventListener("click", (e)=>{
//     switch(card.value){
//         case"1":
//         document.getElementById("parcela").value="card";
//         break;
//         case"2":
//         document.getElementById("parcela").value="R$"+(resu6/2).toFixed(2)
//         break;
//         case"3":
//         document.getElementById("parcela").value="R$"+(resu6/3).toFixed(2)
//         break;
//         case"4":
//         document.getElementById("parcela").value="R$"+(resu6/4).toFixed(2)
//         break;
//     }
// }
// )




function startTimer(duration, display){

        var timer = duration, minutes, seconds;

        setInterval(function(){

            minutes = parseInt(timer / 15,00);
            seconds = parseInt(timer % 60,10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if(--timer < 0){
                
                window.location.href = 'http://127.0.0.1:5500/tfilmes.html';
            }

        }, 1000);
    }

     function relogio(){

        var duration = 60 * 4; // conversao para segundos 
        var display = document.querySelector("#timer"); // elemento para exibir o timer

        startTimer(duration, display); // inicia a função 


}





function session(){
                   sessionStorage.setItem("soma1",0);
                   sessionStorage.setItem("soma2",0);
                   sessionStorage.setItem("soma3",0);
                   sessionStorage.setItem("soma4",0);
                   sessionStorage.setItem("soma5",0);
                   sessionStorage.setItem("soma6",0);
                   sessionStorage.setItem("soma7",0);
                   sessionStorage.setItem("soma8",0);
                   sessionStorage.setItem("soma9",0);
                   sessionStorage.setItem("soma10",0);
                   sessionStorage.setItem("soma11",0);
                   sessionStorage.setItem("soma12",0);
                   sessionStorage.setItem("soma13",0);
                   sessionStorage.setItem("soma14",0);
                   sessionStorage.setItem("soma15",0);
                   sessionStorage.setItem("soma16",0);
                   sessionStorage.setItem("soma17",0);
                   sessionStorage.setItem("soma18",0);
                   
}



function getCart(){

    let totalCart= parseFloat(sessionStorage.getItem("soma1"))+
                   parseFloat(sessionStorage.getItem("soma2"))+
                   parseFloat(sessionStorage.getItem("soma3"))+
                   parseFloat(sessionStorage.getItem("soma4"))+
                   parseFloat(sessionStorage.getItem("soma5"))+
                   parseFloat(sessionStorage.getItem("soma6"))+
                   parseFloat(sessionStorage.getItem("soma7"))+
                   parseFloat(sessionStorage.getItem("soma8"))+
                   parseFloat(sessionStorage.getItem("soma9"))+
                   parseFloat(sessionStorage.getItem("soma10"))+
                   parseFloat(sessionStorage.getItem("soma11"))+
                   parseFloat(sessionStorage.getItem("soma12"))+
                   parseFloat(sessionStorage.getItem("soma13"))+
                   parseFloat(sessionStorage.getItem("soma14"))+
                   parseFloat(sessionStorage.getItem("soma15"))+
                   parseFloat(sessionStorage.getItem("soma16"))+
                   parseFloat(sessionStorage.getItem("soma17"))+
                   parseFloat(sessionStorage.getItem("soma18"));
                  
                   

    document.getElementById("valor").value = "R$"+ (totalCart).toFixed(2);

    sessionStorage.setItem("preco",totalCart);

    let card = document.getElementById("parcela");
card.addEventListener("click", (e)=>{
    switch(card.value){
        case"1":
        document.getElementById("card").value="R$ "+(totalCart).toFixed(2);
        break;
        case"2":
        document.getElementById("card").value="R$ "+(totalCart/2).toFixed(2)
        break;
        case"3":
        document.getElementById("card").value="R$ "+(totalCart/3).toFixed(2)
        break;
        case"4":
        document.getElementById("card").value="R$ "+(totalCart/4).toFixed(2)
        break;
     
    }
}
)

}







function addCart1(){

        let preço = document.getElementById("preço").innerHTML;
        preço = preço.replace("R$","");
        preço = preço.replace(",",".");
        let quantidade = document.getElementById("qt").value;
        let soma = preço*quantidade;
        sessionStorage.setItem("soma1",soma)
        window.location.replace("tfilmes.html");

}

function addCart2(){

    let preço = document.getElementById("preço").innerHTML;
    preço = preço.replace("R$","");
    preço = preço.replace(",",".");
    let quantidade = document.getElementById("qt").value;
    let soma = preço*quantidade;
    sessionStorage.setItem("soma2",soma)
    window.location.replace("tfilmes.html");

}
function addCart3(){

    let preço = document.getElementById("preço").innerHTML;
    preço = preço.replace("R$","");
    preço = preço.replace(",",".");
    let quantidade = document.getElementById("qt").value;
    let soma = preço*quantidade;
    sessionStorage.setItem("soma3",soma)
    window.location.replace("tfilmes.html");

}
function addCart4(){

    let preço = document.getElementById("preço").innerHTML;
    preço = preço.replace("R$","");
    preço = preço.replace(",",".");
    let quantidade = document.getElementById("qt").value;
    let soma = preço*quantidade;
    sessionStorage.setItem("soma4",soma)
    window.location.replace("tfilmes.html");

}
function addCart5(){

    let preço = document.getElementById("preço").innerHTML;
    preço = preço.replace("R$","");
    preço = preço.replace(",",".");
    let quantidade = document.getElementById("qt").value;
    let soma = preço*quantidade;
    sessionStorage.setItem("soma5",soma)
    window.location.replace("tfilmes.html");

}
function addCart6(){

    let preço = document.getElementById("preço").innerHTML;
    preço = preço.replace("R$","");
    preço = preço.replace(",",".");
    let quantidade = document.getElementById("qt").value;
    let soma = preço*quantidade;
    sessionStorage.setItem("soma6",soma)
    window.location.replace("tfilmes.html");

}
function addCart7(){

    let preço = document.getElementById("preço").innerHTML;
    preço = preço.replace("R$","");
    preço = preço.replace(",",".");
    let quantidade = document.getElementById("qt").value;
    let soma = preço*quantidade;
    sessionStorage.setItem("soma7",soma)
    window.location.replace("tfilmes.html");

}
function addCart8(){

    let preço = document.getElementById("preço").innerHTML;
    preço = preço.replace("R$","");
    preço = preço.replace(",",".");
    let quantidade = document.getElementById("qt").value;
    let soma = preço*quantidade;
    sessionStorage.setItem("soma8",soma)
    window.location.replace("tfilmes.html");

}
function addCart9(){

    let preço = document.getElementById("preço").innerHTML;
    preço = preço.replace("R$","");
    preço = preço.replace(",",".");
    let quantidade = document.getElementById("qt").value;
    let soma = preço*quantidade;
    sessionStorage.setItem("soma9",soma)
    window.location.replace("tfilmes.html");

}
function addCart10(){

    let preço = document.getElementById("preço").innerHTML;
    preço = preço.replace("R$","");
    preço = preço.replace(",",".");
    let quantidade = document.getElementById("qt").value;
    let soma = preço*quantidade;
    sessionStorage.setItem("soma10",soma)
    window.location.replace("tfilmes.html");

}
function addCart11(){

    let preço = document.getElementById("preço").innerHTML;
    preço = preço.replace("R$","");
    preço = preço.replace(",",".");
    let quantidade = document.getElementById("qt").value;
    let soma = preço*quantidade;
    sessionStorage.setItem("soma11",soma)
    window.location.replace("tfilmes.html");

}
function addCart12(){

    let preço = document.getElementById("preço").innerHTML;
    preço = preço.replace("R$","");
    preço = preço.replace(",",".");
    let quantidade = document.getElementById("qt").value;
    let soma = preço*quantidade;
    sessionStorage.setItem("soma12",soma)
    window.location.replace("tfilmes.html");

}
function addCart13(){

    let preço = document.getElementById("preço").innerHTML;
    preço = preço.replace("R$","");
    preço = preço.replace(",",".");
    let quantidade = document.getElementById("qt").value;
    let soma = preço*quantidade;
    sessionStorage.setItem("soma13",soma)
    window.location.replace("tfilmes.html");

}
function addCart14(){

    let preço = document.getElementById("preço").innerHTML;
    preço = preço.replace("R$","");
    preço = preço.replace(",",".");
    let quantidade = document.getElementById("qt").value;
    let soma = preço*quantidade;
    sessionStorage.setItem("soma14",soma)
    window.location.replace("tfilmes.html");

}
function addCart15(){

    let preço = document.getElementById("preço").innerHTML;
    preço = preço.replace("R$","");
    preço = preço.replace(",",".");
    let quantidade = document.getElementById("qt").value;
    let soma = preço*quantidade;
    sessionStorage.setItem("soma15",soma)
    window.location.replace("tfilmes.html");

}
function addCart16(){

    let preço = document.getElementById("preço").innerHTML;
    preço = preço.replace("R$","");
    preço = preço.replace(",",".");
    let quantidade = document.getElementById("qt").value;
    let soma = preço*quantidade;
    sessionStorage.setItem("soma16",soma)
    window.location.replace("tfilmes.html");

}
function addCart17(){

    let preço = document.getElementById("preço").innerHTML;
    preço = preço.replace("R$","");
    preço = preço.replace(",",".");
    let quantidade = document.getElementById("qt").value;
    let soma = preço*quantidade;
    sessionStorage.setItem("soma17",soma)
    window.location.replace("tfilmes.html");

}
function addCart18(){

    let preço = document.getElementById("preço").innerHTML;
    preço = preço.replace("R$","");
    preço = preço.replace(",",".");
    let quantidade = document.getElementById("qt").value;
    let soma = preço*quantidade;
    sessionStorage.setItem("soma18",soma)
    window.location.replace("tfilmes.html");

}
