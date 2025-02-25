const scrollContent = document.querySelector('.scroll')
const faqs = document.querySelectorAll('.faq')
let scrollposition = 0;

function scrollleft(){
    scrollposition -= 300;
    scrollContent.style.transform = `translateX(${scrollposition}px)`;
}

console.log(scrollleft())

function scrollRight() {
    scrollposition += 300;
    scrollContent.style.transform = `translateX(${scrollposition}px)`;
}


faqs.forEach(faq => {
    faq.addEventListener('click', () => {
      faq.classList.toggle('active');
    });
  });
