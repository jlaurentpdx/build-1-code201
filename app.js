const generate = document.getElementById('generate');
const randomNum = document.getElementById('random-num');

generate.addEventListener('click', () => {
    const output = Math.random();

    randomNum.textContent = output;
});
