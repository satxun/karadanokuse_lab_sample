const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

// ハンバーガー開閉
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
});

// メニュー内のページ内リンクを押したら閉じる
const links = menu.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        menu.classList.remove("active");
    });
});

const items = document.querySelectorAll(".faq-item");

items.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        // 他を閉じる
        items.forEach(other => {

            if(other !== item){

                other.classList.remove("active");

                other.querySelector(".faq-answer").style.maxHeight = null;

            }

        });

        item.classList.toggle("active");

        const answer = item.querySelector(".faq-answer");

        if(item.classList.contains("active")){

            answer.style.maxHeight = answer.scrollHeight + "px";

        }else{

            answer.style.maxHeight = null;

        }

    });

});