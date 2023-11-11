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
                    generatedValue = []
                    generatedPattern.push(getRandomNumber())
                    generatedPattern.forEach (bt => {
                        generatedValue.push(bt.innerHTML)
                    })
                    userSequence = []
                    round += 1
                    roundNumber.textContent = round
                    

                    startFlashing()
                    console.log(userSequence)
                    console.log(strUser)
                    console.log(round)
                }
            }
            }else{
                generatedPattern = [getRandomNumber()]

                console.log(userSequence)
                console.log(strUser)
                console.log('generatedValue is : ' + generatedValue)
                console.log('generatedPattern is : '+generatedPattern)
                console.log('strGenerated is: '+ strGenerated)
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
            
        },750)

        }
startBtn.addEventListener('click',startFlashing)
restart.addEventListener('click',startFlashing)


