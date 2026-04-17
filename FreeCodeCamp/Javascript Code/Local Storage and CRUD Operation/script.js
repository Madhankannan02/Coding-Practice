const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const bookmarkListSection = document.getElementById("bookmark-list-section");
const categoryDropdown = document.getElementById("category-dropdown");
const categoryName = document.querySelector(".category-name");
const categoryList = document.getElementById("category-list");
const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");

function getBookmarks() {
  const data = localStorage.getItem("bookmarks");
  if (!data) return [];
  try {
    const parsed = JSON.parse(data);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      b =>
        b &&
        typeof b.name === "string" &&
        typeof b.category === "string" &&
        typeof b.url === "string"
    );
  } catch {
    return [];
  }
}

function setBookmarks(bookmarks) {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function displayOrCloseForm() {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
}

function displayOrHideCategory() {
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
}

document.getElementById("add-bookmark-button").addEventListener("click", () => {
  categoryName.textContent = categoryDropdown.value;
  displayOrCloseForm();
});

document.getElementById("close-form-button").addEventListener("click", () => {
  displayOrCloseForm();
});

document
  .getElementById("add-bookmark-button-form")
  .addEventListener("click", () => {
    const bookmarks = getBookmarks();
    const newBookmark = {
      name: nameInput.value,
      category: categoryDropdown.value,
      url: urlInput.value
    };
    bookmarks.push(newBookmark);
    setBookmarks(bookmarks);
    nameInput.value = "";
    urlInput.value = "";
    displayOrCloseForm();
  });

document.getElementById("view-category-button").addEventListener("click", () => {
  const selectedCategory = categoryDropdown.value;
  categoryName.textContent = selectedCategory;
  const bookmarks = getBookmarks().filter(
    b => b.category === selectedCategory
  );

  if (bookmarks.length === 0) {
    categoryList.innerHTML = "<p>No Bookmarks Found</p>";
  } else {
    categoryList.innerHTML = bookmarks
      .map(
        (b, i) => `
        <div>
          <input type="radio" id="${b.name}" name="bookmark" value="${b.name}">
          <label for="${b.name}">
            <a href="${b.url}" target="_blank">${b.name}</a>
          </label>
        </div>
      `
      )
      .join("");
  }

  displayOrHideCategory();
});

document.getElementById("close-list-button").addEventListener("click", () => {
  displayOrHideCategory();
});

document
  .getElementById("delete-bookmark-button")
  .addEventListener("click", () => {
    const selected = document.querySelector('input[name="bookmark"]:checked');
    if (!selected) return;

    const selectedName = selected.value;
    const selectedCategory = categoryName.textContent;

    let bookmarks = getBookmarks();
    bookmarks = bookmarks.filter(
      b => !(b.name === selectedName && b.category === selectedCategory)
    );
    setBookmarks(bookmarks);

    const filtered = bookmarks.filter(
      b => b.category === selectedCategory
    );

    if (filtered.length === 0) {
      categoryList.innerHTML = "<p>No Bookmarks Found</p>";
    } else {
      categoryList.innerHTML = filtered
        .map(
          b => `
          <div>
            <input type="radio" id="${b.name}" name="bookmark" value="${b.name}">
            <label for="${b.name}">
              <a href="${b.url}" target="_blank">${b.name}</a>
            </label>
          </div>
        `
        )
        .join("");
    }
  });