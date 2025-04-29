document.querySelector('.price__button_booking').addEventListener('click', () => {
    document.querySelector('.booking__disabled').className = 'booking';
})
document.querySelector('.price__button_consultation').addEventListener('click', () => {
    document.querySelector('.booking__disabled').className = 'booking';
})
document.querySelector('.booking__link').addEventListener('click', () => {
    document.querySelector('.booking').className = 'booking__disabled';
})