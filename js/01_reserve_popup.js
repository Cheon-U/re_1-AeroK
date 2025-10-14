// 팝업-출발지
document.getElementById('popup-search-start').addEventListener('click', function () {
  window.open(
    'popup-search-start.html',           // 팝업 파일 경로
    'LocationPopupStart',       // 팝업 이름 (중복 방지용)
    'width=800,height=640'  // 팝업 크기
  );
});


// 팝업-출발지
document.getElementById('popup-search-arrived').addEventListener('click', function () {
  window.open(
    'popup-search-arrived.html',           // 팝업 파일 경로
    'LocationPopupArrived',       // 팝업 이름 (중복 방지용)
    'width=800,height=640'  // 팝업 크기
  );
});


// 팝업-출발날짜
document.getElementById('popup-calendar-start').addEventListener('click', function () {
  window.open(
    'popup-calender-start.html',           // 팝업 파일 경로
    'calendarPopupStart',       // 팝업 이름 (중복 방지용)
    'width=760,height=460'  // 팝업 크기
  );
});

// 팝업-도착 날짜
document.getElementById('popup-calendar-end').addEventListener('click', function () {
  window.open(
    'popup-calender-end.html',           // 팝업 파일 경로
    'calendarPopupEnd',       // 팝업 이름 (중복 방지용)
    'width=760,height=460'  // 팝업 크기
  );
});

// 팝업-탑승객
document.getElementById('popup-passenger').addEventListener('click', function () {
  window.open(
    'popup-passenger.html',           // 팝업 파일 경로
    'passengerPopup',       // 팝업 이름 (중복 방지용)
    'width=600,height=780'  // 팝업 크기
  );
});


// 팝업-좌석선택
document.getElementById('popup-select-seat').addEventListener('click', function () {
  window.open(
    'popup-select-seat.html',           // 팝업 파일 경로
    'seatoPopup',       // 팝업 이름 (중복 방지용)
    'width=1000,height=240'  // 팝업 크기
  );
});