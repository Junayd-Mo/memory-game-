let startBtn = document.getElementById('play')
let loser = document.getElementById('loser')
let roundNumber = document.getElementById('roundNumber')
let userSequence = []
let generatedPattern = []
let generatedValue = []
let round = 1
let allNumbers = document.querySelectorAll('.numbers')
let restart = document.getElementById('restart')
let restartContainer = document.getElementById('restartContainer')
let grid = document.getElementById('grid')
let score = document.getElementById('score')
let Round = document.getElementById('round')


for (let i = 0;i<=allNumbers.length-1;i++){
    allNumbers[i].disabled = false  
}

let sounds = ['key01','key02','key03','key04','key05','key06','key07','key08','key09','key10','key11',
'key12','key13','key14','key15','key16','key17','key18','key19','key20','key21',
'key22','key23','key24','key25']




const getRandomNumber = () =>{
    return allNumbers[Math.floor(Math.random() * 25)]
}

generatedPattern = [getRandomNumber()]

generatedPattern.forEach (bt => {
    generatedValue.push(bt.innerHTML)
})

allNumbers.forEach(bt => {
    bt.addEventListener('click', () => {
        userSequence.push(bt.innerHTML)
        let strGenerated = JSON.stringify(generatedValue)
        let strUser = JSON.stringify(userSequence)
        if (generatedValue[userSequence.length-1] === userSequence[userSequence.length-1]){
            if(generatedValue.length === userSequence.length){
                if (strGenerated == strUser){
                    let audio = new Audio('../sounds/key01.mp3')
                    audio. playbackRate = 3.5
                    audio.play()
                    generatedValue = []
                    generatedPattern.push(getRandomNumber())
                    generatedPattern.forEach (bt => {
                        generatedValue.push(bt.innerHTML)

                    })

                    userSequence = []
                    round += 1
                    roundNumber.textContent = round
                    startFlashing()
                }
            }
            let audio = new Audio('../sounds/key01.mp3')
            audio. playbackRate = 3.5
            audio.play()
            
            }else{
                let audio = new Audio('../sounds/wrong.mp3')
                audio.play()
                generatedPattern = [getRandomNumber()]
                generatedValue = []
                generatedPattern.forEach (bt => {
                    generatedValue.push(bt.innerHTML)
                })
                strGenerated = []
                strGenerated = JSON.stringify(generatedValue)

                strUser = []
                userSequence = []

                let endOfRound = round 

                round = 1 
                roundNumber.textContent = round

                restartContainer.style.display ='block'
                loser.style.display='block'
                grid.style.display='none'
                score.textContent = endOfRound
                Round.style.display = 'none'
                roundNumber.style.display = 'none'
            }   
    })
})

    //flashes the numbers by adding a new class that has pre written changes in css and removing that class
    const flash = numbers => {
        return new Promise(resolve => {
            numbers.className += ' active';
            // add sound 
            let audio = new Audio('../sounds/key01.mp3')
            audio. playbackRate = 3.5
            audio.play()



            setTimeout(() => {
                numbers.className = numbers.className.replace(
                    ' active', ''
                );
                setTimeout(() => {
                    resolve();
                }, 250); //time delay between each flash
            },1000);
        });
    }

    async function startFlashing(){
        Round.style.display = 'block'
        roundNumber.style.display = 'block'
        grid.style.display='grid'
        startBtn.hidden = true
        restartContainer.style.display ='none'
        loser.style.display='none'

        setTimeout(async () =>{

            canClick = false
            for (const numbers of generatedPattern){
                await flash(numbers)
                }
                canCLick = true
            
        },1000)

        }
startBtn.addEventListener('click',startFlashing)
restart.addEventListener('click',startFlashing)


