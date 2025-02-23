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
        const href = this.getAttribute('href');

        // スムーズスクロールは内部リンクのみに適用
        if (href.startsWith('#') && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
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
        "project1-list1":"XX",
        "project1-list2":"XX",
        "project1-list3":"XXXX",

        "project2-title":"Navi Grade",
        "project2-list1":"XX",
        "project2-list2":"XX",
        "project2-list3":"XXXX",

        "project3-title":"Navi Grade",
        "project3-list1":"XX",
        "project3-list2":"XX",
        "project3-list3":"XXXX",

        "project4-title":"Navi Grade",
        "project4-list1":"XX",
        "project4-list2":"XX",
        "project4-list3":"XXXX",

        "project5-title":"Navi Grade",
        "project5-list1":"XX",
        "project5-list2":"XX",
        "project5-list3":"XXXX",

        "project6-title":"Navi Grade",
        "project6-list1":"XX",
        "project6-list2":"XX",
        "project6-list3":"XXXX",

        "project7-title":"Navi Grade",
        "project7-list1":"XX",
        "project7-list2":"XX",
        "project7-list3":"XXXX",

        "modal-title":"Title",
        "modal-duration":"Duration",
        "modal-process":"Process",
        "modal-link":"Detail",


        "parallax-message":"Let's Connect!",

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
        "project1-list1":"学生用タイムマネジメントシステム",
        "project1-list2":"MERNスタックで構成されたウェブアプリケーション",
        "project1-list3":"ReactとReact Bootstrapを使用して構築",

        "project2-title":"Navi Grade",
        "project2-list1":"XX",
        "project2-list2":"XX",
        "project2-list3":"XXXX",

        "project3-title":"Navi Grade",
        "project3-list1":"XX",
        "project3-list2":"XX",
        "project3-list3":"XXXX",

        "project4-title":"Navi Grade",
        "project4-list1":"XX",
        "project4-list2":"XX",
        "project4-list3":"XXXX",

        "project5-title":"Navi Grade",
        "project5-list1":"XX",
        "project5-list2":"XX",
        "project5-list3":"XXXX",

        "project6-title":"Navi Grade",
        "project6-list1":"XX",
        "project6-list2":"XX",
        "project6-list3":"XXXX",

        "project7-title":"Navi Grade",
        "project7-list1":"XX",
        "project7-list2":"XX",
        "project7-list3":"XXXX",

        "modal-title":"タイトル",
        "modal-duration":"制作期間",
        "modal-process":"制作過程",
        "modal-link":"詳細ページへ",

        "parallax-message":"お問い合わせ",

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

// モーダル関連の要素取得

let currentLang = localStorage.getItem('site-language') || 'en';
let currentProjectKey = null; // モーダルで表示中のプロジェクトを保持

const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalDuration = document.getElementById('modal-duration').querySelector('span');
const modalProcess = document.getElementById('modal-process').querySelector('span');
const modalDetailLink = document.getElementById('modal-detail-link');
const closeBtn = document.querySelector('.close-btn');

// プロジェクトデータ
const projectDetails = {
    "project1": {
        en: {
            title: "Navi Grade",
            duration: "3 months",
            process: "Requirement → Design → Development → Testing",
            link: "https://github.com/Avril-TFS/COMP313-002",
            image: "img/NaviGradeScr.png"
        },
        jp: {
            title: "ナビグレード",
            duration: "3ヶ月",
            process: "要件定義 → 設計 → 開発 → テスト",
            link: "https://github.com/Avril-TFS/COMP313-002",
            image: "img/NaviGradeScr.png"
        }
    },
    "project2": {
        en: {
            title: "Navi Grade",
            duration: "3 months",
            process: "Requirement → Design → Development → Testing",
            link: "https://github.com/Avril-TFS/COMP313-002",
            image: "img/NaviGradeScr.png"
        },
        jp: {
            title: "ナビグレード",
            duration: "3ヶ月",
            process: "要件定義 → 設計 → 開発 → テスト",
            link: "https://github.com/Avril-TFS/COMP313-002",
            image: "img/NaviGradeScr.png"
        }
    },
    "project3": {
        en: {
            title: "Navi Grade",
            duration: "3 months",
            process: "Requirement → Design → Development → Testing",
            link: "https://github.com/Avril-TFS/COMP313-002",
            image: "img/NaviGradeScr.png"
        },
        jp: {
            title: "ナビグレード",
            duration: "3ヶ月",
            process: "要件定義 → 設計 → 開発 → テスト",
            link: "https://github.com/Avril-TFS/COMP313-002",
            image: "img/NaviGradeScr.png"
        }
    },
    "project4": {
        en: {
            title: "Navi Grade",
            duration: "3 months",
            process: "Requirement → Design → Development → Testing",
            link: "https://github.com/Avril-TFS/COMP313-002",
            image: "img/NaviGradeScr.png"
        },
        jp: {
            title: "ナビグレード",
            duration: "3ヶ月",
            process: "要件定義 → 設計 → 開発 → テスト",
            link: "https://github.com/Avril-TFS/COMP313-002",
            image: "img/NaviGradeScr.png"
        }
    },
    "project5": {
        en: {
            title: "Navi Grade",
            duration: "3 months",
            process: "Requirement → Design → Development → Testing",
            link: "https://github.com/Avril-TFS/COMP313-002",
            image: "img/NaviGradeScr.png"
        },
        jp: {
            title: "ナビグレード",
            duration: "3ヶ月",
            process: "要件定義 → 設計 → 開発 → テスト",
            link: "https://github.com/Avril-TFS/COMP313-002",
            image: "img/NaviGradeScr.png"
        }
    },
    "project6": {
        en: {
            title: "Navi Grade",
            duration: "3 months",
            process: "Requirement → Design → Development → Testing",
            link: "https://github.com/Avril-TFS/COMP313-002",
            image: "img/NaviGradeScr.png"
        },
        jp: {
            title: "ナビグレード",
            duration: "3ヶ月",
            process: "要件定義 → 設計 → 開発 → テスト",
            link: "https://github.com/Avril-TFS/COMP313-002",
            image: "img/NaviGradeScr.png"
        }
    },
    "project7": {
        en: {
            title: "Navi Grade",
            duration: "3 months",
            process: "Requirement → Design → Development → Testing",
            link: "https://github.com/Avril-TFS/COMP313-002",
            image: "img/NaviGradeScr.png"
        },
        jp: {
            title: "ナビグレード",
            duration: "3ヶ月",
            process: "要件定義 → 設計 → 開発 → テスト",
            link: "https://github.com/Avril-TFS/COMP313-002",
            image: "img/NaviGradeScr.png"
        }
    }
};

// ===== モーダル表示処理 =====


// モーダル表示関数
function showModal(projectKey) {
    currentProjectKey = projectKey; // モーダルで表示中のプロジェクトを保持
    const project = projectDetails[projectKey][currentLang];

    modalTitle.textContent = project.title;
    modalImage.src = project.image;
    modalDuration.textContent = project.duration;
    modalProcess.textContent = project.process;
    modalDetailLink.setAttribute('href', project.link);
    modalDetailLink.setAttribute('target', '_blank');
    modal.style.display = 'block';
}

// プロジェクトカードクリックでモーダル表示
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const projectKey = card.getAttribute('data-project-id');
        showModal(projectKey);
    });
});

// モーダルを閉じる
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    currentProjectKey = null;
});

// モーダル外クリックで閉じる
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        currentProjectKey = null;
    }
});


// ツールチップの表示制御
const skillCards = document.querySelectorAll('.skill-card');
const tooltip = document.getElementById('tooltip');

skillCards.forEach(card => {
    card.addEventListener('mouseover', (e) => {
        const description = card.getAttribute('data-description');
        tooltip.textContent = description;
        tooltip.style.display = 'block';
        positionTooltip(e);
    });

    card.addEventListener('mousemove', (e) => {
        positionTooltip(e);
    });

    card.addEventListener('mouseout', () => {
        tooltip.style.display = 'none';
    });
});


// カルーセルの無限ループを作成
document.addEventListener("DOMContentLoaded", () => {
    const skillsTrack = document.querySelector('.skills-track');
    const skillCards = document.querySelectorAll('.skill-card');

    // スキルカードを複製して末尾に追加
    skillCards.forEach(card => {
        const clone = card.cloneNode(true);
        skillsTrack.appendChild(clone);
    });
});
