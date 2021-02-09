window.addEventListener('DOMContentLoaded', function() {
    let i = 0;
    let images = document.querySelectorAll('.card-img-top');
    let imgSlider = document.querySelector('.imgSlider');
    let slideIndex = 0;

    function showSlide() {
        let clone = images[slideIndex].cloneNode(true);
        imgSlider.appendChild(clone);
        setTimeout(() => {
            imgSlider.removeChild(clone);
        }, 1990)
        slideIndex += 1;
        if (slideIndex == images.length) {
            console.log(slideIndex, ' === ', images.length);
            slideIndex = 0;
        }
    }

    setInterval(() => {
        showSlide();
    }, 2000);

    let hiddenBlockWithText = document.querySelectorAll('.wrapper-block'),
        h3_all = document.querySelectorAll('.showclick'),
        openChecked = false;
    console.log(openChecked);
    h3_all.forEach((h3, index) => h3.addEventListener('click', () => {
        if (openChecked === false) {
            hiddenBlockWithText[index].style.display = 'block';
            openChecked = true;
        } else {
            hiddenBlockWithText[index].style.display = 'none';
            openChecked = false;
        }
    }));
});