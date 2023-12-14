const magicBall = document.getElementById('magicBall');
const resultDiv = document.getElementById('result');
const circleImage = document.getElementById('circleImage');

magicBall.addEventListener('click', () => {
    const responses = [
        'Так',
        'Ні',
        'Можливо',
        'Не впевнений, але так',
        'Не впевнений, але ні'
    ];

    const randomIndex = Math.floor(Math.random() * responses.length);
    const randomResponse = responses[randomIndex];

    resultDiv.textContent = randomResponse;

    magicBall.style.transform = 'scale(1.2)';
    setTimeout(() => {
        magicBall.style.transform = 'scale(1)';
    }, 300);
});
