window.addEventListener("load", function () {
    document.querySelector('.headerbg').classList.add('skewed');
    document.querySelector('.headerContainer').classList.add('loaded')
});


document.addEventListener("DOMContentLoaded", () => {
    const myWork = document.querySelector('.myWorkContainer');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                myWork.classList.add('loaded');
                observer.unobserve(myWork); // stop observing after it loads once
            }
        });
    }, {
        threshold: 0.3 // Trigger when 30% of the element is visible
    });

    observer.observe(myWork);
});
