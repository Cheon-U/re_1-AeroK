
let tabTitles = document.querySelectorAll(".tab-menu-list>li");
let wrapList = document.querySelectorAll(".ticket-content-wrap");


tabTitles.forEach((tab, id) => {
    console.log(tabTitles);
    tab.addEventListener("click", () => {
        tabTitles.forEach((t, i) => {
            t.classList.remove("active");
            wrapList[i].classList.remove("active");
        })
        tab.classList.add("active");
        wrapList[id].classList.add("active");
    })
})