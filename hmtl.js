let body = document.querySelector("body");
let taxminison = Math.floor(Math.random() * 100);
let h1 = document.createElement("h1");

h1.textContent = taxminison;
h1.style = "text-align: center; font-size: 480px; font-family: Arial, Helvetica, sans-serif";

body.appendChild(h1);