// Функция для создания эффекта фейерверка
function launchFirework(x, y) {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = x + 'px';
    firework.style.top = y + 'px';
    document.body.appendChild(firework);

    // Удаление фейерверка после анимации
    setTimeout(() => {
        firework.remove();
    }, 1000); // Время, через которое фейерверк будет удален
}

// Добавление стилей для фейерверка
const style = document.createElement('style');
style.innerHTML = `
.firework {
    position: absolute;
    width: 20px;
    height: 20px;
    background: radial-gradient(circle, yellow, orange);
    border-radius: 50%;
    animation: explode 1s forwards;
}

@keyframes explode {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    100% {
        transform: scale(5);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);
