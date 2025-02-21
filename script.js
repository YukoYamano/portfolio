// スライドショー機能
const slides = document.querySelectorAll('.slideshow img');
let currentSlide = 0;

// スライドを切り替える関数
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); // 全て非表示
        if (i === index) {
            slide.classList.add('active'); // 対象のスライドを表示
        }
    });
}

// 自動スライド機能
function startSlideshow() {
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length; // 次のスライドへ
        showSlide(currentSlide);
    }, 5000); // 5秒ごとに切り替え
}

// ページロード時にスライドショーを開始
window.addEventListener('DOMContentLoaded', startSlideshow);



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


// モーダル関連の要素取得
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalImage = document.getElementById('modal-image');
const modalLink = document.getElementById('modal-link');
const closeBtn = document.querySelector('.close-btn');

// プロジェクトデータ
const projectDetails = {
    "navi-grade": {
        title: "Navi Grade",
        description: "A grade management app built with the MERN stack. Features include real-time updates and intuitive UI.",
        image: "img/navi-grade.png",      //TODO
        link: "https://k.com/navi-grade" //TODO
    },
    "goal-tracker": {
        title: "Goal Tracker App",
        description: "An app to track goals and milestones, helping users stay productive and on schedule.",
        image: "img/goal-tracker.png",      //TODO
        link: "https://.com/goal-tracker"   //TODO
    }
};

// プロジェクトカードクリックでモーダル表示
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const projectKey = card.getAttribute('data-project');
        const project = projectDetails[projectKey];

        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        modalImage.src = project.image;
        modalLink.href = project.link;

        modal.style.display = 'block';
    });
});

// モーダルの閉じるボタン
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// モーダル外をクリックで閉じる
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});


// ハンバーガーメニューの開閉制御
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// メニューリンクをクリックしたらメニューを閉じる
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});





//言語切替--------------------------------------------------------------------------------------------
// 言語切り替えボタンを取得
const langJP = document.getElementById('lang-jp');
const langEN = document.getElementById('lang-en');


// 言語データ
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
        "about-description": "I'm a frontend developer passionate about creating intuitive user experiences and efficient code.",
        "skills-title": "Skills",
        "projects-title": "Projects",
        "navi-description": "Grade management app built using the MERN stack.",
        "goal-description": "Track your goals and milestones effortlessly.",
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
        "about-description": "直感的なユーザー体験と効率的なコード作成に情熱を持つフロントエンド開発者です。",
        "skills-title": "スキル",
        "projects-title": "プロジェクト",
        "navi-description": "MERNスタックを使用した成績管理アプリ",
        "goal-description": "目標とマイルストーンを簡単に追跡できるアプリ",
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
        } else if (el.tagName === 'BUTTON') {
            el.textContent = translations[lang][key];
        } else {
            el.textContent = translations[lang][key];
        }
    });

    // 言語設定をローカルストレージに保存
    localStorage.setItem('site-language', lang);
}

// ページロード時に言語を反映
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('site-language') || 'en';
    switchLanguage(savedLang);
});

// 言語切り替えボタンクリック
langJP.addEventListener('click', () => switchLanguage('jp'));
langEN.addEventListener('click', () => switchLanguage('en'));
