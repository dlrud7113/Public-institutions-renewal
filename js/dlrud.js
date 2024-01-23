//main
//메인비주얼(경마사진)
 
var swiper = new Swiper(".mySwiper_main", {
   effect: "coverflow",
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: 1.3,
   coverflowEffect: {
     rotate: 50,
     stretch: 0,
     depth: 100,
     modifier: 2,
     slideShadows: true,
   },
   autoplay:{delay: 2200,},
   pagination: {
     el: ".swiper-pagination",
   },

 });


 var swiper = new Swiper(".mySwiper_main_icon", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView:3,
  breakpoints: {
    1024: {
      slidesPerView: 6,
    },
    768:{
      slidesPerView: 5,
    },
    568: {
      slidesPerView: 4,
    },

  }
  
});


var swiper = new Swiper(".mySwiper_alert", {
  spaceBetween: 15,
 autoplay: {delay: 3000,
 } 

})

// 테마파크 슬라이드
let accordionItems = document.querySelectorAll('.accordion-item');

for (let i = 0; i < accordionItems.length; i++) {
  accordionItems[i].addEventListener('click', function() {
    // 다른 아이템의 활성화 클래스와 content-text의 투명도 조절
    for (let j = 0; j < accordionItems.length; j++) {
      if (accordionItems[j] !== this) {
        accordionItems[j].classList.remove('active');
        let contentText = accordionItems[j].querySelector('.content-text');
        if (contentText) {
          contentText.style.opacity = '0';
        }
      }
    }
    // 현재 아이템에 활성화 클래스를 토글하고 content-text의 투명도 조절
    this.classList.toggle('active');
    let contentText = this.querySelector('.content-text');
    if (contentText) {
      // content-text의 투명도 값을 토글로 변경
      if (parseFloat(contentText.style.opacity) === 1) {
        contentText.style.opacity = '0';
      } else {
        contentText.style.opacity = '1';
      }
    }
  });
}

//아코디언
document.addEventListener('DOMContentLoaded', function() {
  "use strict";
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.content');

  tabs.forEach(function(tab, index) {
    tab.addEventListener('click', function() {
      // 현재 클릭된 탭에 .active 클래스 추가
      tabs.forEach(function(tab) {
        tab.classList.remove('active');
      });
      this.classList.add('active');

      // 클릭된 탭에 해당하는 content에 .active 클래스 추가
      contents.forEach(function(content) {
        content.classList.remove('active');
      });
      contents[index].classList.add('active');
    });
  });
});



/*
let $list = document.getElementById('gnb');
let listItems = $list.getElementsByTagName('li');
console.log($list, listItems);
*/

/*
//li 요소에 반복문을 사용해서 이벤트 추가하기
//li에 마우스 올렸을 때 (submeun 있으면 이벤트 작동)
for(let i =0; i < listItems.length; i++){
  listItems[i].addEventListener('mouseenter',function(){ //현재요소. submeun 가 있는지 찾기
    let subMenu  = this.querySelector('.sub_menu');
    //만약 서브메뉴가 있으면 스타일이 dispaly block;
  if(subMenu){subMenu.style.display='block';
}
  }) 
};

//마우스 떠날때 

for(let i =0; i < listItems.length; i++){
  listItems[i].addEventListener('mouseleave',function(){ //현재요소. submeun 가 있는지 찾기
    let subMenu  = this.querySelector('.sub_menu');
    //만약 서브메뉴가 있으면 디스플레이 스타일 논;
  if(subMenu){subMenu.style.display='none';
}
  }) 
};

*/

let nav =document.querySelector('.nav');
let $list = document.getElementById('gnb');

$list.addEventListener('mouseover',function(){
  nav.style.height="415px";
});

$list.addEventListener('mouseout',function(){
  nav.style.height="115px";
  
});




// 호버시 이미지 변경
let guidCon = document.querySelectorAll('.guid_icon');
let guidImg = document.querySelectorAll('.guid_icon img');

  for (let i = 0; i < guidCon.length; i++) {
    let newImg = guidImg[i].getAttribute('data-img');
    guidCon[i].addEventListener('mouseover', function (e) {
      guidImg[i].setAttribute('src', newImg);
    });
    guidCon[i].addEventListener('mouseout', function () {
      let beforeImg = guidImg[i].getAttribute('data-before');
      guidImg[i].setAttribute('src', beforeImg);
    });
  };

  
  //텝메뉴
  let tablink =document.querySelectorAll('.tab_nev a');
  let tabContent = document.querySelectorAll('.tab_con>div');

  //메뉴1 콘텐츠는 보이게
  document.getElementById('tab1').style.display='block';
  for(let i = 0;i < tablink.length; i++){
    tablink[i].addEventListener('click',function(e){
      e.preventDefault();
      //링크호버
      tablink[i].classList.remove('on');
      for(let j = 0; j < tablink.length ; j++){
        tablink[j].classList.remove('on');
      }
      e.target.classList.add('on');
  
      let orgTarget = e.target.getAttribute('href');
      let tabTarget = orgTarget.replace('#','');
      //모든 콘텐츠 숨기기
      for(let x=0; x < tabContent.length ; x++){
        tabContent[x].style.display='none';
      }
      document.getElementById(tabTarget).style.display='block';     
    })
  };

/* award 슬라이드 */
  var swiper = new Swiper(".mySwiper_award", {
    slidesPerView:5,
    spaceBetween:40,
    autoplay:true,
    delay:900,
    loop:true,
  });


let trigger=document.querySelector('.trigger'),
  sitemap=document.querySelector('#site_map');

  trigger.addEventListener('click',function(){
    this.classList.toggle('active');
    sitemap.classList.toggle('on');
  });
  

let subsite=document.querySelectorAll('.sub_menu_map'),
subtitle=document.querySelectorAll('#site_map>li>a');
for(let i=0;i<subtitle.length;i++){
  subtitle[i].addEventListener('click',function(e){
    e.preventDefault();
     for(let j=0;j<subtitle.length;j++){
        subsite[j].classList.remove('on');
    }
    subsite[i].classList.add('on');
  });
}




