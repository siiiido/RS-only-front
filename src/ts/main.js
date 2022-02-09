(function () {
    var stepElems = document.querySelectorAll(".step");
    var graphicElems = document.querySelectorAll(".graphic-item");
    var currentItem = graphicElems[0];
    var ioIndex;
    var laseStep = document.querySelector(".step2");
    var io = new IntersectionObserver(function (entries, observer) {
        if (entries[0].target instanceof HTMLElement) {
            if (typeof entries[0].target.dataset.index === "string") {
                ioIndex = parseInt(entries[0].target.dataset.index) * 1;
            }
        }
    });
    for (var i = 0; i < stepElems.length; i++) {
        io.observe(stepElems[i]);
        stepElems[i].dataset.index = String(i);
        graphicElems[i].dataset.index = String(i);
    }
    function activate() {
        currentItem.classList.add("visible");
    }
    function inactivate() {
        currentItem.classList.remove("visible");
    }
    window.addEventListener("scroll", function () {
        var step;
        var boundingRect;
        for (var i = ioIndex - 1; i < ioIndex + 2; i++) {
            step = stepElems[i];
            if (!step)
                continue;
            boundingRect = step.getBoundingClientRect();
            if (boundingRect.top > window.innerHeight * 0.1 &&
                boundingRect.top < window.innerHeight * 0.8) {
                graphicElems[Number(step.dataset.index)].classList.add("visible");
                inactivate();
                if (typeof step.dataset.index !== "undefined") {
                    currentItem = graphicElems[Number(step.dataset.index)];
                }
                currentItem = graphicElems[Number(step.dataset.index)];
                activate();
            }
            //스크롤 끝일때
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight &&
                laseStep instanceof HTMLElement) {
                laseStep.style.opacity = String(0);
            }
            if (window.innerHeight + window.scrollY < document.body.offsetHeight &&
                laseStep instanceof HTMLElement) {
                laseStep.style.opacity = String(1);
            }
        }
    });
    window.addEventListener("load", function () {
        setTimeout(function () { return scrollTo(0, 0); }, 100);
    }, false);
    activate();
})();
