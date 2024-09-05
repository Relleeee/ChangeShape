const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
const box5 = document.querySelector('.box5');
const box6 = document.querySelector('.box6');

const changeShapeButton = document.querySelector('.change-shape');

let isChanged = false;

function toggleShape() {
    if (isChanged) {

        box1.style.borderRadius = '5px';
        box2.style.borderRadius = '0';
        box3.style.borderRadius = '0';
        box4.style.borderRadius = '0';
        box5.style.borderRadius = '0';
        box6.style.borderRadius = '0';
    } else {

        box1.style.borderRadius = '50px';
        box2.style.borderRadius = '50%';
        box3.style.borderRadius = '25px';
        box4.style.borderRadius = '25px';
        box5.style.borderRadius = '25px';
        box6.style.borderRadius = '25px';
    }

    isChanged = !isChanged;
}

changeShapeButton.addEventListener('click', toggleShape);
