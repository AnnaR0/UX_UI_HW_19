var helloWorld = 'Goodbye and thanks for all the fish!';
console.log('Goodbye and thanks for all the fish!')

const btn = document.getElementById('btn');

function fire(ratio, opt){
    confetti(Object.assign({}, opt, {
        origin: {y: .9},
        particleCount: Math.floor(200 * ratio)
    }));
}

btn.addEventListener('click', () => {
    fire(.25, {
        spread: 30,
        startVelocity: 60
    });
    fire(.2, {spread: 60});
    fire(.35, {
        spread: 100,
        decay: .9,
        scalar: 1
    });
    fire(.1, {
        spread: 130,
        startVelocity: 30,
        decay: .92,
        scalar: 1.2
    });
    fire(.2, {
        spread: 120,
        startVelocity: 45
    });
});




/* SIMPLE CONFETTI
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: {y: .9}
    });
});
*/