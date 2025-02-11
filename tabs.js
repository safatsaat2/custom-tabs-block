document.addEventListener("DOMContentLoaded", function () {
  const tabContainers = document.querySelectorAll(".custom-tabs");

  tabContainers.forEach((tabContainer) => {
    const tabs = tabContainer.querySelectorAll(".tab");
    const tabContents = tabContainer.querySelectorAll(".tab-pane");

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", function () {
        tabs.forEach((t) => t.classList.remove("active"));
        tabContents.forEach((content) => content.classList.remove("active"));

        tab.classList.add("active");
        tabContents[index].classList.add("active");
      });
    });
  });
});
