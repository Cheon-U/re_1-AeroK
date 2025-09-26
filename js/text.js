//main-slider

const swiper = new Swiper(".main-slider-wrap", {
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    on: {
        slideChange: function () {
            const activeSlide = this.slides[this.activeIndex];
            const video = activeSlide.querySelector('video');

            if (video) {
                // autoplay 타이머 중단 (3000ms 카운트 막음)
                this.autoplay.stop();

                // loop 제거해야 onended 이벤트가 실행됨
                video.removeAttribute('loop');

                // 영상 재생 (항상 처음부터)
                video.currentTime = 0;
                video.play();

                // 끝나면 다음 슬라이드로 + autoplay 재시작
                video.onended = () => {
                    this.slideNext();
                    this.autoplay.start();
                };
            }
            else {
                // 이미지 슬라이드일 때는 autoplay 그대로
                this.autoplay.start();
            }
        }
    },
})



//main-slider_ticket

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


//section4 _ faqTap

let tabTitles2 = document.querySelectorAll(".faq-tab>li");
let faqList = document.querySelectorAll(".faq-list");


tabTitles2.forEach((tab, id) => {
    console.log(tabTitles);
    tab.addEventListener("click", () => {
        tabTitles2.forEach((t, i) => {
            t.classList.remove("active");
            faqList[i].classList.remove("active");
        })
        tab.classList.add("active");
        faqList[id].classList.add("active");
        //추가: 선택된 faqList[id]로 스크롤 이동

    })
})

