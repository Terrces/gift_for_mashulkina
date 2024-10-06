const gameArea = document.getElementById('gameArea');
const flowersCount = 10; // Количество цветочков

// Задаем параметры для изображений
const totalImages = 67; // Общее количество изображений
const girlImages = Array.from({ length: totalImages }, (_, index) => `Masha/${index + 1}.jpg`); // Генерация массива путей к изображениям

// Массив случайных сообщений
const messages = [
    "Дорогая моя машулькина! Поздравляю тебя с 18-летием! Этот день знаменует начало нового этапа в жизни. Пусть впереди будет много интересных приключений и возможностей!",
    "Поздравлю с днем рождения! Желаю тебе счастья, здоровья и настоящих друзей, которые всегда будут рядом. Пусть твоя жизнь будет яркой и насыщенной!",
    "Машулька, с 18-летием! Пусть все твои мечты сбываются, а каждый новый день приносит радость и вдохновение. Не бойся следовать за своими желаниями!",
    "Дорогая Машулькина! С днем рождения! Желаю тебе наслаждаться каждым моментом, быть смелой и открытой к новым впечатлениям. Жизнь – это удивительное путешествие!",
    "С днем рождения, Машулька! Теперь ты взрослый человек, и впереди столько всего интересного! Желаю тебе уверенности в себе и мудрости в принятии решений.",
    "Машинкина, поздравляю тебя с 18-летием! Пусть в твоей жизни будет больше ярких моментов, улыбок и смеха. Живи на полную какушку и радуйся каждому дню!",
    "С днем рождения, Машулька! Входя во взрослую жизнь, помни о свободе выбора. Желаю тебе сделать правильные шаги и находить счастье в каждом из них!",
    "Дорогая моя Машулька! Поздравляю с днем рождения! Желаю, чтобы рядом всегда были люди, готовые поддержать и поделиться радостью. Пусть в жизни будет много любви и тепла!",
    "Машуля, с 18-летием! Пусть твоя жизнь будет полна ярких приключений и увлекательных событий. Никогда не бойся пробовать новое и идти к своим мечтам!",
    "С днем рождения, Машулькина! Пусть этот день станет началом удивительного пути, полного свершений и радостных моментов. Не забывай следовать за своими мечтами!"
];


const messageElement = document.getElementById('greetingText');

// Функция для создания цветочков
function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');

    // Случайное положение на экране
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.top = Math.random() * 100 + 'vh';

    // Добавление события клика
    flower.addEventListener('click', function(event) {
        // Удаление цветка
        flower.remove();
        // Появление случайного изображения девушки под курсором
        createImageUnderCursor(event.clientX, event.clientY);
        // Смена сообщения на случайное
        changeMessage();
        // Создание нового цветка
        createFlower();
    });

    gameArea.appendChild(flower);
}

// Функция для создания изображения девушки под курсором
function createImageUnderCursor(x, y) {
    const dancer = document.createElement('div');
    dancer.classList.add('dancer');

    // Случайный выбор изображения девушки
    const randomImageIndex = Math.floor(Math.random() * girlImages.length);
    dancer.style.backgroundImage = `url('${girlImages[randomImageIndex]}')`; // Случайное изображение девушки
    
    // Создание изображения и получение его размеров
    const img = new Image();
    img.src = girlImages[randomImageIndex];
    
    img.onload = function() {
        const imageWidth = img.width; // Ширина изображения
        const imageHeight = img.height; // Высота изображения

        // Установка коэффициента масштаба
        const scaleFactor = 0.5; // Уменьшение в 2 раза

        // Ограничиваем координаты, чтобы изображение не выходило за границы экрана
        const adjustedX = Math.min(window.innerWidth - (imageWidth * scaleFactor), Math.max(0, x));
        const adjustedY = Math.min(window.innerHeight - (imageHeight * scaleFactor), Math.max(window.innerHeight - (imageHeight * scaleFactor) - 100, y));

        // Задаем размеры для div с изображением
        dancer.style.width = (imageWidth * scaleFactor) + 'px';
        dancer.style.height = (imageHeight * scaleFactor) + 'px';
        dancer.style.left = adjustedX + 'px';
        dancer.style.top = adjustedY + 'px';
        dancer.style.position = 'absolute'; // Добавляем позиционирование

        document.body.appendChild(dancer);

        // Удаление изображения через 1 секунду
        setTimeout(() => {
            dancer.style.transition = 'opacity 0.5s';
            dancer.style.opacity = '0'; // Постепенно исчезает
            setTimeout(() => {
                dancer.remove(); // Удаление после исчезновения
            }, 500);
        }, 800); // Пауза перед началом анимации
    };
}

// Функция для смены текста на случайное сообщение
function changeMessage() {
    const randomMessageIndex = Math.floor(Math.random() * messages.length);
    messageElement.textContent = messages[randomMessageIndex]; // Случайное сообщение
}

// Создание цветочков
for (let i = 0; i < flowersCount; i++) {
    createFlower();
}