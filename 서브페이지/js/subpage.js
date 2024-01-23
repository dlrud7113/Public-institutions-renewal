
//con_gnb
let arrow = document.querySelectorAll('.fa-chevron-down');
let subgnb=document.querySelectorAll('.con_gnb ul');
console.log(subgnb);
for(let i=0;i<arrow.length;i++){
  arrow[i].addEventListener('click',function(){
    arrow[i].classList.toggle('active');
  })
};


for(let j=0;j<arrow.length;j++){
  arrow[j].addEventListener('click',function(){
    subgnb[j].classList.toggle('show');
  })
}




/* nav */
let nav =document.querySelector('.nav');
let $list = document.getElementById('gnb');

$list.addEventListener('mouseover',function(){
  nav.style.height="415px";
});

$list.addEventListener('mouseout',function(){
  nav.style.height="115px";
  
});



//테이블
let rowsPerPage = 15;
let rows=document.querySelectorAll('.page_wrap tbody tr');
let rowsCount = rows.length;
let pageCount = Math.ceil(rowsCount/rowsPerPage);
let numbers= document.querySelector('#numbers');
//console.log(rows,rowsCount,pageCount,numbers);

for(let i = 1; i <=pageCount; i++){
  numbers.innerHTML +=`<li><a href="">${i}</a></li>`
}
//a 선택하기 
let numberBtn=numbers.querySelectorAll('a');

numberBtn.forEach(function(item, idx){
  item.addEventListener('click',(e)=>{
    e.preventDefault();
    displayRows(idx);
  })
})


function displayRows(idx){
  let start =idx * rowsPerPage;
  let end= start + rowsPerPage;
let rowsArray=[...rows];

for(ra of rowsArray){
  ra.style.display='none'
}
let nowRows=rowsArray.slice(start,end);
for(nr of nowRows){
  nr.style.display=''
}
}
displayRows(0);

/* 푸터 */
var swiper = new Swiper(".mySwiper_award", {
  slidesPerView:5,
  spaceBetween:40,
  autoplay:true,
  delay:900,
  loop:true,
});


/* 사이트맵 */
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
