let tabs = document.querySelectorAll(".tab-item");
let panes = document.querySelectorAll(".tab-pane");

let tabActiveCss = document.querySelector(".tab-item.active");
let tabLineCss = document.querySelector(".tabs .line");

tabLineCss.style.left = tabActiveCss.offsetLeft + "px";
tabLineCss.style.width = tabActiveCss.offsetWidth + "px";

tabs.forEach((tab, index) => {
  let pane = panes[index];

  tab.onclick = function () {
    let tabActive = document.querySelector(".tab-item.active");
    let paneActive = document.querySelector(".tab-pane.active");
    tabActive.classList.remove("active");
    paneActive.classList.remove("active");

    tabLineCss.style.left = this.offsetLeft + "px";
    tabLineCss.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});
