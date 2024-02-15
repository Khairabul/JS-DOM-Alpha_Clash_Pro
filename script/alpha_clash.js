// function play(){
//     // Hide the home screen. we have to add the class hidden to the home section
//     const homeScreen=document.getElementById('home-screen')
//     // console.log(homeScreen.classList)
//     homeScreen.classList.add('hidden');

//     // Show the playground
//     const playGround=document.getElementById('play-ground');
//     playGround.classList.remove('hidden')
// }


function handleKeyboardButtonPress(event){
    const playerPressed =event.key;

    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet=currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check matched
    if (playerPressed===expectedAlphabet){
        console.log('got point');
        // Update score
        // 1.get the current score
        const currentScoreElement=document.getElementById('current-score');
        const currentScoreText=currentScoreElement.innerText;
        const currentScore=parseInt(currentScoreText);        
        // 2.increase the score by 1
        const newScore =currentScore+1;
        // 3.show the updated score
        currentScoreElement.innerText=newScore

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        // step-1: get the current life number
        const currentLifeElement=document.getElementById('current-life');
        const currentLifeText=currentLifeElement.innerText;
        const currentLife=parseInt(currentLifeText);
        // step-2: reduce the life count
        const newLife=currentLife-1;
        // step-3: display the updated life count
        currentLifeElement.innerText=newLife;
    }
}
// capture keyboard key press
document.addEventListener('keyup',handleKeyboardButtonPress)

function continueGame(){
    // Generate a random alphabet
    const alphabet=getARandomAlphabet();

    // set random alphabet to the screen
    const currentAlphabet = document.getElementById('current-alphabet')
    currentAlphabet.innerText=alphabet;

    //set color on the the keys 
    setBackgroundColorById(alphabet);

}

function play(){
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame()
}