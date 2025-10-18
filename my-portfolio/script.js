// Плавный скролл для навигации
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Обработка формы контактов
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Простая валидация (браузер уже проверяет required)
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            alert('Спасибо! Сообщение отправлено. (В реальности интегрируй с сервером.)');
            form.reset(); // Очистка формы
        } else {
            alert('Заполните все поля!');
        }
    });
});
