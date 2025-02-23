// ===================== スライドショー機能 =====================
const slides = document.querySelectorAll('.slideshow img');
let currentSlide = 0;

function showMainSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function startSlideshow() {
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showMainSlide(currentSlide);
    }, 5000);
}

window.addEventListener('DOMContentLoaded', startSlideshow);


// ===================== タブ切り替え機能 =====================
const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        const targetContent = document.getElementById(tab.getAttribute('data-tab'));
        targetContent.classList.add('active');
    });
});


// ===================== スムーズスクロール =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// ===================== フッターの年数自動更新 =====================
document.getElementById('year').textContent = new Date().getFullYear();


// ===================== お問い合わせフォームのバリデーション =====================
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Your message has been sent!');
    this.reset();
});


// ===================== スクロールアニメーション =====================
const sections = document.querySelectorAll('section');
const options = { threshold: 0.2 };

const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    section.classList.add('fade-in');
    revealOnScroll.observe(section);
});


// ===================== ハンバーガーメニュー =====================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});


// ===================== 言語切替 =====================
const langJP = document.getElementById('lang-jp');
const langEN = document.getElementById('lang-en');

const translations = {
    en: {
        "nav-home": "Home",
        "nav-about": "About Me",
        "nav-skills": "Skills",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "hero-title": "Hi, I'm Yuko Yamano",
        "hero-subtitle": "Frontend Developer | Software Tester",
        "view-work": "View My Work",
        "about-title": "About Me",
        "about-summary-tab": "Summary",
        "about-education-tab": "Education",
        "about-certificate-tab": "Certificate",
        "about-summary-content": "This is the first line.<br>This is the second line.",
        "about-education-content": "Graduated from XYZ University.<br>Major: Computer Science",
        "about-certificate-content": "Certificate content",
        "skills-title": "Skills",
        "projects-title": "Projects",
        
        "project1-title":"Navi Grade",
        "project-list1":"XX",
        "project-list2":"XX",
        "project-list3":"XXXX",


        "contact-title": "Contact",
        "contact-name": "Your Name",
        "contact-email": "Your Email",
        "contact-message": "Your Message",
        "contact-submit": "Send Message"
    },
    jp: {
        "nav-home": "ホーム",
        "nav-about": "自己紹介",
        "nav-skills": "スキル",
        "nav-projects": "プロジェクト",
        "nav-contact": "お問い合わせ",
        "hero-title": "山野優子",
        "hero-subtitle": "フロントエンドエンジニア | ソフトウェアテスター",
        "view-work": "作品を見る",
        "about-title": "自己紹介",
        "about-summary-tab": "サマリー",
        "about-education-tab": "学歴",
        "about-certificate-tab": "資格",
        "about-summary-content": "サマリーの内容です",
        "about-education-content": "学歴の内容です",
        "about-certificate-content": "資格の内容です",
        "skills-title": "スキル",
        "projects-title": "プロジェクト",
       
        "project1-title":"Navi Grade - ナビグレード",
        "project-list1":"学生用タイムマネジメントシステム",
        "project-list2":"MERNスタックで構成されたウェブアプリケーション",
        "project-list3":"ReactとReact Bootstrapを使用して構築",








        "contact-title": "お問い合わせ",
        "contact-name": "お名前",
        "contact-email": "メールアドレス",
        "contact-message": "メッセージ",
        "contact-submit": "送信"
    }
};

function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = translations[lang][key];
        } else {
            el.innerHTML = translations[lang][key];
        }
    });
    localStorage.setItem('site-language', lang);
}

window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('site-language') || 'en';
    switchLanguage(savedLang);
});

langJP.addEventListener('click', () => switchLanguage('jp'));
langEN.addEventListener('click', () => switchLanguage('en'));

const projectSlides = document.querySelector('.project-slides');
const projectCards = document.querySelectorAll('.project-card');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
const slideWidth = projectCards[0].offsetWidth + 20;

// クローンを作成して無限ループを実現
const firstClone = projectCards[0].cloneNode(true);
const lastClone = projectCards[projectCards.length - 1].cloneNode(true);

firstClone.classList.add('clone');
lastClone.classList.add('clone');

projectSlides.appendChild(firstClone);
projectSlides.insertBefore(lastClone, projectCards[0]);

let totalSlides = projectCards.length + 2; // クローンを含めた総数
projectSlides.style.transform = `translateX(-${slideWidth}px)`; // 最初のスライドに位置調整

function moveToSlide(index) {
    projectSlides.style.transition = 'transform 0.5s ease-in-out';
    projectSlides.style.transform = `translateX(-${(index + 1) * slideWidth}px)`;

    currentIndex = index;

    // ドットの更新
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex % projectCards.length].classList.add('active');
}

// スライドの無限ループ制御
projectSlides.addEventListener('transitionend', () => {
    if (currentIndex === projectCards.length) {
        projectSlides.style.transition = 'none';
        projectSlides.style.transform = `translateX(-${slideWidth}px)`;
        currentIndex = 0;
    }

    if (currentIndex === -1) {
        projectSlides.style.transition = 'none';
        projectSlides.style.transform = `translateX(-${slideWidth * projectCards.length}px)`;
        currentIndex = projectCards.length - 1;
    }
});

// ボタン操作
document.querySelector('.right-btn').addEventListener('click', () => {
    if (currentIndex < projectCards.length) {
        moveToSlide(currentIndex + 1);
    }
});

document.querySelector('.left-btn').addEventListener('click', () => {
    moveToSlide(currentIndex - 1);
});

// ドットクリック
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        moveToSlide(index);
    });
});

