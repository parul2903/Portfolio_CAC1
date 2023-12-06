const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if(activeLink != i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000);
        }
    })
})

document.getElementById('githubButton1').addEventListener('click', function() {
    window.open('https://github.com/parul2903/forskProject', '_blank');
});

document.getElementById('githubButton2').addEventListener('click', function() {
    window.open('https://github.com/parul2903/objectDetection_YOLOv5', '_blank');
});

document.getElementById('githubButton3').addEventListener('click', function() {
    window.open('https://github.com/parul2903/Vehicle-detection-with-yolov5', '_blank');
});

document.getElementById('githubButton4').addEventListener('click', function() {
    window.open('https://github.com/parul2903/emotions_classifier_bert', '_blank');
});

