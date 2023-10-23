rulebtn = document.querySelector(".stmbtn");
rulebtn.addEventListener("click", function () {
  let rules = document.querySelector(".rule");
  rules.classList.toggle("rules");
  let color = document.querySelector(".rltog");
  color.classList.toggle("colors");
});

// 1. to start the game by pressing any key
// 2. level 1 started.
// 3. making script choose any random color
// 4. flashing that color
// 5. accepting user click input
// 6. checking the js sequence and user sequence
// 7. increasing the level
// 8. reseting the  game
let userSeq = [];
let jsSeq = [];
let level = 0;
let started=false;
let levStm = document.querySelector(".level");
function check(idx){
    if(jsSeq[idx]===userSeq[idx]){
        if(jsSeq.length==userSeq.length){
            setTimeout(gamestart,1000)
        }
    }
    else{
        levStm.innerHTML=`Game Over. Your score is ${level}. Press any key to restart`
        document.querySelector('body').style.backgroundColor='red'
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor = "bisque"
        },100);
        reset()
    }
    
}
function colPress(){
    let col=this
    let colour = col.getAttribute("id");
    jsFlash(colour)
    userSeq.push(colour)
    check(userSeq.length-1)
    // console.log(userSeq)
}
function gamestart(){
    userSeq=[]
    level++
    levStm.innerHTML = `Level ${level}`;
    // Choosing random color
    let color=["red","blue","green","yellow"]
    let randCol=color[Math.floor(Math.random()*4)]
    jsSeq.push(randCol)
    console.log(jsSeq)
    // Flashing that color
    jsFlash(randCol)
    // Accepting user input


}
function jsFlash(color){
    let toFlash=document.querySelector(`#${color}`)
    toFlash.classList.add('flash')
    setTimeout(()=>{
        toFlash.classList.remove('flash')
    },150)
}
document.body.addEventListener('keydown',function(){
    if(started==false){
        started=true

        gamestart()
    }

})
let uCol = document.querySelectorAll(".color");
for (let col of uCol) {
    col.addEventListener("click", colPress);
}
function reset(){
    userSeq = [];
    jsSeq = [];
    level = 0;
    started = false;
    
}