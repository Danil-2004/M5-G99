

// let currentIndex = 0;

// function getOffset(element){
//     let rect = element.getBoundingClientRect();
//     return {
//         left: rect.left + window.scrollX,
//         top: rect.top + window.scrollY
//     };
// }

// function centerJumpingBlock(target) {
//     let jumpingBlock = document.getElementById('jumpingBlock');


//     if(target){
//         let targetOffset = getOffset(target);
//         let jumpingBlockWidth = jumpingBlock.offsetWidth;
//         let jumpingBlockHeight = jumpingBlock.offsetHeight;

//         let left = targetOffset.left -220;
//         let top = targetOffset.top;

//         jumpingBlock.style.left = `${left}px`;
//         jumpingBlock.style.top = `${top}px`;

//     }
// }

// function checkScroll() {
//     let targets = document.querySelectorAll('.targetBlock');

//     if(currentIndex<targets.length){
//         let targetOffset = getOffset(targets[currentIndex]);
//         if(targetOffset.top <=window.scrollY +window.innerHeight&& targetOffset.top+targets[currentIndex].offsetHeight>window.scrollY){
//             centerJumpingBlock(targets[currentIndex]);
//             currentIndex++;
//         }
//     }
// }

// function updateJumpingBlockPosition(){
//     let targets = document.querySelectorAll('.targetBlock');
//     centerJumpingBlock(targets[currentIndex])
// }


// window.onload=updateJumpingBlockPosition;
// window.onresize=updateJumpingBlockPosition;
// window.onscroll=checkScroll;
// let parent=document.querySelector('#scroll');
// let scroll=document.querySelectorAll('#scroll article');
// scroll.forEach((elem)=>elem.remove());
// let i=0;
// let time=setInterval(()=>{
//     scroll[i].classList.remove('opacity-0');
//     Liner_Bg(scroll[i].pramentElement,flash );
//     Liner_Bg(scroll[i],flash);
//     setTimeout(()=>{
//         scroll[i].classList.add('oopacity-0');
//     },2000);     
// setTimeout(()=>{
//     scroll[i].remove();
//     i<scroll.length-1?parent.append(scroll[i+1]).append(scroll[0]);
//     i<scroll.length-1?i++:i=0;
// },3000);
// },3500);

