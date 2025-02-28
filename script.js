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
// document.getElementById('contact-form').addEventListener('submit', function (e) {
//     e.preventDefault();
//     alert('Your message has been sent!');
//     this.reset();
// });


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
        "nav-faq":"FAQ",
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


        "faq-title": "Frequently Asked Questions",
        "faq-q1": "What services do you offer?",
        "faq-a1": "I offer frontend development, website testing, and UX design improvements. I specialize in creating user-friendly and responsive websites.",
        "faq-q2": "How long does it take to complete a project?",
        "faq-a2": "Project timelines vary based on complexity. Small projects typically take 1-2 weeks, while larger projects may take up to a month.",
        "faq-q3": "What are your rates?",
        "faq-a3": "Rates depend on the project scope. I offer flexible pricing models, including hourly rates and fixed-price contracts.",
        "faq-q4": "Can you update or improve an existing website?",
        "faq-a4": "Absolutely! I can optimize existing websites for better performance, update content, or redesign layouts for a modern look.",
        "faq-q5": "How can I get in touch for a project?",
        "faq-a5": "You can reach out to me through the contact form below or connect with me via LinkedIn or GitHub for collaborations.",



        "step-title": "Contact",
      
        "step-1": "STEP.1",
        "step-2": "STEP.2",
        "step-3": "STEP.3",
        "step1-title": "Tell us about yourself",
        "user-individual": "Individual",
        "user-business": "Business",
        "step2-title": "What would you like to consult about?",
        "consult-web": "Web Development",
        "consult-test": "Software Testing",
        "consult-other": "Other",
        "next": "Next",
       
        "step3-title": "Contact",

        
         // `contact.html` の翻訳を追加
         "contact-user-info":"User information",
         "contact-title": "Contact Me",
         "contact-name": "*Your Name",
         "contact-email": "*Your Email",
         "contact-message": "*Your Message",
         "contact-submit": "Send Message",
         "contact-go-back-button": "Go Back",
        
        
        "contact-go-back-button":"Back to Previous Page",


    },
    jp: {
        "nav-home": "ホーム",
        "nav-about": "自己紹介",
        "nav-skills": "スキル",
        "nav-projects": "プロジェクト",
        "nav-faq":"よくある質問",
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


        "faq-title": "よくある質問",
        "faq-q1": "どのようなサービスを提供していますか？",
        "faq-a1": "フロントエンド開発、ウェブサイトのテスト、UX改善を提供しています。使いやすくレスポンシブなサイト制作を得意としています。",
        "faq-q2": "プロジェクトの納期はどれくらいですか？",
        "faq-a2": "プロジェクトの規模により異なりますが、小規模なものは1〜2週間、大規模なものは最大1ヶ月かかる場合があります。",
        "faq-q3": "料金体系はどうなっていますか？",
        "faq-a3": "プロジェクトの規模に応じて柔軟に対応しています。時間単価や固定料金の両方に対応可能です。",
        "faq-q4": "既存のウェブサイトの更新や改善はできますか？",
        "faq-a4": "もちろん可能です！パフォーマンスの最適化、デザインの刷新、コンテンツの更新など幅広く対応いたします。",
        "faq-q5": "プロジェクトの依頼はどうすればいいですか？",
        "faq-a5": "下部のコンタクトフォームから、またはLinkedIn・GitHub経由でお気軽にご連絡ください。",

        "step-title": "お問い合わせの前に",
      
        "step-1": "STEP.1",
        "step-2": "STEP.2",
        "step-3": "STEP.3",
        "step1-title": "あなたについて教えてください",
        "user-individual": "個人",
        "user-business": "法人",
        "step2-title": "何について相談したいですか？",
        "consult-web": "フロントエンド開発",
        "consult-test": "ソフトウェアテスト",
        "consult-other": "その他",
        "next": "次へ進む",
      
        "step3-title": "お問い合わせ内容",

        // `contact.html` の翻訳を追加
        "contact-title": "お問い合わせ",
        "contact-user-info":"あなたの情報",
        "contact-name": "*お名前",
        "contact-email": "*メールアドレス",
        "contact-message": "*メッセージ",
        "contact-submit": "送信",
        "contact-go-back-button": "戻る",

        "contact-go-back-button":"前のページへ戻る",
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


// FAQのアコーディオン機能
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((btn) => {
    btn.addEventListener('click', () => {
        const answer = btn.nextElementSibling;
        answer.classList.toggle('active');
        btn.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const steps = document.querySelectorAll('.step');
    const stepBtns = document.querySelectorAll('.step-btn');
    const nextBtns = document.querySelectorAll('.next-btn');
    const errorMessageDiv = document.querySelector('.error-message-contact');
    const goToContactBtn = document.getElementById('go-to-contact');

    let currentStep = 0;
    let currentLang = localStorage.getItem('site-language') || 'en';

    // エラーメッセージを最初は非表示にする
    errorMessageDiv.style.display = "none";

    // 言語ごとのエラーメッセージ
    const errorMessages = {
        en: "Please select an option.",
        jp: "いずれかを選択してください。"
    };

    function showStep(index) {
        steps.forEach(step => step.classList.remove('active'));
        stepBtns.forEach(btn => btn.classList.remove('active'));

        steps[index].classList.add('active');
        stepBtns[index].classList.add('active');

        // ステップを切り替えたらエラーメッセージをリセットして非表示にする
        errorMessageDiv.textContent = "";
        errorMessageDiv.style.display = "none";
    }

    function updateErrorMessage() {
        currentLang = localStorage.getItem('site-language') || 'en';
    }

    // **次へ進むボタン**
    nextBtns.forEach((btn, index) => {
        btn.addEventListener('click', function () {
            const radios = steps[index].querySelectorAll('input[type="radio"]');
            const selected = Array.from(radios).some(radio => radio.checked);

            if (!selected) {
                updateErrorMessage();
                errorMessageDiv.textContent = errorMessages[currentLang];
                errorMessageDiv.style.color = "red";
                errorMessageDiv.style.display = "block"; // エラーメッセージを表示
                return;
            }

            errorMessageDiv.textContent = ""; // エラーをクリア
            errorMessageDiv.style.display = "none"; // エラーメッセージを非表示

            if (index < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
            }
        });
    });

    // **ステップボタンのクリックを制御**
    stepBtns.forEach((btn, index) => {
        btn.addEventListener('click', function () {
            if (index === 1 && currentStep === 0) {
                // Step2のボタンを押す前にStep1の選択をチェック
                const radios = document.querySelectorAll('input[name="user-type"]');
                const selected = Array.from(radios).some(radio => radio.checked);

                if (!selected) {
                    updateErrorMessage();
                    errorMessageDiv.textContent = errorMessages[currentLang];
                    errorMessageDiv.style.color = "red";
                    errorMessageDiv.style.display = "block"; // エラーメッセージを表示
                    return;
                }
            }
            currentStep = index;
            showStep(currentStep);
        });
    });

    // ラジオボタン選択時にエラーメッセージを非表示にする
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', function () {
            errorMessageDiv.textContent = "";
            errorMessageDiv.style.display = "none";
        });
    });

    // **問い合わせフォームへ移動**
    goToContactBtn.addEventListener('click', function () {
        const radios = steps[currentStep].querySelectorAll('input[type="radio"]');
        const selected = Array.from(radios).some(radio => radio.checked);

        if (!selected) {
            updateErrorMessage();
            errorMessageDiv.textContent = errorMessages[currentLang];
            errorMessageDiv.style.color = "red";
            errorMessageDiv.style.display = "block"; // エラーメッセージを表示
            return;
        }

        errorMessageDiv.textContent = ""; // エラーをクリア
        errorMessageDiv.style.display = "none"; // エラーメッセージを非表示

        // 選択された値を取得
        const userTypeElement = document.querySelector('input[name="user-type"]:checked');
        const consultationElement = document.querySelector('input[name="consultation"]:checked');

        // `?` をつけるための条件
        const params = [];
        if (userTypeElement) params.push(`userType=${encodeURIComponent(userTypeElement.value)}`);
        if (consultationElement) params.push(`consultation=${encodeURIComponent(consultationElement.value)}`);

        // パラメータがある場合のみ `?` を追加
        const queryString = params.length ? "?" + params.join("&") : "";

        window.location.href = `contact.html${queryString}`;
    });

    // 言語切り替え時にエラーメッセージを変更
    document.getElementById('lang-jp').addEventListener('click', () => {
        localStorage.setItem('site-language', 'jp');
        currentLang = 'jp';
    });

    document.getElementById('lang-en').addEventListener('click', () => {
        localStorage.setItem('site-language', 'en');
        currentLang = 'en';
    });

    showStep(currentStep);
});


document.addEventListener("DOMContentLoaded", function () {
    const steps = document.querySelectorAll('.step');
    const stepBtns = document.querySelectorAll('.step-btn');
    const nextBtns = document.querySelectorAll('.next-btn');
    const errorMessageDiv = document.querySelector('.error-message-contact');
    const contactForm = document.getElementById('contact-form');
    const userInfoField = document.getElementById('contact-user-info');

    let currentStep = 0;
    let currentLang = localStorage.getItem('site-language') || 'en';

    errorMessageDiv.style.display = "none";

    const errorMessages = {
        en: "Please select an option.",
        jp: "いずれかを選択してください。"
    };

    function showStep(index) {
        steps.forEach(step => step.classList.remove('active'));
        stepBtns.forEach(btn => btn.classList.remove('active'));

        steps[index].classList.add('active');
        stepBtns[index].classList.add('active');
     
        errorMessageDiv.textContent = "";
        errorMessageDiv.style.display = "none";
    }

    function updateErrorMessage() {
        currentLang = localStorage.getItem('site-language') || 'en';
    }

    nextBtns.forEach((btn, index) => {
        btn.addEventListener('click', function () {
            const radios = steps[index].querySelectorAll('input[type="radio"]');
            const selected = Array.from(radios).some(radio => radio.checked);

            if (!selected) {
                updateErrorMessage();
                errorMessageDiv.textContent = errorMessages[currentLang];
                errorMessageDiv.style.color = "red";
                errorMessageDiv.style.display = "block";
                return;
            }

            errorMessageDiv.textContent = "";
            errorMessageDiv.style.display = "none";

            if (index < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
               
                if (currentStep === 2) { // Step3 に到達したらデータを入力
                    const userType = document.querySelector('input[name="user-type"]:checked').value;
                    const consultation = document.querySelector('input[name="consultation"]:checked').value;
                    
                    userInfoField.value = `【${userType}】 ${consultation}`;
                }
            }
        });
    });

    stepBtns.forEach((btn, index) => {
        btn.addEventListener('click', function () {

            console.log("index: " + index);
            console.log("currentStep: " + currentStep);
            if (index === 1 && currentStep === 0) {
                // Step1 の選択チェック
                const radios = document.querySelectorAll('input[name="user-type"]');
                const selected = Array.from(radios).some(radio => radio.checked);

                if (!selected) {
                    updateErrorMessage();
                    errorMessageDiv.textContent = errorMessages[currentLang];
                    errorMessageDiv.style.color = "red";
                    errorMessageDiv.style.display = "block";
                    return;
                }
            }

            if (index === 2 ) {
                // Step1とStep2が完了していない場合、Step3に進めない
                if (currentStep <1 ) {
                    updateErrorMessage();
                    errorMessageDiv.textContent = errorMessages[currentLang];
                    errorMessageDiv.style.color = "red";
                    errorMessageDiv.style.display = "block";
                    return;
                }else{
                    currentStep = index;
                    showStep(currentStep);
                }
            }

            if (currentStep === 2) { // Step 3 に到達したらデータを入力
                const userType = document.querySelector('input[name="user-type"]:checked').value;
                const consultation = document.querySelector('input[name="consultation"]:checked').value;
                
                userInfoField.value = `【${userType}】 ${consultation}`;
            }
        });
    });

    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', function () {
            errorMessageDiv.textContent = "";
            errorMessageDiv.style.display = "none";
        });
    });

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('お問い合わせが送信されました！');
        contactForm.reset();
        currentStep = 0;
        showStep(currentStep);
    });
});
