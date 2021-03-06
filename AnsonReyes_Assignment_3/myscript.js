//This function hides the pictures immediately
(function()
{
    const images = document.querySelectorAll("img");

    for(let i = 0; i<images.length; i++)
    {
        images[i].style.visibility = "hidden";
    }
}());

//This function will reset the game when the reset button is pressed
function reset()
{
    const images = document.querySelectorAll("img");

    for(let i = 0; i<images.length; i++)
    {
        images[i].style.visibility = "hidden";
    }
}

//Reset button eventlistener
document.querySelector("#reset").addEventListener("click",reset);

//Helps keep track of which images are visible
const images = document.querySelectorAll("img");
var sumofvis = 0;
var lastchoice;

//Event listeners that check for certain conditions and then flip or unflip tiles
document.querySelector("#r1c1").addEventListener("click",()=>
{
    for(let i = 0; i < images.length; i++)
{
    if(images[i].style.visibility == "visible"){
    sumofvis += 1;
    }
}
    if(sumofvis == 0 || sumofvis == 2 || sumofvis == 4 || sumofvis == 6 || sumofvis == 8 || sumofvis == 10 || sumofvis == 12 || sumofvis == 14){
    document.querySelector("#r1c1").firstChild.style.visibility = "visible";
    lastchoice = "#r1c1";
    }
    else if(document.querySelector("#r3c2").firstChild.style.visibility == "visible")
    {
    document.querySelector("#r1c1").firstChild.style.visibility = "visible";   
    }
    else if(document.querySelector("#r1c1").firstChild.style.visibility != "visible" && document.querySelector("#r3c2").firstChild.style.visibility != "visible")
    {
    document.querySelector("#r1c1").firstChild.style.visibility = "visible";
    setTimeout(()=>{
    document.querySelector(lastchoice).firstChild.style.visibility = "hidden";
    document.querySelector("#r1c1").firstChild.style.visibility = "hidden";
    },500);
    }
    sumofvis = 0;
}
);

document.querySelector("#r1c2").addEventListener("click",()=>
{
    for(let i = 0; i < images.length; i++)
    {
        if(images[i].style.visibility == "visible"){
        sumofvis += 1;
        }
    }
    if(sumofvis == 0 || sumofvis == 2 || sumofvis == 4 || sumofvis == 6 || sumofvis == 8 || sumofvis == 10 || sumofvis == 12 || sumofvis == 14){
    document.querySelector("#r1c2").firstChild.style.visibility = "visible";
    lastchoice = "#r1c2"
    }
    else if(document.querySelector("#r4c3").firstChild.style.visibility == "visible")
    {
    document.querySelector("#r1c2").firstChild.style.visibility = "visible";   
    }
    else if(document.querySelector("#r1c2").firstChild.style.visibility != "visible" && document.querySelector("#r4c3").firstChild.style.visibility != "visible")
    {
    document.querySelector("#r1c2").firstChild.style.visibility = "visible";
    setTimeout(()=>{
    document.querySelector(lastchoice).firstChild.style.visibility = "hidden";
    document.querySelector("#r1c2").firstChild.style.visibility = "hidden";
    },500);
    }
    sumofvis = 0;
}
);

document.querySelector("#r1c3").addEventListener("click",()=>
{
    for(let i = 0; i < images.length; i++)
    {
        if(images[i].style.visibility == "visible"){
        sumofvis += 1;
        }
    }
    if(sumofvis == 0 || sumofvis == 2 || sumofvis == 4 || sumofvis == 6 || sumofvis == 8 || sumofvis == 10 || sumofvis == 12 || sumofvis == 14){
    document.querySelector("#r1c3").firstChild.style.visibility = "visible";
    lastchoice = "#r1c3";
    }
    else if(document.querySelector("#r4c1").firstChild.style.visibility == "visible")
    {
    document.querySelector("#r1c3").firstChild.style.visibility = "visible";   
    }
    else if(document.querySelector("#r1c3").firstChild.style.visibility != "visible" && document.querySelector("#r4c1").firstChild.style.visibility != "visible")
    {
    document.querySelector("#r1c3").firstChild.style.visibility = "visible";
    setTimeout(()=>{
    document.querySelector(lastchoice).firstChild.style.visibility = "hidden";
    document.querySelector("#r1c3").firstChild.style.visibility = "hidden";
    },500);
    }
    sumofvis = 0;
}
);

document.querySelector("#r1c4").addEventListener("click",()=>
{
    for(let i = 0; i < images.length; i++)
    {
        if(images[i].style.visibility == "visible"){
        sumofvis += 1;
        }
    }
    if(sumofvis == 0 || sumofvis == 2 || sumofvis == 4 || sumofvis == 6 || sumofvis == 8 || sumofvis == 10 || sumofvis == 12 || sumofvis == 14){
    document.querySelector("#r1c4").firstChild.style.visibility = "visible";
    lastchoice = "#r1c4";
    }
    else if(document.querySelector("#r3c3").firstChild.style.visibility == "visible")
    {
    document.querySelector("#r1c4").firstChild.style.visibility = "visible";   
    }
    else if(document.querySelector("#r1c4").firstChild.style.visibility != "visible" && document.querySelector("#r3c3").firstChild.style.visibility != "visible")
    {
    document.querySelector("#r1c4").firstChild.style.visibility = "visible";
    setTimeout(()=>{
    document.querySelector(lastchoice).firstChild.style.visibility = "hidden";
    document.querySelector("#r1c4").firstChild.style.visibility = "hidden";   
    },500);
    }
    sumofvis = 0;
}
);

document.querySelector("#r2c1").addEventListener("click",()=>
{
    for(let i = 0; i < images.length; i++)
    {
        if(images[i].style.visibility == "visible"){
        sumofvis += 1;
        }
    }
    if(sumofvis == 0 || sumofvis == 2 || sumofvis == 4 || sumofvis == 6 || sumofvis == 8 || sumofvis == 10 || sumofvis == 12 || sumofvis == 14){
    document.querySelector("#r2c1").firstChild.style.visibility = "visible";
    lastchoice = "#r2c1";
    }
    else if(document.querySelector("#r4c4").firstChild.style.visibility == "visible")
    {
    document.querySelector("#r2c1").firstChild.style.visibility = "visible";   
    }
    else if(document.querySelector("#r2c1").firstChild.style.visibility != "visible" && document.querySelector("#r4c4").firstChild.style.visibility != "visible")
    {
    document.querySelector("#r2c1").firstChild.style.visibility = "visible";
    setTimeout(()=>{
    document.querySelector(lastchoice).firstChild.style.visibility = "hidden";
    document.querySelector("#r2c1").firstChild.style.visibility = "hidden";    
    },500);
    }
    sumofvis = 0;
}
);

document.querySelector("#r2c2").addEventListener("click",()=>
{
    for(let i = 0; i < images.length; i++)
    {
        if(images[i].style.visibility == "visible"){
        sumofvis += 1;
        }
    }
    if(sumofvis == 0 || sumofvis == 2 || sumofvis == 4 || sumofvis == 6 || sumofvis == 8 || sumofvis == 10 || sumofvis == 12 || sumofvis == 14){
    document.querySelector("#r2c2").firstChild.style.visibility = "visible";
    lastchoice = "#r2c2";
    }
    else if(document.querySelector("#r3c1").firstChild.style.visibility == "visible")
    {
    document.querySelector("#r2c2").firstChild.style.visibility = "visible";   
    }
    else if(document.querySelector("#r2c2").firstChild.style.visibility != "visible" && document.querySelector("#r3c1").firstChild.style.visibility != "visible")
    {
    document.querySelector("#r2c2").firstChild.style.visibility = "visible";
    setTimeout(()=>{
    document.querySelector(lastchoice).firstChild.style.visibility = "hidden"; 
    document.querySelector("#r2c2").firstChild.style.visibility = "hidden";   
    },500);
    }
    sumofvis = 0;
}
);

document.querySelector("#r2c3").addEventListener("click",()=>
{
    for(let i = 0; i < images.length; i++)
    {
        if(images[i].style.visibility == "visible"){
        sumofvis += 1;
        }
    }
    if(sumofvis == 0 || sumofvis == 2 || sumofvis == 4 || sumofvis == 6 || sumofvis == 8 || sumofvis == 10 || sumofvis == 12 || sumofvis == 14){
    document.querySelector("#r2c3").firstChild.style.visibility = "visible";
    lastchoice = "#r2c3";
    }
    else if(document.querySelector("#r3c4").firstChild.style.visibility == "visible")
    {
    document.querySelector("#r2c3").firstChild.style.visibility = "visible";   
    }
    else if(document.querySelector("#r2c3").firstChild.style.visibility != "visible" && document.querySelector("#r3c4").firstChild.style.visibility != "visible")
    {
    document.querySelector("#r2c3").firstChild.style.visibility = "visible";
    setTimeout(()=>{
    document.querySelector(lastchoice).firstChild.style.visibility = "hidden";    
    document.querySelector("#r2c3").firstChild.style.visibility = "hidden";
    },500);
    }
    sumofvis = 0;
}
);

document.querySelector("#r2c4").addEventListener("click",()=>
{
    for(let i = 0; i < images.length; i++)
    {
        if(images[i].style.visibility == "visible"){
        sumofvis += 1;
        }
    }
    if(sumofvis == 0 || sumofvis == 2 || sumofvis == 4 || sumofvis == 6 || sumofvis == 8 || sumofvis == 10 || sumofvis == 12 || sumofvis == 14){
    document.querySelector("#r2c4").firstChild.style.visibility = "visible";
    lastchoice = "#r2c4";
    }
    else if(document.querySelector("#r4c2").firstChild.style.visibility == "visible")
    {
    document.querySelector("#r2c4").firstChild.style.visibility = "visible";   
    }
    else if(document.querySelector("#r2c4").firstChild.style.visibility != "visible" && document.querySelector("#r4c2").firstChild.style.visibility != "visible")
    {
    document.querySelector("#r2c4").firstChild.style.visibility = "visible";
    setTimeout(()=>{
    document.querySelector(lastchoice).firstChild.style.visibility = "hidden";
    document.querySelector("#r2c4").firstChild.style.visibility = "hidden";
    },500);
    }
    sumofvis = 0;
}
);

document.querySelector("#r3c1").addEventListener("click",()=>
{
    for(let i = 0; i < images.length; i++)
    {
        if(images[i].style.visibility == "visible"){
        sumofvis += 1;
        }
    }
    if(sumofvis == 0 || sumofvis == 2 || sumofvis == 4 || sumofvis == 6 || sumofvis == 8 || sumofvis == 10 || sumofvis == 12 || sumofvis == 14){
    document.querySelector("#r3c1").firstChild.style.visibility = "visible";
    lastchoice = "#r3c1";
    }
    else if(document.querySelector("#r2c2").firstChild.style.visibility == "visible")
    {
    document.querySelector("#r3c1").firstChild.style.visibility = "visible";   
    }
    else if(document.querySelector("#r3c1").firstChild.style.visibility != "visible" && document.querySelector("#r2c2").firstChild.style.visibility != "visible")
    {
    document.querySelector("#r3c1").firstChild.style.visibility = "visible";
    setTimeout(()=>{
    document.querySelector(lastchoice).firstChild.style.visibility = "hidden";  
    document.querySelector("#r3c1").firstChild.style.visibility = "hidden";  
    },500);
    }
    sumofvis = 0;
}
);

document.querySelector("#r3c2").addEventListener("click",()=>
{
    for(let i = 0; i < images.length; i++)
    {
        if(images[i].style.visibility == "visible"){
        sumofvis += 1;
        }
    }
    if(sumofvis == 0 || sumofvis == 2 || sumofvis == 4 || sumofvis == 6 || sumofvis == 8 || sumofvis == 10 || sumofvis == 12 || sumofvis == 14){
    document.querySelector("#r3c2").firstChild.style.visibility = "visible";
    lastchoice = "#r3c2";
    }
    else if(document.querySelector("#r1c1").firstChild.style.visibility == "visible")
    {
    document.querySelector("#r3c2").firstChild.style.visibility = "visible";   
    }
    else if(document.querySelector("#r3c2").firstChild.style.visibility != "visible" && document.querySelector("#r1c1").firstChild.style.visibility != "visible")
    {
    document.querySelector("#r3c2").firstChild.style.visibility = "visible";
    setTimeout(()=>{
    document.querySelector(lastchoice).firstChild.style.visibility = "hidden";
    document.querySelector("#r3c2").firstChild.style.visibility = "hidden";    
    },500);
    }
    sumofvis = 0;
}
);

document.querySelector("#r3c3").addEventListener("click",()=>
{
    for(let i = 0; i < images.length; i++)
    {
        if(images[i].style.visibility == "visible"){
        sumofvis += 1;
        }
    }
    if(sumofvis == 0 || sumofvis == 2 || sumofvis == 4 || sumofvis == 6 || sumofvis == 8 || sumofvis == 10 || sumofvis == 12 || sumofvis == 14){
    document.querySelector("#r3c3").firstChild.style.visibility = "visible";
    lastchoice = "#r3c3";
    }
    else if(document.querySelector("#r1c4").firstChild.style.visibility == "visible")
    {
    document.querySelector("#r3c3").firstChild.style.visibility = "visible";   
    }
    else if(document.querySelector("#r3c3").firstChild.style.visibility != "visible" && document.querySelector("#r1c4").firstChild.style.visibility != "visible")
    {
    document.querySelector("#r3c3").firstChild.style.visibility = "visible";
    setTimeout(()=>{
    document.querySelector(lastchoice).firstChild.style.visibility = "hidden";
    document.querySelector("#r3c3").firstChild.style.visibility = "hidden";
    },500);
    }
    sumofvis = 0;
}
);

document.querySelector("#r3c4").addEventListener("click",()=>
{
    for(let i = 0; i < images.length; i++)
    {
        if(images[i].style.visibility == "visible"){
        sumofvis += 1;
        }
    }
    if(sumofvis == 0 || sumofvis == 2 || sumofvis == 4 || sumofvis == 6 || sumofvis == 8 || sumofvis == 10 || sumofvis == 12 || sumofvis == 14){
    document.querySelector("#r3c4").firstChild.style.visibility = "visible";
    lastchoice = "#r3c4";
    }
    else if(document.querySelector("#r2c3").firstChild.style.visibility == "visible")
    {
    document.querySelector("#r3c4").firstChild.style.visibility = "visible";   
    }
    else if(document.querySelector("#r3c4").firstChild.style.visibility != "visible" && document.querySelector("#r2c3").firstChild.style.visibility != "visible")
    {
    document.querySelector("#r3c4").firstChild.style.visibility = "visible";
    setTimeout(()=>{
    document.querySelector(lastchoice).firstChild.style.visibility = "hidden";
    document.querySelector("#r3c4").firstChild.style.visibility = "hidden";   
    },500);
    }
    sumofvis = 0;
}
);

document.querySelector("#r4c1").addEventListener("click",()=>
{
    for(let i = 0; i < images.length; i++)
    {
        if(images[i].style.visibility == "visible"){
        sumofvis += 1;
        }
    }
    if(sumofvis == 0 || sumofvis == 2 || sumofvis == 4 || sumofvis == 6 || sumofvis == 8 || sumofvis == 10 || sumofvis == 12 || sumofvis == 14){
    document.querySelector("#r4c1").firstChild.style.visibility = "visible";
    lastchoice = "#r4c1";
    }
    else if(document.querySelector("#r1c3").firstChild.style.visibility == "visible")
    {
    document.querySelector("#r4c1").firstChild.style.visibility = "visible";   
    }
    else if(document.querySelector("#r4c1").firstChild.style.visibility != "visible" && document.querySelector("#r1c3").firstChild.style.visibility != "visible")
    {
    document.querySelector("#r4c1").firstChild.style.visibility = "visible";
    setTimeout(()=>{
    document.querySelector(lastchoice).firstChild.style.visibility = "hidden";
    document.querySelector("#r4c1").firstChild.style.visibility = "hidden";    
    },500);
    }
    sumofvis = 0;
}
);

document.querySelector("#r4c2").addEventListener("click",()=>
{
    for(let i = 0; i < images.length; i++)
    {
        if(images[i].style.visibility == "visible"){
        sumofvis += 1;
        }
    }
    if(sumofvis == 0 || sumofvis == 2 || sumofvis == 4 || sumofvis == 6 || sumofvis == 8 || sumofvis == 10 || sumofvis == 12 || sumofvis == 14){
    document.querySelector("#r4c2").firstChild.style.visibility = "visible";
    lastchoice = "#r4c2";
    }
    else if(document.querySelector("#r2c4").firstChild.style.visibility == "visible")
    {
    document.querySelector("#r4c2").firstChild.style.visibility = "visible";   
    }
    else if(document.querySelector("#r4c2").firstChild.style.visibility != "visible" && document.querySelector("#r2c4").firstChild.style.visibility != "visible")
    {
    document.querySelector("#r4c2").firstChild.style.visibility = "visible";
    setTimeout(()=>{
    document.querySelector(lastchoice).firstChild.style.visibility = "hidden"; 
    document.querySelector("#r4c2").firstChild.style.visibility = "hidden";   
    },500);
    }
    sumofvis = 0;
}
);

document.querySelector("#r4c3").addEventListener("click",()=>
{
    for(let i = 0; i < images.length; i++)
    {
        if(images[i].style.visibility == "visible"){
        sumofvis += 1;
        }
    }
    if(sumofvis == 0 || sumofvis == 2 || sumofvis == 4 || sumofvis == 6 || sumofvis == 8 || sumofvis == 10 || sumofvis == 12 || sumofvis == 14){
    document.querySelector("#r4c3").firstChild.style.visibility = "visible";
    lastchoice = "#r4c3";
    }
    else if(document.querySelector("#r1c2").firstChild.style.visibility == "visible")
    {
    document.querySelector("#r4c3").firstChild.style.visibility = "visible";   
    }
    else if(document.querySelector("#r4c3").firstChild.style.visibility != "visible" && document.querySelector("#r1c2").firstChild.style.visibility != "visible")
    {
    document.querySelector("#r4c3").firstChild.style.visibility = "visible";
    setTimeout(()=>{
    document.querySelector(lastchoice).firstChild.style.visibility = "hidden";
    document.querySelector("#r4c3").firstChild.style.visibility = "hidden";   
    },500);
    }
    sumofvis = 0;
}
);

document.querySelector("#r4c4").addEventListener("click",()=>
{
    for(let i = 0; i < images.length; i++)
    {
        if(images[i].style.visibility == "visible"){
        sumofvis += 1;
        }
    }
    if(sumofvis == 0 || sumofvis == 2 || sumofvis == 4 || sumofvis == 6 || sumofvis == 8 || sumofvis == 10 || sumofvis == 12 || sumofvis == 14){
    document.querySelector("#r4c4").firstChild.style.visibility = "visible";
    lastchoice = "#r4c4";
    }
    else if(document.querySelector("#r2c1").firstChild.style.visibility == "visible")
    {
    document.querySelector("#r4c4").firstChild.style.visibility = "visible";   
    }
    else if(document.querySelector("#r4c4").firstChild.style.visibility != "visible" && document.querySelector("#r2c1").firstChild.style.visibility != "visible")
    {
    document.querySelector("#r4c4").firstChild.style.visibility = "visible";
    setTimeout(()=>{
    document.querySelector(lastchoice).firstChild.style.visibility = "hidden"; 
    document.querySelector("#r4c4").firstChild.style.visibility = "hidden";   
    },500);
    }
    sumofvis = 0;
}
);