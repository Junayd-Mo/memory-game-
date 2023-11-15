let sound = document.getElementById('PLAY')

let sounds = ['key02.mp3','key03.mp3','key04.mp3','key05.mp3','key06.mp3','key07.mp3','key08.mp3','key09.mp3','key10.mp3','key11.mp3',
'key12.mp3','key13.mp3','key14.mp3','key15.mp3','key16.mp3','key17.mp3','key18.mp3','key19.mp3','key20.mp3','key21.mp3',
'key22.mp3','key23.mp3','key24.mp3','key01.mp3','key24.mp3',]

function play(){
    let audio = new Audio('../sounds/key01.mp3')
    audio. playbackRate = 3.5
    audio.play()
}

sound.addEventListener('click',play)



