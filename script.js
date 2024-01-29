// console.log(window.location.href.split("/").slice(-1));

if (window.location.href.split("/").slice(-1)[0] === "success.html") {
  const dissmiss = document.querySelector(".dismissBtn");
  dissmiss.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e);
    window.location.href = "./index.html";
  });
} else {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const form = document.querySelector("form");
  const error = form.querySelector(".error");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (e.target[0].value.match(emailRegex)) {
      console.log(e.target[0].value);
      error.style.display = "none";
      window.location.href = "./success.html";
      e.target[0].value = "";
      console.log(document);
    } else {
      error.style.display = "grid";
      error.parentNode.parentNode.querySelector("input").style.color =
        "hsl(4, 100%, 67%)";
    }
  });
}
