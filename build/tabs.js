/******/ (() => { // webpackBootstrap
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
document.addEventListener("DOMContentLoaded", function () {
  const tabContainers = document.querySelectorAll(".custom-tabs");
  tabContainers.forEach(container => {
    const tabs = container.querySelectorAll(".tab");
    const tabPanes = container.querySelectorAll(".tab-pane");
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        // Remove 'active' class from all tabs and tab panes
        tabs.forEach(t => t.classList.remove("active"));
        tabPanes.forEach(p => p.classList.remove("active"));

        // Add 'active' class to clicked tab and corresponding content
        tab.classList.add("active");
        tabPanes[index].classList.add("active");
      });
    });
  });
});
/******/ })()
;
//# sourceMappingURL=tabs.js.map