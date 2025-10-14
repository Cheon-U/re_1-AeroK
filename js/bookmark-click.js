let star = document.querySelectorAll(".bookmark");

star.addEventListener("click", (e) => {
        //e.currentTarget : 이벤트를 현재 누구한테 줬는지
        console.log("클릭한별:", e.currentTarget, index);
        // 내가 선택한 별의 순서가 별순서보다 작은것들은 active을 다 추가하고
        // 아니면 active를 다 지우기
        star.forEach((s, i) => {
            if (i <= index) {
                s.classList.add("active")
            }
            else {
                s.classList.remove("active");
            }
        })

        // 개수를 체크할 함수
    })