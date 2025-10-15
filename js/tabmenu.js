
let tabMenus = document.querySelectorAll(".tab-menu-list>li");
let tabList = document.querySelectorAll(".ticket-menu-wrap>div");


tabMenus.forEach((tab, id) => {
    console.log(tabMenus);
    tab.addEventListener("click", () => {
        tabMenus.forEach((t, i) => {
            t.classList.remove("active");
            tabList[i].classList.remove("active");
        })
        tab.classList.add("active");
        tabList[id].classList.add("active");
        //추가: 선택된 tabList[id]로 스크롤 이동
        tabList[id].scrollIntoView({
            behavior: "smooth", // 부드럽게 스크롤
            block: "start"      // 시작 위치로 맞춤
        });
    })
})