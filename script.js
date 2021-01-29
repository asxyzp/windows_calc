/*
	NAME : Script for windows calculator replica
	CREATED BY : Aashish Loknath Panigrahi
*/

//Global variables
let dropdown_count = 0;											//Count reqd. for toggling dropdown menu
let cursor_count = 0;											//Count for blinking cursor		

//Objects in HTML document
let calc  = document.querySelector('.calc');					//Calculator container object
let calc_top  = document.querySelector('.calc-top');			//Calculator top bar container object
let calc_body = document.querySelector('.calc-body');			//Calculator body container object
let dropdown_menu = document.querySelector('.dropdown-menu');	//Dropdown menu object
let dropdown = document.querySelector('.dropdown');				//Dropdown container object
let min_btn = document.querySelector('.calc-min');				//Minimize button object
let max_btn = document.querySelector('.calc-max');				//Maximize button object
let input = document.querySelector('.input');					//Input object
let output = document.querySelector('.output');					//Output object
let cursor = document.querySelector('.cursor');					//Cursor object
let about_opt = document.querySelector('.about-opt');			//About option in the dropdown menu
let about_div = document.querySelector('.about-div');			//About division container object

//Clicking on about-opt will make about-div visible
about_opt.addEventListener('click',()=>{
	dropdown.style.visibility="hidden";
	about_div.style.display="flex";
});

//Click on about-div will make about-div not visible anymore
about_div.addEventListener('click',()=>{
	console.log('CLICKING ABOUT DIV');
	about_div.style.display="none";
});

//Event listeners clicks on number divs
document.getElementById('nine').addEventListener('click', ()=>{input.innerHTML+='9'});
document.getElementById('eight').addEventListener('click',()=>{input.innerHTML+='8'});
document.getElementById('seven').addEventListener('click',()=>{input.innerHTML+='7'});
document.getElementById('six').addEventListener('click',  ()=>{input.innerHTML+='6'});
document.getElementById('five').addEventListener('click', ()=>{input.innerHTML+='5'});
document.getElementById('four').addEventListener('click', ()=>{input.innerHTML+='4'});
document.getElementById('three').addEventListener('click',()=>{input.innerHTML+='3'});
document.getElementById('two').addEventListener('click',  ()=>{input.innerHTML+='2'});
document.getElementById('one').addEventListener('click',  ()=>{input.innerHTML+='1'});
document.getElementById('zero').addEventListener('click', ()=>{input.innerHTML+='0'});

//Event listeners clicks on symbol divs other than =
document.getElementById('plus').addEventListener('click',      ()=>{input.innerHTML+='+'});
document.getElementById('minus').addEventListener('click',     ()=>{input.innerHTML+='-'});
document.getElementById('mul').addEventListener('click',       ()=>{input.innerHTML+='*'});
document.getElementById('div').addEventListener('click',       ()=>{input.innerHTML+='/'});
document.getElementById('dot').addEventListener('click',       ()=>{input.innerHTML+='.'});
document.getElementById('percent').addEventListener('click',   ()=>{input.innerHTML+='%'});
document.getElementById('left-br').addEventListener('click',   ()=>{input.innerHTML+='('});
document.getElementById('right-br').addEventListener('click',  ()=>{input.innerHTML+=')'});
document.getElementById('cancel').addEventListener('click',    ()=>{input.innerHTML = input.innerHTML.substr(0,input.innerHTML.length-1)});

//Event listener for click on = max_btn
document.getElementById('equal').addEventListener('click', ()=>{
	if(input.innerHTML!=''){
		//try-catch block for catching syntax error
		try{eval(input.innerHTML);} 
		catch(err) {
		    if (err instanceof SyntaxError) {
		    	output.innerHTML = "Malformed input";
			}
		}
		finally{
			output.innerHTML = eval(input.innerHTML);
		}
	}
});

//State management for toggling dropdown menu, on clicking the list symbol
dropdown_menu.addEventListener("click",()=>{					
	++dropdown_count;
	if(dropdown_count%2==0){dropdown.style.visibility="hidden";}
	else{dropdown.style.visibility="visible";}
});

//Default state of minimize-maximize button : minimize (for all window sizes)
min_btn.style.background = "rgb(0,0,255)";
min_btn.style.color = "white";

//Clicking on min/max button for changing the size of window
//Minimize : Change styling of minimize button
min_btn.addEventListener('click',()=>{
	if(window.innerWidth>=1000){
		calc.style.width = `${window.innerWidth*0.30}px`;
		min_btn.style.background = "rgb(0,0,255)";
		min_btn.style.color = "white";
		max_btn.style.background = "#F5F5F5";
		max_btn.style.color = "black";
	}
});
//Maximize : Change styling of maximize button
max_btn.addEventListener('click',()=>{
	if(window.innerWidth>=1000){
		calc.style.width = `${window.innerWidth*0.55}px`;
		min_btn.style.background = "#F5F5F5";
		min_btn.style.color = "black";
		max_btn.style.background = "rgb(0,0,255)";
		max_btn.style.color = "white";
	}
});

