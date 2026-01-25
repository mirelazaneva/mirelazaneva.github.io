(() => {
  // Initialize theme
  const body = document.body;
  const data = body.getAttribute("data-theme");
  
  const initTheme = (state) => {
    if (state === "dark") {
      body.setAttribute("data-theme", "dark");
    } else if (state === "light") {
      body.removeAttribute("data-theme");
    } else {
      localStorage.setItem("theme", data);
    }
  };
  
  // Initialize on page load
  initTheme(localStorage.getItem("theme"));
  
  // Theme switch
  const lamp = document.getElementById("mode");
  
  const toggleTheme = (state) => {
    if (state === "dark") {
      localStorage.setItem("theme", "light");
      body.removeAttribute("data-theme");
    } else if (state === "light") {
      localStorage.setItem("theme", "dark");
      body.setAttribute("data-theme", "dark");
    } else {
      initTheme(state);
    }
  };
  
  if (lamp) {
    lamp.addEventListener("click", () =>
      toggleTheme(localStorage.getItem("theme"))
    );
  }
  
  // Blur the content when the menu is open
  const cbox = document.getElementById("menu-trigger");
  if (cbox) {
    cbox.addEventListener("change", function () {
      const area = document.querySelector(".wrapper");
      this.checked
        ? area.classList.add("blurry")
        : area.classList.remove("blurry");
    });
  }
})();