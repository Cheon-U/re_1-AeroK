// .depth1
let submenu = document.querySelectorAll(".depth1");
// .main-menu
let mainMenu = document.querySelector(".main-menu");

// .main-menu>li>a
let mainLinks = document.querySelectorAll(".main-menu>li>a");
// ham-btn
let hamBtn = document.querySelector(".ham-btn>a");
// close-btn
let closeBtn = document.querySelector(".close-btn>a");

// 윈도우의 사용가능 너비 저장
let wWidth = window.innerWidth;

// 윈도우의 사이즈 체크 함수
function siteInit() {
  wWidth = window.innerWidth;
  console.log(wWidth);
}
siteInit();

// 윈도우의 너비가 변경되면 윈도우의 너비값 받아오기
window.addEventListener("resize", () => {
  siteInit();

  submenu.forEach(sub=>{
    sub.style.height="";
    sub.classList.remove("active");
  })
})

// mainMenu에 마우스가 들어가면 submenu가 나오도록
mainMenu.addEventListener("mouseenter", () => {

  // 메뉴 마우스 오버시 서브메뉴 펼쳐지는것 768px이상에서만 가능하도록
  if (wWidth > 768) {
    submenu.forEach(sub => {
      // sub.style.display = "block";
      sub.classList.add("active");
    })
  }
})


// 마우스가 떠나면 서브메뉴 닫히기
mainMenu.addEventListener("mouseleave", () => {
  if (wWidth > 768) {
    submenu.forEach(sub => {
      sub.classList.remove("active");
    })
  }
})

// 숨겨놓은 메뉴 전체
let navWrap = document.querySelector(".nav-wrap");

// hamBtn을 클릭하여 메뉴가 나오도록
hamBtn.addEventListener("click", (e) => {
  e.preventDefault();
  navWrap.style.left = 0;
  navWrap.style.transition = "0.3s";
})

// 모바일에서 closeBtn 클릭시 닫히도록
closeBtn.addEventListener("click", (e) => {
  // #(link) 링크가되면 새로고침되는걸 막아줌 =>  e.preventDefault();
  e.preventDefault();
  navWrap.style.left = "-120%";
})

// 모바일에서 메인메뉴를 클릭하면 각각의 서브메뉴가 나오도록
// 첫번쨰 메뉴
mainLinks[0].addEventListener("click", (e) => {
  let next = mainLinks[0].nextElementSibling;
  console.log(next);
})
// 두번쨰 메뉴
mainLinks[1].addEventListener("click", (e) => {
  let next = mainLinks[1].nextElementSibling;
  console.log(next);
})
// 세번쨰 메뉴
mainLinks[2].addEventListener("click", (e) => {
  let next = mainLinks[2].nextElementSibling;
  console.log(next);
})

mainLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    if (wWidth < 768) {
      e.preventDefault();
      let next = link.nextElementSibling;
      console.log(next);
      console.log(next.style.height);
      // 서브가 열린상태인지를 체크하기 + 서브 펼쳤다 닫히게
      let isOpen = next.style.height && next.style.height !== "0px";
      if (isOpen) {
        next.style.height = 0;
      }
      else {
        // 실제 서브 높이를 구하기 위해서
        // next.style.height = "auto";
        // 실제 서브메뉴의 높이값 구하기, 숨겨진 높이도 구할수 있다
        let subHeight = next.scrollHeight;
        console.log(subHeight);
        next.style.height = subHeight + "px";
      }
    }
  })
})