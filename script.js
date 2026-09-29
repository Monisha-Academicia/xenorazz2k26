const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".navbar nav");

menuToggle?.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll(".navbar nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

function showRegistrationMessage(event) {
  event.preventDefault();
  const message = document.getElementById("registration-message");
  message.hidden = false;
  message.scrollIntoView({ behavior: "smooth", block: "center" });
}
