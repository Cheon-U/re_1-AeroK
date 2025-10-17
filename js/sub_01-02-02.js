// 운항노선 및 스케줄안내 tab button
let tabTitles = document.querySelectorAll(".tab-menu-list>li");
let tabContents = document.querySelectorAll(".ticket-content-wrap>ticket1>div");

tabTitles.forEach((tab,id)=>{
  console.log(tabTitles);
  tab.addEventListener("click",()=>{

    tabTitles.forEach((t,i)=>{
      t.classList.remove("active");
      // tabContents[i].classList.remove("active");
    })

    tab.classList.add("active");
    // tabContents[id].classList.add("active");
  })
})
