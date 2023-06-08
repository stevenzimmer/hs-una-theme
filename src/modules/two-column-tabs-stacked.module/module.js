const stackedTabs = Array.prototype.slice.call(
  document.querySelectorAll(".stacked-tabs")
);

const toggleStateTabs = "active";
const toggleStateContentItems  = "hidden";
stackedTabs.forEach((tab, i) => {
  const tabCounters = [];
    tabCounters[i] = 0;

    const tabMenu = tab.querySelector(".tab-menu");
    // Get all Tab Menu Items
    const tabMenuItems = Array.prototype.slice.call(
        tabMenu.querySelectorAll(".stacked-tab")
    );

    const tabGraphic = tab.querySelector(".tab-graphic");

    const tabGraphicItems = Array.prototype.slice.call(
      tabGraphic.querySelectorAll(".tab-pane")
    );

    console.log({tabMenuItems});

    tabMenuItems.forEach((item, j) => {
      item.addEventListener("click", (e) => {
         clickTabs(j);
      });
    });

    const tabMenuItemLength = tabMenuItems.length;

    function clickTabs(clickIndex) {
      if (tabCounters[i] === tabMenuItemLength) {
          tabCounters[i] = 0;
      }
       // console.dir(item);
          // console.dir(j);
          tabMenuItems.forEach((menuItem) => {
              menuItem.classList.remove(toggleStateTabs);
              menuItem.ariaSelected = false;
          });

       
          tabGraphicItems.forEach((contentItem) => {
              contentItem.classList.add(toggleStateContentItems);
              contentItem.style.transition = "";
          });
          tabCounters[i] = clickIndex;
          tabMenuItems[tabCounters[i]].classList.add(toggleStateTabs);
          tabMenuItems[tabCounters[i]].ariaSelected = true;

      

          tabGraphicItems[tabCounters[i]].classList.remove(toggleStateContentItems);
          tabGraphicItems[tabCounters[i]].style.transition =
              "opacity 300ms ease-in-out 0s";
       
          // clearInterval(rotatingInterval);

    }

    
});