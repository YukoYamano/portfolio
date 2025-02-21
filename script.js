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
        image: "img/navi-grade.png", 
        link: "https://k.com/navi-grade"
    },
    "goal-tracker": {
        title: "Goal Tracker App",
        description: "An app to track goals and milestones, helping users stay productive and on schedule.",
        image: "img/goal-tracker.png",
        link: "https://.com/goal-tracker"
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
