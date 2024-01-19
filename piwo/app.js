const btnOne = document.querySelector('.pl-1');
const a1 = document.querySelector('.a1');
const p1 = document.querySelector('.p1');

const btnTwo = document.querySelector('.pl-2');
const a2 = document.querySelector('.a2');
const p2 = document.querySelector('.p2');

let counter1 = 0;
let totalPrice1 = 0;

let counter2 = 0;
let totalPrice2 = 0;

btnOne.addEventListener('click', ()=> {
    counter1++;
    totalPrice1 += 1.65;
    a1.innerHTML = counter1;
    p1.innerText = `${totalPrice1.toFixed(2)} zł`;
})

btnTwo.addEventListener('click', ()=> {
    counter2++;
    totalPrice2 += 1.65;
    a2.innerHTML = counter2;
    p2.innerText = `${totalPrice2.toFixed(2)} zł`;
})