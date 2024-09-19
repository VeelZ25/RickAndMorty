// JavaScript source code


let buttonStartAnimation = document.getElementById('logo-head');
let imageMargin = document.getElementById('ship');


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



buttonStartAnimation.addEventListener('click', () => {

    let sleepTime = 0;



    for (let i = 5; i > 1; i--) {


        imageMargin.style.marginLeft = i + '%';

        alert(sleepTime);
        //sleep(sleeptime).then(() => { imageMargin.style.marginLeft = i + '%'; });
        sleeptime = sleepTime + 1000;   
    }

    alert(sleepTime);

    //for (let i = 1; i < 99; i++) {

    //}

    //for (let i = 99; i < 39; i--) {

    //}
});