let bodyLockStatus = true;

const bodyUnlock = (delay = 500) => {
    if (bodyLockStatus) {
        setTimeout((() => {
            document.documentElement.classList.remove("lock");
        }), delay);

        bodyLockStatus = false;

        setTimeout((function() {
            bodyLockStatus = true;
        }), delay);
    }
};

const bodyLock = (delay = 500) => {
    if (bodyLockStatus) {
        document.documentElement.classList.add("lock");

        bodyLockStatus = false;

        setTimeout((function() {
            bodyLockStatus = true;
        }), delay);
    }
};

function closeMenu() {
    bodyUnlock();
    document.documentElement.classList.remove("menu-open");
}

function initMenu() {
    if (document.querySelector(".burger-open-button")) {
        document.addEventListener("click", (function (e) {
            if (e.target.closest(".burger-open-button")) {
                bodyLock();
                document.documentElement.classList.add("menu-open");
            }
        }));
    }

    if (document.querySelector(".burger-close-button")) {
        document.addEventListener("click", (function (e) {
            if (e.target.closest(".burger-close-button")) {
                closeMenu();
            }
        }));
    }
}

initMenu()
