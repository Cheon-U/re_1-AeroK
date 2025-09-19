
let tabTitles = document.querySelectorAll(".faq-tab>li");
let faqList = document.querySelectorAll(".faq-list");


tabTitles.forEach((tab, id) => {
    console.log(tabTitles);
    tab.addEventListener("click", () => {
        tabTitles.forEach((t, i) => {
            t.classList.remove("active");
            faqList[i].classList.remove("active");
        })
        tab.classList.add("active");
        faqList[id].classList.add("active");
        //추가: 선택된 faqList[id]로 스크롤 이동
        faqList[id].scrollIntoView({
            behavior: "smooth", // 부드럽게 스크롤
            block: "start"      // 시작 위치로 맞춤
        });
    })
})