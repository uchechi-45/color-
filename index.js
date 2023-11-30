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
    const tempInput =document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = colorText;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("color copied to clipboard:" + colorText);
    
    };
    function copyHex() {
      const colorText = colorBox.style.backgroundColor;
      const hexcode = rgbToHex(colorText);
      const tempInput = document.createElement("input");
      document.body.appendChild(tempInput);
      tempInput.value = hexcode;
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      alert("color copied to clipboard: " + hexcode);
    
    };
    function rgbToHex(rgbColor) {
        const regex = /rgb\((\d+), (\d+), (\d+)\)/;
        const matches = regex.exec(rgbColor);
        const r = parseInt(matches[1]);
        const g = parseInt (matches[2]);
        const b = parseInt (matches[3]);
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    
    };
    function componentToHex(c){
        const hex = c.toString(16);
        return hex. length == 1 ? "0" + hex : hex;
    };


    
    


