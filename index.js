 const generateBtn=document.getElementById('generate-btn');
 const copyHEX=document.getElementById('copy-btn');
const copyRgb=document.getElementById('copy-RGB');
const colorBox=document.getElementById('color-box');
const reset_Btn=document.getElementById('resetBtn');
const colorcode=document.getElementById('colorcode');

let color_code = 'hexchars';

function GenerateBtn(){
    const hexchars =" 0123456789ABCDEF";
    let hexcolor ='#';

    for (let i = 0; i < 6;i++) {
        hexcolor += hexchars[Math.floor(Math.random() * 16)];
        
    };
    //displaying the colors
    colorBox.style.backgroundColor = hexcolor


    // displaying the colour code
    colorcode.innerHTML = hexcolor;
    colorcode.style.color = hexcolor

    }
function ResetBtn(){
    colorBox.style.backgroundColor =null;

    colorcode.innerHTML = null;
    colorcode.style.color = null;
}

function RGB() {
    const colorText = colorBox.style.backgroundColor;
    const temInput =document.createElement("input");
    document.body.appendChild(temInput);
    temInput.value = colorText;
    temInput.select();
    document.execCommand("copy");
    document.body.removeChild(temInput);
    alert("color copied to clipboard:" + colorText);
    
    };


    
    


