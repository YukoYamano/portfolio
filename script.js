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
    }, 10000);
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
        "hero-subtitle": "Developer | Software Tester",
        "view-work": "View My Work",
        "contact":"ContactContact",
        "about-title": "About Me",
        "about-1-tab": "My Approach to Development",
        "about-2-tab": "My Learning & Certifications",
        "about-3-tab": "Career Journey",
        
        "about-1-content": "When developing software, I prioritize usability, code readability, and code reusability. To achieve this, I take the time to carefully design systems and ensure that projects, whether individual or team-based, are well-structured and planned. Of course, project timelines can be restrictive, and it is not always possible to allocate sufficient time for documentation.<br> In such cases, I leverage my knowledge of testing and incorporate Test-Driven Development (TDD) to improve efficiency and maintain high code quality.<br><br>Through my experience in the marketing research industry, I learned the importance of analyzing human behavior and making data-driven decisions.<br> I apply this experience to software development by improving software quality through data-driven approaches and creating solutions based on user behavior and needs.<br><br> I actively seek out common challenges people face and strive to provide effective solutions through software development.",
        "about-2-content": "<ul>"
            + "<li><strong>Software Engineering Technology - Game Programming Advanced Diploma (High Honours)</strong><br>"
            + "Centennial College, Toronto, ON (Jan. 2021 - Apr. 2024)<br>"
            + "GPA: 4.3/4.5<br><br>"
            + "<strong>Relevant Courses:</strong><br>"
            + "<ul>"
            + "<li>Programming I & II</li>"
            + "<li>Web Interface Design</li>"
            + "<li>Java Programming</li>"
            + "<li>Web Application Development</li>"
            + "<li>Unix/Linux Operating Systems</li>"
            + "<li>Software Engrg Methodologies I & II</li>"
            + "</ul><br>"
            + "Gained hands-on experience in frontend development, game programming, and software testing, expanding my knowledge in web and application development."
            + "</li><br>"

            + "<li><strong>The Complete 2024 Software Testing Bootcamp</strong><br>"
            + "Nezam Academy via Udemy (May 2024 - Jul. 2024)<br>"
            + "• Gained practical knowledge of software testing methodologies, test case creation, and automation testing.<br>"
            + "</li><br>"

            + "<li><strong>Game Design & Development Course (Online)</strong><br>"
            + "Michigan State University via Coursera (May 2020 - Sep. 2020)<br>"
            + "• Learned the fundamentals of game design and development.<br>"
            + "</li><br>"

            + "<li><strong>International Communication Associate Degree</strong><br>"
            + "Aichi Sangyo University, Aichi, Japan (Apr. 2003 - Mar. 2005)<br>"
            + "</li>"
            + "</ul><br>"

            + "<h4>Certifications</h4>"
            + "<ul>"
            + "<li><strong>ISTQB Certified Tester Foundation Level (ISTQB CTFL)</strong><br>"
            + "Issued: June 2024 (Brightest)</li>"
            + "</ul>",
        "about-3-content": 
       "<p>My journey into software development began with web development and content creation. As a self-employed web developer, I built and maintained websites while also creating engaging content for various clients.</p><br>"

            + "<h4>Web Development & Content Creation</h4>"
            + "<ul>"
            + "<li><strong>Web Developer & Content Creator (Nov. 2015 - Dec. 2020)</strong><br>"
            + "• Developed and maintained websites using HTML/CSS with WordPress.<br>"
            + "• Created website content for 5 clients and contributed to the development of 8 websites.<br>"
            + "• Edited existing content to enhance clarity and user engagement.</li><br>"
            + "</ul>"

            + "<p>Through these experiences, I developed a strong interest in web technologies, leading me to pursue formal education in Software Engineering Technology at Centennial College.</p><br>"

            + "<h4>Technical & IT Support Experience</h4>"
            + "<ul>"
            + "<li><strong>System Support Officer Co-op (Tribunals Ontario, Aug. 2022 - Dec. 2022)</strong><br>"
            + "• Provided technical support for in-court technologies, including digital recording devices and video conferencing systems.<br>"
            + "• Assisted users in troubleshooting technical issues, improving system efficiency.<br>"
            + "• Gained hands-on experience in IT infrastructure and system reliability.</li><br>"

            + "<li><strong>IT Support Intern (SickKids Hospital, Feb. 2022 - Aug. 2022)</strong><br>"
            + "• Managed an inventory of over 5,000 IT devices, ensuring data accuracy.<br>"
            + "• Assisted in database management and asset tracking.<br>"
            + "• Provided technical support and system maintenance.</li><br>"
            + "</ul><br>"

            + "<h4>Market Research & Analytical Skills</h4>"
            + "<ul>"
            + "<li><strong>Assistant Manager (Consumer Research Latin America, May. 2009 - Aug. 2012)</strong><br>"
            + "• Designed brochures and templates for surveys and marketing purposes.<br>"
            + "• Maintained and updated project management tools for real-time tracking.<br>"
            + "• Developed data-driven presentations to share market research insights.<br>"
            + "• Conducted accurate data entry, handling an average of 2,000 records per month.</li><br>"
            + "</ul><br>"

            + "<h4>Transitioning into Development & Testing</h4>"
            + "<p>My background in web development and IT support naturally led me to explore software quality assurance and frontend development. At college, I deepened my knowledge of JavaScript, React, and testing methodologies.</p><br>"

            + "<p>Through my studies and independent projects, I have developed and released several personal projects, You can find more details in the Projects section.</p><br>"

            + "<h4>Looking Ahead</h4>"
            + "<p>I am excited to apply my skills in software testing and frontend development, collaborating on projects that focus on usability, performance, and innovation.</p>",
        
       
        "projects-title": "Projects",
        
        "project1-title":"Navi Grade",
        "project1-list1": "A web application that allows students to manage assignments, deadlines, and course information in one place. "
        + "To boost student motivation, the app includes a badge system for completed tasks and AI-driven final grade prediction.",
        "project1-list2":  "<strong>Main Features:</strong>"
        + "<ul>"
        + "<li>User authentication</li>"
        + "<li>Data storage and management</li>"
        + "<li>AI-powered grade prediction</li>"
        + "</ul>",
        "project1-list3": "<strong>Technology Stack:</strong> MERN Stack (MongoDB, Express.js, React, Node.js)",

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
        "modal-purpose":"Purpose",
        "modal-role":"Role",
        "modal-challenges":"Challenges",
        "modal-link":"Detail",
         
        "skills-title": "Skills",

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
        "hero-subtitle": "ディベロッパー | ソフトウェアテスター",
        "view-work": "作品を見る",

        "contact":"お問い合わせ",
        "about-title": "自己紹介",
        "about-1-tab": "開発へのアプローチ",
        "about-2-tab": "学びと資格",
        "about-3-tab": "これまでの歩み",

        "about-1-content": "開発において最も重視しているのは、ユーザーの使いやすさ、コードの読みやすさ、そしてコードの再利用のしやすさです。<br>そのために、時間をかけて設計を行い、個人開発でもグループ開発でも計画的に進めることを心がけています。<br><br>もちろん、プロジェクトには時間的な制約があり、必ずしもドキュメントに十分な時間を割けるわけではありません。<br>そうした中では、テストの知識を活かし、テスト駆動開発（TDD）を取り入れながら、開発の効率化と品質向上に努めています。<br>前職のマーケティングリサーチ会社での経験から、人々の行動や考えを分析し、データを活用して意思決定を行う重要性を学びました。<br>この経験を活かし、データを基にしたソフトウェアの品質向上、人々の行動やニーズに基づいた開発を心がけています。<br><br>多くの人が抱える課題に常にアンテナを張り、ソフトウェア開発を通じて解決策を提供することを目指しています。",

        "about-2-content": "<ul>"
            + "<li><strong>ソフトウェア工学技術 (ゲームプログラミング) 上級ディプロマ</strong><br>"
            + "Centennial College, Toronto, ON (2021年1月 - 2024年4月)<br>"
            + "GPA: 4.3/4.5<br><br>"
            + "<strong>主な履修科目:</strong><br>"
            + "<ul>"
            + "<li>プログラミング I・II</li>"
            + "<li>Web インターフェースデザイン</li>"
            + "<li>Java プログラミング</li>"
            + "<li>Web アプリケーション開発</li>"
            + "<li>Unix/Linux オペレーションシステム</li>"
            + "<li>ソフトウェアエンジニアリングメソドロジー I & II</li>"
            + "</ul><br>"
            + "フロントエンド開発、ゲームプログラミング、ソフトウェアテストの実践経験を積み、Webおよびアプリ開発の知識を広げた。<br><br>"

            + "<li><strong>ソフトウェアテスト・ブートキャンプ</strong><br>"
            + "Nezam Academy via Udemy (2024年5月 - 2024年7月)<br>"
            + "• ソフトウェア品質向上のためのテスト手法を学習。実践的なテストケース作成や自動化に取り組む。<br>"
            + "</li><br>"

            + "<li><strong>ゲームデザイン & 開発コース (オンライン)</strong><br>"
            + "Michigan State University via Coursera (2020年5月 - 2020年9月)<br>"
            + "• ゲームの設計・開発の基礎を学ぶ。<br>"
            + "</li><br>"

            + "<li><strong>国際コミュニケーション準学士号</strong><br>"
            + "愛知産業大学短期大学, 愛知, 日本 (2003年4月 - 2005年3月)<br>"
            + "</li>"
            + "</ul><br>"

            + "<h4>資格</h4>"
            + "<ul>"
            + "<li><strong>ISTQB Certified Tester Foundation Level (ISTQB CTFL)</strong><br>"
            + "取得年月: 2024年6月 (Brightest)</li>"
            + "</ul>",

        "about-3-content":  "<p>私のソフトウェア開発への道は、Web開発とコンテンツ制作から始まりました。フリーランスのWeb開発者として、複数のクライアントのWebサイトを制作・運用する機会をいただきました。</p><br>"

        + "<h4>Web開発 & コンテンツ制作</h4>"
        + "<ul>"
        + "<li><strong>Web Developer & Content Creator (2015年11月 - 2020年12月)</strong><br>"
        + "• HTML/CSSおよびWordPressを使用したWebサイトの開発・運営。<br>"
        + "• 5つのクライアント向けにWebコンテンツを作成し、8つのWebサイト開発に携わる。<br>"
        + "• 既存のコンテンツを編集し、ユーザーにとって魅力的なサイトを提供。</li><br>"
        + "</ul>"

        + "<p>この経験を通じてWeb技術に強い関心を持ち、より深く学ぶためにCentennial Collegeでソフトウェア工学技術を専攻しました。</p><br>"

        + "<h4>技術 & ITサポートの経験</h4>"
        + "<ul>"
        + "<li><strong>システムサポートオフィサー Co-op (Tribunals Ontario, 2022年8月 - 2022年12月)</strong><br>"
        + "• 法廷で使用されるデジタル録音デバイスやビデオ会議システムの技術サポート。<br>"
        + "• ユーザーの技術的な問題を解決し、システムの安定性向上に貢献。<br>"
        + "• ITインフラやシステムの信頼性向上に関する実践的な経験を積む。</li><br>"

        + "<li><strong>ITサポートインターン (SickKids病院, 2022年2月 - 2022年8月)</strong><br>"
        + "• 5,000台以上のIT機器を管理し、正確なデータベースを維持。<br>"
        + "• データベース管理や資産追跡をサポート。<br>"
        + "• 技術サポートやシステムメンテナンスに携わる。</li><br>"
        + "</ul><br>"

        + "<h4>マーケットリサーチ & 分析スキル</h4>"
        + "<ul>"
        + "<li><strong>アシスタントマネージャー (Consumer Research Latin America, 2009年5月 - 2012年8月)</strong><br>"
        + "• 調査やマーケティング用のパンフレット・テンプレートを作成。<br>"
        + "• プロジェクト管理ツールの更新・保守を担当。<br>"
        + "• 市場調査の分析データを用いたプレゼンテーションを作成。<br>"
        + "• 月平均2,000件の正確なデータ入力を実施。</li><br>"
        + "</ul><br>"

        + "<h4>開発 & ソフトウェアテストへの転向</h4>"
        + "<p>Web開発とITサポートの経験を活かし、ソフトウェア品質保証やフロントエンド開発の分野に興味を持ちました。カレッジでは、JavaScript・React・ソフトウェアテストの手法を本格的に学びました。</p><br>"

        + "<h4>今後の目標</h4>"
        + "<p>現在、ソフトウェアテストとフロントエンド開発のスキルを活かし、ユーザーの使いやすさやパフォーマンスに焦点を当てたプロジェクトに携わることを目指しています。</p>"
,
       
        "projects-title": "プロジェクト",
       
        "project1-title":"Navi Grade",
        "project1-list1": "学生が課題、締切、コースの情報を一元管理できるWebアプリ。"
                             + "課題を達成するたびにバッジシステムでモチベーションを向上させ、AIが最終成績を予測する機能を搭載。",
        "project1-list2":  "<strong>主要機能:</strong>"
                            + "<ul>"
                            + "<li>ユーザー認証</li>"
                            + "<li>データ保存・管理</li>"
                            + "<li>AIを活用した成績予測</li>"
                            + "</ul>",
        "project1-list3":" <strong>使用技術:</strong> MERNスタック (MongoDB, Express.js, React, Node.js)",

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
        "modal-purpose":"目的",
        "modal-role":"担当箇所",
        "modal-challenges":"課題と乗り越えたこと",
        "modal-link":"詳細ページへ",

        "skills-title": "スキル",

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



// Updated translations for About Me section
translations.en["hero-backgroundStory-title"] = "My Story";
translations.jp["hero-backgroundStory-title"] = "私のストーリー";

translations.en["hero-backgroundStory-contents"] = `
    <p><strong>"If you had $10,000, what would you do?"</strong></p>
    <p>One day, I came across this question on social media.</p>
    <p>A trip? A new gadget? No—what is it that I truly want to do?</p>
    <p>After thinking long and hard, I realized there was a dream I had buried deep inside.</p>
    <p>"I want to study software development."</p>
    <p>Going to college had been a lifelong dream of mine. As a mother of two, it might have seemed too big of a goal to pursue. But now that my children were older, maybe—just maybe—it was finally possible.</p>
    <p>With that thought in mind, I took the leap and enrolled in college to study game development.</p>
    <p>I started with the fundamentals of programming, and as I delved into game development, my passion expanded to application development and frontend development.</p>
    <p>I fell in love with coding and the thrill of bringing ideas to life. Before I knew it, after graduating from college, I had already released three games and one app.</p>
    <p>What if I had received that $10,000 back then?</p>
    <p>Sure, it might have covered part of my tuition.</p>
    <p>But in the end, it wasn’t about the money—it was about making the decision and taking action.</p>
    <p>That decision changed my life.</p>
    <p>And so, I continue to create.</p>
    <p>Games, apps, frontend development—if you have something you want to build, let’s talk.</p>
    <p><strong>I’d love to help turn your ideas into reality.</strong></p>
`;

translations.jp["hero-backgroundStory-contents"] = `
    <p><strong>「もし100万円あったら、何をしたい?」</strong></p>
    <p>ある日、SNSでこの問いを見かけました。</p>
    <p>旅行？新しい製品？いや、本当にやりたいことは何だろう？</p>
    <p>考え抜いた末に出た答えは、ずっと心の奥にしまっていた夢でした。</p>
    <p>「カナダでソフトウェア開発を学びたい。」</p>
    <p>若い頃から憧れていた留学。二人の子供を抱える主婦の夢としては大きすぎるかもしれない。だけど、子供が大きくなった今なら、実現できるかもしれない。</p>
    <p>そう思い立ち、カナダのカレッジに入学しました。</p>
    <p>プログラミングの基礎から学び、ゲーム開発を皮切りに、アプリ開発、フロントエンド開発へと興味の幅が広がっていきました。</p>
    <p>コードを書いてアイデアを形にする楽しさにハマり、気がつけばカレッジを卒業してから3つのゲームと1つのアプリをリリース。</p>
    <p>もし、あのとき100万円がもらえていたら?</p>
    <p>たしかに、それで学費の一部を賄えたかもしれない。</p>
    <p>でも結局、大事だったのはお金ではなく、「やる」と決めて行動したこと。</p>
    <p>その決断が、私の人生を変えました。</p>
    <p>だから、今も私は「作りたい」と思ったものを形にし続けています。</p>
    <p>ゲーム、アプリ、フロントエンド開発——もしあなたが「こんなものを作りたい」と思ったら、お気軽にご相談ください。</p>
    <p><strong>あなたのアイデアを形にするお手伝いをさせてください。</strong></p>
`;

// Function to update the About Me section when language is switched
function updateAboutMeSection(lang) {
    document.querySelector(".backGroundStory-section-title").innerHTML = translations[lang]["hero-backgroundStory-title"];
    document.querySelector(".backGroundStory-section-contents").innerHTML = translations[lang]["hero-backgroundStory-contents"];
}

// Ensure the language switch updates the section dynamically
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
    updateAboutMeSection(lang); // Update About Me section dynamically
    localStorage.setItem('site-language', lang);
}

// Initialize language on page load
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
const modalPurpose = document.getElementById('modal-purpose').querySelector('span');
const modalRole = document.getElementById('modal-role').querySelector('span');
const modalChallenge = document.getElementById('modal-challenges').querySelector('span');
const modalDetailLink = document.getElementById('modal-detail-link');
const closeBtn = document.querySelector('.close-btn');

// プロジェクトデータ
const projectDetails = {
    "project1": {
        en: {
            title: "Navi Grade",
            duration: "3 months",
            purpose: "Requirement → Design → Development → Testing",
            role: "Requirement → Design → Development → Testing",
            challenge: "Requirement → Design → Development → Testing",
            link: "https://github.com/Avril-TFS/COMP313-002",
            image: "img/NaviGradeScr.png"
        },
        jp: {
            title: "ナビグレード",
            duration: "3ヶ月",
            purpose: "Requirement → Design → Development → Testing",
            role: "Requirement → Design → Development → Testing",
            challenge: "Requirement → Design → Development → Testing",
            link: "https://github.com/Avril-TFS/COMP313-002",
            image: "img/NaviGradeScr.png"
        }
    },
    "project2": {
        en: {
            title: "Navi Grade",
            duration: "3 months",
            purpose: "Requirement → Design → Development → Testing",
            role: "Requirement → Design → Development → Testing",
            challenge: "Requirement → Design → Development → Testing",
            link: "https://github.com/Avril-TFS/COMP313-002",
            image: "img/NaviGradeScr.png"
        },
        jp: {
            title: "ナビグレード",
            duration: "3ヶ月",
            purpose: "Requirement → Design → Development → Testing",
            role: "Requirement → Design → Development → Testing",
            challenge: "Requirement → Design → Development → Testing",
            link: "https://github.com/Avril-TFS/COMP313-002",
            image: "img/NaviGradeScr.png"
        }
    },
    "project3": {
        en: {
            title: "Navi Grade",
            duration: "3 months",
            purpose: "Requirement → Design → Development → Testing",
            role: "Requirement → Design → Development → Testing",
            challenge: "Requirement → Design → Development → Testing",
            link: "https://github.com/Avril-TFS/COMP313-002",
            image: "img/NaviGradeScr.png"
        },
        jp: {
            title: "ナビグレード",
            duration: "3ヶ月",
            purpose: "Requirement → Design → Development → Testing",
            role: "Requirement → Design → Development → Testing",
            challenge: "Requirement → Design → Development → Testing",
            link: "https://github.com/Avril-TFS/COMP313-002",
            image: "img/NaviGradeScr.png"
        }
    },
    "project4": {
        en: {
            title: "Navi Grade",
            duration: "3 months",
            purpose: "Requirement → Design → Development → Testing",
            role: "Requirement → Design → Development → Testing",
            challenge: "Requirement → Design → Development → Testing",
            link: "https://github.com/Avril-TFS/COMP313-002",
            image: "img/NaviGradeScr.png"
        },
        jp: {
            title: "ナビグレード",
            duration: "3ヶ月",
            purpose: "Requirement → Design → Development → Testing",
            role: "Requirement → Design → Development → Testing",
            challenge: "Requirement → Design → Development → Testing",
            link: "https://github.com/Avril-TFS/COMP313-002",
            image: "img/NaviGradeScr.png"
        }
    },
    "project5": {
        en: {
            title: "Navi Grade",
            duration: "3 months",
            purpose: "Requirement → Design → Development → Testing",
            role: "Requirement → Design → Development → Testing",
            challenge: "Requirement → Design → Development → Testing",
            link: "https://github.com/Avril-TFS/COMP313-002",
            image: "img/NaviGradeScr.png"
        },
        jp: {
            title: "ナビグレード",
            duration: "3ヶ月",
            purpose: "Requirement → Design → Development → Testing",
            role: "Requirement → Design → Development → Testing",
            challenge: "Requirement → Design → Development → Testing",
            link: "https://github.com/Avril-TFS/COMP313-002",
            image: "img/NaviGradeScr.png"
        }
    },
    "project6": {
        en: {
            title: "Navi Grade",
            duration: "3 months",
            purpose: "Requirement → Design → Development → Testing",
            role: "Requirement → Design → Development → Testing",
            challenge: "Requirement → Design → Development → Testing",
            link: "https://github.com/Avril-TFS/COMP313-002",
            image: "img/NaviGradeScr.png"
        },
        jp: {
            title: "ナビグレード",
            duration: "3ヶ月",
            purpose: "Requirement → Design → Development → Testing",
            role: "Requirement → Design → Development → Testing",
            challenge: "Requirement → Design → Development → Testing",
            link: "https://github.com/Avril-TFS/COMP313-002",
            image: "img/NaviGradeScr.png"
        }
    },
    "project7": {
        en: {
            title: "Navi Grade",
            duration: "3 months",
            purpose: "Requirement → Design → Development → Testing",
            role: "Requirement → Design → Development → Testing",
            challenge: "Requirement → Design → Development → Testing",
            link: "https://github.com/Avril-TFS/COMP313-002",
            image: "img/NaviGradeScr.png"
        },
        jp: {
            title: "ナビグレード",
            duration: "3ヶ月",
            purpose: "Requirement → Design → Development → Testing",
            role: "Requirement → Design → Development → Testing",
            challenge: "Requirement → Design → Development → Testing",
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
    modalPurpose.textContent = project.purpose;
    modalRole.textContent = project.role;
    modalChallenge.textContent = project.challenge;
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

//Contact form
document.addEventListener('DOMContentLoaded', function () {
    const steps = document.querySelectorAll('.step');
    const stepBtns = document.querySelectorAll('.step-btn');
    const nextBtns = document.querySelectorAll('.next-btn');
    const errorMessageDiv = document.querySelector('.error-message-contact');
    const contactForm = document.getElementById('contact-form');
    const userInfoField = document.getElementById('contact-user-info');

    let currentStep = 0;
    let currentLang = localStorage.getItem('site-language') || 'en';

    // エラーメッセージを最初は非表示にする
    errorMessageDiv.style.display = "none";

    // 言語ごとのエラーメッセージ
    const errorMessages = {
        en: "Please select an option.",
        jp: "いずれかを選択してください。"
    };

        // **日本語→英語の変換マッピング**
        const translations = {
            "個人": { en: "Individual", jp: "個人" },
            "法人": { en: "Business", jp: "法人" },
            "Web開発": { en: "Web Development", jp: "Web開発" },
            "ソフトウェアテスト": { en: "Software Testing", jp: "ソフトウェアテスト" },
            "その他": { en: "Other", jp: "その他" }
        };
    
        function translateText(text) {
            return translations[text] ? translations[text][currentLang] : text;
        }

        

      // 初期状態で Step2 と Step3 のボタンを無効化
      stepBtns[1].disabled = true;
      stepBtns[2].disabled = true;
      stepBtns[1].classList.add("disabled");
      stepBtns[2].classList.add("disabled");


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

                if (currentStep === 2) { // Step 3 に到達したらデータを入力
                    stepBtns[1].disabled = false;
                    stepBtns[1].classList.remove("disabled");
                    const userType = document.querySelector('input[name="user-type"]:checked').value;
                    const consultation = document.querySelector('input[name="consultation"]:checked').value;
                   
                    // **翻訳を適用**
                    const translatedUserType = translateText(userType);
                    const translatedConsultation = translateText(consultation);
                    
                    userInfoField.value = `【${translatedUserType}】 ${translatedConsultation}`;
                }

            }
        });
    });

    // **ステップボタンのクリックを制御**
    stepBtns.forEach((btn, index) => {
        btn.addEventListener('click', function () {
            if (index === 1 && currentStep === 0) {
               // Step1 の選択チェック 初期状態
                const selected = document.querySelector('input[name="user-type"]:checked');


                if (!selected) {
                    updateErrorMessage();
                    errorMessageDiv.textContent = errorMessages[currentLang];
                    errorMessageDiv.style.color = "red";
                    errorMessageDiv.style.display = "block"; // エラーメッセージを表示
                    return;
                }
            }
            if (index === 2) {
                // Step1とStep2が完了していない場合、Step3に進めない
                const userTypeSelected = document.querySelector('input[name="user-type"]:checked');
                const consultationSelected = document.querySelector('input[name="consultation"]:checked');

                if (!userTypeSelected || !consultationSelected) {
                    updateErrorMessage();
                    errorMessageDiv.textContent = errorMessages[currentLang];
                    errorMessageDiv.style.color = "red";
                    errorMessageDiv.style.display = "block";
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

    document.querySelectorAll('input[name="consultation"]').forEach(radio => {
        radio.addEventListener('change', function () {
            errorMessageDiv.textContent = "";
            errorMessageDiv.style.display = "none";
        });
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


    // 言語ごとのsubmitメッセージ
    const submitMessage = {
        en: "Message sent!",
        jp: "お問い合わせが送信されました！"
    };


    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert(submitMessage[currentLang]);
        contactForm.reset();
        currentStep = 0;
        showStep(currentStep);
    });

