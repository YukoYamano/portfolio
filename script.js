// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// フッターの年数を自動更新
document.getElementById('year').textContent = new Date().getFullYear();

// お問い合わせフォームのバリデーション
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Your message has been sent!');
    this.reset();
});

// スクロールアニメーション
const sections = document.querySelectorAll('section');

const options = {
    threshold: 0.2
};

const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // 一度表示したら監視解除
        }
    });
}, options);

sections.forEach(section => {
    section.classList.add('fade-in');
    revealOnScroll.observe(section);
});
