var helloWorld = 'Goodbye and thanks for all the fish!';
console.log('Goodbye and thanks for all the fish!')

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: {y: .6}
    });
});

/*$('btn').on('click', function() {
    $(confetti{
        particleCount: 100,
        spread: 70,
        origin {y: .6}
    });
    */