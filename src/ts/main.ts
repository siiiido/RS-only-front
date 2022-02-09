(() => {
  type IoIndex = number;

  const stepElems = document.querySelectorAll(".step");
  const graphicElems = document.querySelectorAll(".graphic-item");
  let currentItem = graphicElems[0];
  let ioIndex: IoIndex;
  const laseStep = document.querySelector(".step2");

  const io = new IntersectionObserver((entries, observer) => {
    if (entries[0].target instanceof HTMLElement) {
      if (typeof entries[0].target.dataset.index === "string") {
        ioIndex = parseInt(entries[0].target.dataset.index) * 1;
      }
    }
  });

  for (let i = 0; i < stepElems.length; i++) {
    io.observe(stepElems[i]);

    (<HTMLElement>stepElems[i]).dataset.index = String(i);
    (<HTMLElement>graphicElems[i]).dataset.index = String(i);
  }

  function activate() {
    currentItem.classList.add("visible");
  }

  function inactivate() {
    currentItem.classList.remove("visible");
  }

  window.addEventListener("scroll", () => {
    let step;
    let boundingRect;

    for (let i = ioIndex - 1; i < ioIndex + 2; i++) {
      step = stepElems[i];
      if (!step) continue;
      boundingRect = step.getBoundingClientRect();

      if (
        boundingRect.top > window.innerHeight * 0.1 &&
        boundingRect.top < window.innerHeight * 0.8
      ) {
        graphicElems[Number((<HTMLElement>step).dataset.index)].classList.add(
          "visible"
        );

        inactivate();

        if (typeof (<HTMLElement>step).dataset.index !== "undefined") {
          currentItem = graphicElems[Number((<HTMLElement>step).dataset.index)];
        }
        currentItem = graphicElems[Number((<HTMLElement>step).dataset.index)];
        activate();
      }

      //스크롤 끝일때
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        laseStep instanceof HTMLElement
      ) {
        laseStep.style.opacity = String(0);
      }
      if (
        window.innerHeight + window.scrollY < document.body.offsetHeight &&
        laseStep instanceof HTMLElement
      ) {
        laseStep.style.opacity = String(1);
      }
    }
  });

  window.addEventListener(
    "load",
    () => {
      setTimeout(() => scrollTo(0, 0), 100);
    },
    false
  );
  activate();
})();
