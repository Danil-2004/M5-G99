

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


