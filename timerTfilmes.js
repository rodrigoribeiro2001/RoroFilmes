function startTimer(duration, display){

    var timer = duration, minutes, seconds;

    setInterval(function(){

        minutes = parseInt(timer / 15,00);
        seconds = parseInt(timer % 60,10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if(--timer < 0){
            
            window.location.href = 'http://127.0.0.1:5500/index.html';
        }

    }, 1000);
}

 function relogi(){

    var duration = 60 * 4; // conversao para segundos 
    var display = document.querySelector("#timer"); // elemento para exibir o timer

    startTimer(duration, display); // inicia a função 


}