let a = "";
let b = "";
let sign = "";
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6','7', '8', '9', '.'];
const actions = ['-','+','X','/','%']

const screen = document.querySelector('.calc-screen p')

function clearAll (){
    a = "";
    b = "";
    sign = "";
    finish = false;
    screen.textContent = 0;
};

// const acBtn = document.querySelector('.ac')
// acBtn.addEventListener('click', clearAll);
document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('ac')) return;

    screen.textContent = '';
    const key = event.target.textContent;

    if (digit.includes(key)) {
        if (b === '' && sign === ''){
            if (key === '0'){
                
            }
        a += key;
        // console.log("1 uslovie")
        screen.textContent = parseInt(a);
    } else if (a!=='' && b !=='' & finish) {
        b = key;
        finish = false;
        screen.textContent = parseInt(b);
    } else {
        b += key;
        // console.log("3 uslovie")
        screen.textContent = parseInt(b);
    }
    console.log (a, b, sign);
    return
}
    if (actions.includes(key)) {
        sign = key;
        screen.textContent = sign;
        // console.log("4 uslovie")
        return;
    }
    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "X":
                a = a * b;
                break;
            case "/":
                if (b === '0') {
                    screen.textContent = "Error"
                    a = '';
                    b = '';
                    sign ='';
                    return;
                }
                a =a / b;
                break;
            case "%":
                a = a/100*b;
                break;
        }
        finish = true;
        screen.textContent = a;
        console.log(a, b, sign)
    }
}