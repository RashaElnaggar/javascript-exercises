const input1 =document.getElementById('input-number1');
const input2 =document.getElementById('input-number2');
const addbtn=document.getElementById('btn-add');
const subbtn=document.getElementById('btn-subtract');
const multplybtn=document.getElementById('btn-multiply');
const devidebtn=document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

  let res= 0;
 currentResultOutput.textContent=res;
 var num1=parseInt(input1.value);
 var num2 = parseInt(input2.value)
  
   
   addbtn.addEventListener("click",add);
   function add(){
   var num1=parseInt(input1.value);
     var num2 = parseInt(input2.value);
     sumres = num1 + num2;
    // var sumres=parseInt(input1.value)+parseInt(input2.value);
    console.log(sumres);
    currentResultOutput.textContent=sumres;
     
   }
 subbtn.addEventListener("click",sub);

function sub(){
  var num1=parseInt(input1.value);
  var num2 = parseInt(input2.value);
   var subres=num1-num2;
    console.log(subres);
    currentResultOutput.textContent=subres;
  
  }
 multplybtn.addEventListener('click',multiply);

function multiply(){

    var mulres=num1*num2;
    console.log(mulres);
    currentResultOutput.textContent=mulres;
  
  }
devidebtn.addEventListener('click',devide);

function devide(){
  var num1=parseInt(input1.value);
  var num2 = parseInt(input2.value);
    var devres=num1/num2;
    console.log(devres);
    currentResultOutput.textContent=devres;
  
  }
