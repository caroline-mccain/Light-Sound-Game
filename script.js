// global constants
const clueHoldTime = 1000; // how long to show a clue
const cluePauseTime = 333; // how long to pause between each clue
const nextClueWaitTime = 1000; // how long to wait before playing the sequence of clues

// global variables
var pattern = [];
var progress = 0;
var size = 8;
var buttonCount = 4;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;

// utilizes Math.random as shown at: https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/random
function patternBuilder() {
  for (let i = 0; i < size; i++) {
    pattern[i] = Math.floor(Math.random() * Math.floor(buttonCount)) + 1; 
  }
  console.log(pattern);
}

function startGame(){
  // initialize variables
  progress = 0;
  gamePlaying = true;
  patternBuilder();
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("medBtn").classList.add("hidden");
  document.getElementById("hardBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function startMedium(){
  progress = 0;
  gamePlaying = true;
  size = 12;
  patternBuilder();
  document.getElementById("medBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("hardBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function startHard(){
  progress = 0;
  gamePlaying = true;
  size = 16;
  buttonCount = 5;
  patternBuilder();
  document.getElementById("medBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("hardBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("button5").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("medBtn").classList.remove("hidden");
  document.getElementById("hardBtn").classList.remove("hidden");
  document.getElementById("button5").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 500
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)


function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
}

function playSingleClue(btn){
  if(gamePlaying) {
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; // set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  alert("Game Over, You Lost");
}

function winGame() {
  stopGame();
  alert("Congratulations, You Won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  // make sure a game is being played
  // no game -> function does nothing
  if (!gamePlaying) {
    return;
  }
  
  // need case for wrong guess and right guess
  // wrong guess -> lose
  // right guess -> multiple cases
  if (pattern[guessCounter] != btn) {
    loseGame();
  }
  
  else {
      
    // need case for end of pattern and middle of pattern 
    // middle of patter -> next clue
    // end of pattern -> win game
      if (progress == guessCounter) {
        if (progress == pattern.length) {
          winGame();
        }
        else {
          progress ++;
          playClueSequence();
        }
      }
      else {
        guessCounter++;
      }
    
  }
  
}