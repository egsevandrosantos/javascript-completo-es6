const links = document.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("click", handleClick);
});

function handleClick(event) {
  event.preventDefault();
  const url = event.target.href;
  fetchPage(url);
  history.pushState(null, null, url);
}

async function fetchPage(url) {
  document.querySelector(".content").innerHTML = "Carregando...";
  const pageHtml = await (await fetch(url)).text();
  replaceContent(pageHtml);
}

function replaceContent(newHtml) {
  const div = document.createElement("div");
  div.innerHTML = newHtml;
  const oldContent = document.querySelector(".content");
  const newContent = div.querySelector(".content");
  oldContent.innerHTML = newContent.innerHTML;
  const newTitle = div.querySelector("title");
  document.title = newTitle.innerText;
}

window.addEventListener("popstate", () => {
  fetchPage(location.href);
});
