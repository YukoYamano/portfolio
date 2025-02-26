document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const userType = urlParams.get("userType") || "";
    const consultation = urlParams.get("consultation") || "";

    // 事前入力する
    document.getElementById("userType").value = userType;
    document.getElementById("consultation").value = consultation;

    // フォーム送信処理
    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault();

        // バリデーション（全ての必須項目が入力されているか確認）
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const errorMessage = document.querySelector(".error-message");
        const successMessage = document.querySelector(".success-message");

        errorMessage.textContent = "";
        successMessage.style.display = "none";

        if (!name || !email || !message) {
            errorMessage.textContent = localStorage.getItem("site-language") === "jp" ? 
                "すべての項目を入力してください。" : "Please fill in all fields.";
            return;
        }

        // 送信完了メッセージの表示
        successMessage.textContent = localStorage.getItem("site-language") === "jp" ? 
            "お問い合わせが送信されました。" : "Your message has been sent!";
        successMessage.style.display = "block";

        // フォームをリセット
        this.reset();
    });

    // 言語切り替え
    document.getElementById("lang-jp")?.addEventListener("click", () => {
        localStorage.setItem("site-language", "jp");
    });

    document.getElementById("lang-en")?.addEventListener("click", () => {
        localStorage.setItem("site-language", "en");
    });
});
