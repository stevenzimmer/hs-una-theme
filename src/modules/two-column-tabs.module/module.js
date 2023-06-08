const rotatingTabs = Array.prototype.slice.call(
    document.querySelectorAll(".rotating-tabs")
);
// console.log({ rotatingTabs });

const toggleStateTabs = "border-2";
const toggleStateContentItems  = "hidden";

rotatingTabs.forEach((tab, i) => {
    // console.log({ tab });
    const tabCounters = [];
    tabCounters[i] = 0;

    const tabMenu = tab.querySelector(".tab-menu");
    // Get all Tab Menu Items
    const tabMenuItems = Array.prototype.slice.call(
        tabMenu.querySelectorAll(".tab-link")
    );

    const navLinks = Array.prototype.slice.call(
        tab.querySelectorAll(".nav-link")
    );

    console.log({navLinks});

    // console.log({ tabMenuItems });

    const tabContent = tab.querySelector(".tab-content");

    const tabContentItems = Array.prototype.slice.call(
        tabContent.querySelectorAll(".tab-pane")
    );

    // console.log({ tabContent });

    // Get length of tabMenuItems
    const tabMenuItemLength = tabMenuItems.length;

    // console.log({ tabMenuItemLength });

    // let tabCounter = 0;

    // If clicked reset timeout and grab the tab index and update the counter value

    let rotatingInterval = setInterval(() => {
        rotateTabs();
    }, 5000);

    tabMenuItems.forEach((item, j) => {
        item.addEventListener("click", (e) => {
           clickTabs(j);
        });
    });

    navLinks.forEach((item, j) => {
        item.addEventListener("click", (e) => {
           e.preventDefault();
            clickTabs(j);
        });
    });

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

            navLinks.forEach((navLink) => {
                navLink.classList.remove(toggleStateTabs);
                navLink.ariaSelected = false;
            });
            tabContentItems.forEach((contentItem) => {
                contentItem.classList.add(toggleStateContentItems);
                contentItem.style.transition = "";
            });
            tabCounters[i] = clickIndex;
            tabMenuItems[tabCounters[i]].classList.add(toggleStateTabs);
            tabMenuItems[tabCounters[i]].ariaSelected = true;

            navLinks[tabCounters[i]].classList.add(toggleStateTabs);
            navLinks[tabCounters[i]].ariaSelected = true;

            tabContentItems[tabCounters[i]].classList.remove(toggleStateContentItems);
            tabContentItems[tabCounters[i]].style.transition =
                "opacity 300ms ease-in-out 0s";
         
            clearInterval(rotatingInterval);

    }

    function rotateTabs() {
        if (tabCounters[i] === tabMenuItemLength) {
            tabCounters[i] = 0;
        }
        // console.log({ tabCounters });

        // Make current active
        let currentTabMenuItem = tabMenuItems[tabCounters[i]];

        let currentNavLink = navLinks[tabCounters[i]];

        // console.dir(currentTabMenuItem);
        currentTabMenuItem.classList.add(toggleStateTabs);
        currentTabMenuItem.ariaSelected = true;

        currentNavLink.classList.add(toggleStateTabs);
        currentNavLink.ariaSelected = true;
        

        let currentTabContent = tabContentItems[tabCounters[i]];

        // console.log(currentTabContent);
        currentTabContent.classList.remove(toggleStateContentItems);
        currentTabContent.style.transition = "opacity 300ms ease-in-out 0s";
        currentTabContent.style.opacity = 1;

        if (tabCounters[i] !== 0) {
            let previousTabMenuItem = tabMenuItems[tabCounters[i] - 1];

            let previousNavLink = navLinks[tabCounters[i] - 1];

            let previousTabContent = tabContentItems[tabCounters[i] - 1];
            // console.dir({ previousTabMenuItem });
            previousTabMenuItem.classList.remove(toggleStateTabs);
            previousTabMenuItem.ariaSelected = false;

            previousNavLink.classList.remove(toggleStateTabs);
            previousNavLink.ariaSelected = false;

            previousTabContent.classList.add(toggleStateContentItems);
            previousTabContent.style.transition = "";
            previousTabContent.style.opacity = "";
        } else {
            // Reset Last item
            tabMenuItems[tabMenuItemLength - 1].classList.remove(toggleStateTabs);

            tabMenuItems[tabMenuItemLength - 1].ariaSelected = false;

            navLinks[tabMenuItemLength - 1].classList.remove(toggleStateTabs);

            navLinks[tabMenuItemLength - 1].ariaSelected = false;

            tabContentItems[tabMenuItemLength - 1].classList.add(
                toggleStateContentItems
            );

            tabContentItems[tabMenuItemLength - 1].style.transition = "";

            tabContentItems[tabMenuItemLength - 1].style.opacity = "";
        }

        tabCounters[i]++;
    }
});
