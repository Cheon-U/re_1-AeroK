// 실제 팝업창 크기 알기
window.onload = function () {
    console.log('콘텐츠 영역 크기:', window.innerWidth + 'x' + window.innerHeight);
};

// 팝업 연결
document.querySelector('.btn-check a').addEventListener('click', function (e) {
    e.preventDefault();

    // 숫자 가져오기
    const adults = document.querySelectorAll('.age-box')[0].querySelector('span').textContent;
    const children = document.querySelectorAll('.age-box')[1].querySelector('span').textContent;
    const infants = document.querySelectorAll('.age-box')[2].querySelector('span').textContent;

    // 부모 창에 접근
    if (window.opener && !window.opener.closed) {
        const display = window.opener.document.querySelector('.passenger-display');
        if (display) {
            display.textContent = `성인 ${adults}, 소아 ${children}, 유아 ${infants}`;
        }
    }

    // 팝업 닫기
    window.close();
});



// 변수선언
let minusBtn = document.querySelectorAll(".age-box .minus");
let plusBtn = document.querySelectorAll(".age-box .plus");
// let total = document.querySelector(".total span");

// 합계를 구해줄 함수 만들기
function updateTotal() {
    //  합계를 구해줄 변수
    // let totalSum = 0;
    let items = document.querySelectorAll(".age-box>div");
    console.log(items);
    items.forEach(item => {
        // parseInt(문자) 괄호안의 문자를 숫자로 변형...
        let price = parseInt(item.querySelector(".items-name strong").innerText);
        console.log(price);
        let count = parseInt(item.querySelector(".button-wrap span").innerText);
        console.log(count);

        // totalSum += price * count;
        // console.log(totalSum);
    })
    // toLocaleString 천단위마다 숫자 찍기
    // total.innerHTML = totalSum.toLocaleString();
}

plusBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        // 선택한 버튼에 앞에오는 span을 선택하여
        let spanCount = btn.previousElementSibling;
        let count = parseInt(spanCount.innerHTML);
        // 숫자를 1씩 증가시켜서 내용으로 보여주기
        count++;
        spanCount.innerHTML = count;
        // 함수 호출
        // updateTotal();
    })
})

// minusBtn
minusBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        // 선택한 버튼에 다음에오는 span을 선택하여
        let spanCount = btn.nextElementSibling;
        let count = parseInt(spanCount.innerHTML);
        // 숫자를 1씩 감소시켜서 내용으로 보여주기
        // 조건 : 0 보다 클때 1씩 감소시켜서 보여주겟다
        if (count > 0) {
            count--;
            spanCount.innerHTML = count;
            // 함수 호출
            // updateTotal();
        }
    })
})


// 나이계산 토글
const ageSearch = document.querySelector(".age-search");
const ageSearchBox = document.querySelector(".age-search-box");
const toggleIcon = document.querySelector(".toggle-icon");
const popup = document.querySelector('.popup');

ageSearch.addEventListener("click", function (e) {
    e.preventDefault();

    ageSearchBox.classList.toggle("open");
    toggleIcon.classList.toggle("rotate");
    popup.classList.toggle('expanded');
});

// 팝업창 닫기
const closeBtn = document.querySelector(".btn-close img");
closeBtn.addEventListener("click", () => {
    window.close();
});
