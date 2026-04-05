const switcherBtn = document.getElementById("theme-switcher-button");
const dropdown = document.getElementById("theme-dropdown");
const statusMsg = document.getElementById("status");
const themeItems = document.querySelectorAll('[role="menuitem"]');

const themes = [
  { name: "light", message: "Light theme activated! Bright and clear." },
  { name: "dark", message: "Dark theme activated! Easy on the eyes." },
  { name: "ocean", message: "Ocean theme activated! Calm like the sea." }
];

switcherBtn.addEventListener("click", () => {
  const isExpanded = switcherBtn.getAttribute("aria-expanded") === "true";

  switcherBtn.setAttribute("aria-expanded", !isExpanded);
  dropdown.hidden = isExpanded;
});

themeItems.forEach((item) => {
  item.addEventListener("click", () => {
    const selectedTheme = item.textContent.toLowerCase();
    
    document.body.className = ""; 
    document.body.classList.add(`theme-${selectedTheme}`);

    const themeData = themes.find(t => t.name === selectedTheme);
    statusMsg.textContent = themeData ? themeData.message : "";

    dropdown.hidden = true;
    switcherBtn.setAttribute("aria-expanded", "false");
  });
});