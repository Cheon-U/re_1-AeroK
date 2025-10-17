// 달력
let showDate = document.querySelector(".showDate");
flatpickr(".startDate", {

    minDate: "today",
    maxDate: "2025-12-31",
    showMonths: 2,
    inline: true,
    locale: "ko", // 한국어 적용
    onChange: function (selectedDates, dateStr, instance) {
        // 날짜가 2개 선택된 상태에서 다시 같은 날짜를 클릭한 경우 → 초기화
        if (
            selectedDates.length === 2 &&
            previousDates.length === 2 &&
            selectedDates[0].getTime() === previousDates[0].getTime() &&
            selectedDates[1].getTime() === previousDates[1].getTime()
        ) {
            instance.clear();
            showDate.innerHTML = "선택된 날짜 없음";
            previousDates = [];
            return;
        }

        // 날짜 출력
        if (selectedDates.length === 1) {
            const started = instance.formatDate(selectedDates[0], "Y-m-d");
            showDate.innerHTML = `출발일: ${started}`;

            // 부모창에 날짜 표시
            if (window.opener && !window.opener.closed) {
                const display = window.opener.document.querySelector('.popup-cal-started-display');
                if (display) {
                    // 날짜 표현 바꾸기
                    const date = selectedDates[0];
                    const year = String(date.getFullYear()); // '2025'
                    const month = String(date.getMonth() + 1).padStart(2, '0'); // '10'
                    const day = String(date.getDate()).padStart(2, '0'); // '17'
                    const startedDate = `${year} / ${month} / ${day}`;

                    display.textContent = startedDate;
                }
            }
        } else {
            showDate.innerHTML = "선택된 날짜 없음";
        }

        // 현재 선택 상태 저장
        previousDates = [...selectedDates];

    },

    onDayCreate: function (dObj, dStr, fp, dayElem) {
        // 일(dayElem.dateObj)의 요일 확인 (0: 일요일, 6: 토요일)
        const date = dayElem.dateObj;
        if (date.getDay() === 0) { // 일요일
            dayElem.classList.add("sunday");
        }
    }
});

// 팝업연결체크용
console.log("opener:", window.opener);
console.log("display:", window.opener?.document.querySelector('.popup-cal-started-display'));



// 팝업창 닫기
const closeBtn = document.querySelector(".btn-close img");
closeBtn.addEventListener("click", () => {
    window.close();
});
