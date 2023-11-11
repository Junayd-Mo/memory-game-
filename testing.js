let play = document.getElementById('PLAY')

function play(){
    let audio = new Audio('key01.mp3')
    audio.play()
}

play.addEventListener('click',play)