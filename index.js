let body =document.querySelector("body")
let hex =[
   "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F", 
];

function randomColor(){
    let color ="#";
    for (let i=0;i<6;i++){
        color +=hex[Math.floor(Math.random()*16)];
    }
    return color;
}

function degrees(){
    let angle = Math.floor(Math.random()+361);
    return angle + "deg";
}
body.addEventListener("click",(e)=>{
    let angle =degrees();
    let c1 =randomColor();
    let c2 =randomColor();
    let c3 =randomColor();
    let c4 =randomColor();
    let bgman="linear-gradient("+angle+" ,"+c1 +" ,"+ c2 + " ,"+ c3 +" ,"+ c4 +")";
    console.log(angle);
    body.style.backgroundImage=bgman;
})