console.log("Starting to execute dynamic.js");

try {
  // 檢查 'my-menu' 元素是否已被定義
  if (!customElements.get("my-menu")) {
    class MyMenu extends HTMLElement {
      connectedCallback() {
        console.log("MyMenu connectedCallback called");
        fetch("./menu.html")
          .then((response) => {
            console.log("menu.html fetch response received");
            return response.text();
          })
          .then((html) => {
            this.innerHTML = html;
            console.log("menu.html content set");
          })
          .catch((error) => console.error("Failed to load menu HTML content:", error));
      }
    }
    customElements.define("my-menu", MyMenu);
    console.log("MyMenu custom element defined");
  } else {
    console.log("my-menu is already defined");
  }
} catch (e) {
  console.error("Error in dynamic.js execution:", e);
}

console.log("dynamic.js has been loaded");
