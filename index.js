var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  })

var num1=0;
var num2=0;
$(".btn").click(function(){
    var clickedBtn=this.id;
    calc(clickedBtn);
    console.log(clickedBtn);

  
});

function calc(num)
{
    switch(num)
    {
        case "AC":
            $("input").val("");
            num1=0;
            num2=0;
            break;
        case "DEL":
            var ival= $("input").val();
            ival=Math.floor(ival/10);
            console.log(ival);
            if(ival==0)
            {
                $("input").val("");
            }
            else
            {
                $("input").val(ival);
            }
            break;
        case '1':
            addDigit(1);
            break;
        case '2':
            addDigit(2);
            break;
        case '3':
            addDigit(3);
            break;
        case '4':
            addDigit(4);
            break;
        case '5':
            addDigit(5);
            break;
        case '6':
            addDigit(6);
            break;
        case '7':
            addDigit(7);
            break;
        case '8':
            addDigit(8);
            break;
        case '9':
            addDigit(9);
            break;
        case '0':
            addDigit(0);
            break;      
    }
}
var f=true;
var op;
function addDigit(digit)
{
    console.log( "digit= "+ digit)
    
    if (digit=="/" || digit=='*'|| digit=='-'|| digit=='+')
    {
        

    }
    else
    {
        if(f)
        {
            num1=num1*10+digit;
            console.log("num1= "+ num1);
            $("input").val(num1);
        }
        else
        {
            num2=num2*10+digit;
            $("input").val(num2);
            var ans=doOp();
            $("input").val(ans);
            num1=0;
            num2=0;
            
        }

    }

}

function doOp( op)
{
    switch(op)
    {
        case '/':
            return num1/num2;
        case '*':
            return num1*num2;
        case '-':
            return num1-num2;
        case '+':
            return num1+num2;     
    }

}