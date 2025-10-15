const tabs = document.querySelectorAll('.tab-menu li a');
const sub1 = document.querySelector('.sub1');
const sub2 = document.querySelector('.sub2');
const desc = document.querySelector('.title .desc');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', e => {
        e.preventDefault();

        // 탭 active 변경
        tabs.forEach(t => t.parentElement.classList.remove('active'));
        tab.parentElement.classList.add('active');

        // 컨텐츠 show/hide
        if (index === 0) {
            sub1.style.display = 'block';
            sub2.style.display = 'none';
            desc.textContent = '기내휴대수화물은 승객이 직접 휴대하여 기내로 가져갈 수 있는 수하물입니다.';
        } else {
            sub1.style.display = 'none';
            sub2.style.display = 'block';
            desc.textContent = '위탁수화물은 승객이 항공사에 탁송을 의뢰하여 목적지 공항에서 수취하는 수하물입니다.';
        }
    })
});

// 🔹 페이지 로드 시 hash 체크 함수
function activateTabByHash() {
    if (window.location.hash === '#sub2') {
        sub1.style.display = 'none';
        sub2.style.display = 'block';
        desc.textContent = '위탁수화물은 승객이 항공사에 탁송을 의뢰하여 목적지 공항에서 수취하는 수하물입니다.';
        tabs.forEach(t => t.parentElement.classList.remove('active'));
        tabs[1].parentElement.classList.add('active');
    } else {
        sub1.style.display = 'block';
        sub2.style.display = 'none';
        desc.textContent = '기내휴대수화물은 승객이 직접 휴대하여 기내로 가져갈 수 있는 수하물입니다.';
        tabs.forEach(t => t.parentElement.classList.remove('active'));
        tabs[0].parentElement.classList.add('active');
    }
}

// 🔹 페이지 처음 로드될 때 실행
window.addEventListener('DOMContentLoaded', activateTabByHash);

// 🔹 hash 값이 바뀔 때도 실행 (헤더 메뉴 클릭 시 동작)
window.addEventListener('hashchange', activateTabByHash);
