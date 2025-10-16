//height
function setViewportHeight(){
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setViewportHeight();
window.addEventListener("resize", setViewportHeight);

//width
let wWidth;

function siteInit() {
    wWidth = window.innerWidth;
}

siteInit();
// header
let hamBtn = document.querySelector(".m-ham");
let closeBtn = document.querySelector(".m-close-btn");
let mNav = document.querySelector(".nav-m");

hamBtn.addEventListener("click", (e) => {
    e.preventDefault();
    mNav.style.transform = "translateX(0)";
})

closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    mNav.style.transform = "translateX(100%)";
})

//header - main-menu
let mMain = document.querySelectorAll(".m-main-menu li");
let mSub = document.querySelectorAll(".m-sub-menu div");

mMain.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();

        mMain.forEach(li => li.classList.remove("active"));
        mSub.forEach(div => div.classList.remove("active"));

        item.classList.add("active");
        mSub[index].classList.add("active");
    })
})

// m-gnb-panel
let mLang = document.querySelector(".m-lang");
let mSearch = document.querySelector(".m-search");
let mLogin = document.querySelector(".m-login");

let mLangP = document.querySelector(".m-lang-panel");
let mSearchP  = document.querySelector(".m-search-panel");
let mLoginP = document.querySelector(".m-login-panel");

let panels = [mLangP, mSearchP, mLoginP];

function closeAllPanels(){
    panels.forEach(panel => panel.classList.remove("active"));
}

function togglePanel(targetPanel){
    let isActive = targetPanel.classList.contains("active");
    closeAllPanels();
    if(!isActive) targetPanel.classList.add("active");
}

  mLang.addEventListener('click', (e) => {
    e.preventDefault();
    togglePanel(mLangP);
  });

  mSearch.addEventListener('click', (e) => {
    e.preventDefault();
    togglePanel(mSearchP);
  });

  mLogin.addEventListener('click', (e) => {
    e.preventDefault();
    togglePanel(mLoginP);
  });



// footer
let fMenu = document.querySelector(".footer-menu");
let fSubMenu = document.querySelectorAll(".sub-footer-menu");
let fMenuC = document.querySelectorAll(".footer-menu>li>a");

fMenuC.forEach(sub => {
    sub.addEventListener("click", (e) => {
        if (wWidth <= 1095) {
            e.preventDefault();
            let subMenu = sub.nextElementSibling;
            let isOpen = subMenu.style.height && subMenu.style.height !== "0px";

            sub.classList.toggle("active", !isOpen);

            if (isOpen) {
                subMenu.style.height = 0;
            }

            else {
                let subHeight = subMenu.scrollHeight;
                subMenu.style.height = subHeight + "px";
            }
        }
    })


})