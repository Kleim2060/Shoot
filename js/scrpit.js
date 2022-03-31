let shot = document.querySelector('.shot'),
    hit = document.querySelector('.hit'),
    reload = document.querySelector('.reload'),
    count = document.querySelector('.count strong'),
    beer = document.querySelectorAll('.beer'),
    counter = 0;

document.body.addEventListener('click', playShot);

function playShot(e) {
    let el = e.target;
    if(el.classList.contains('beer')){
        hit.play();
        counter++;
        count.textContent = counter;
        console.log(count)
        el.classList.add('die');
        reload.play()

        if(count.innerHTML == 5){
            setTimeout('location.reload()', 1000);
        }
    }else {
        shot.play();
        reload.play()
    }
}

reload.volume = 0.3;