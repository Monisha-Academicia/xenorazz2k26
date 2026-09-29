const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".nav");
const navLinks = document.getElementById("navLinks");

menuBtn?.addEventListener("click", () => nav.classList.toggle("open"));
navLinks?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

// Flip-style live countdown to 07 October 2026, 00:00 IST.
const eventDate = new Date("2026-10-07T00:00:00+05:30").getTime();
const ids = ["days","hours","minutes","seconds"];

function updateCountdown(){
  const now = Date.now();
  let distance = Math.max(0, eventDate - now);
  const days = Math.floor(distance / 86400000); distance %= 86400000;
  const hours = Math.floor(distance / 3600000); distance %= 3600000;
  const minutes = Math.floor(distance / 60000); distance %= 60000;
  const seconds = Math.floor(distance / 1000);
  [days,hours,minutes,seconds].forEach((value,i)=>{
    const el=document.getElementById(ids[i]);
    if(!el) return;
    const next=String(value).padStart(2,"0");
    if(el.textContent!==next){
      const card=el.closest(".flip-card");
      if(card){
        card.classList.remove("flip-now");
        void card.offsetWidth;
        card.classList.add("flip-now");
        setTimeout(()=>card.classList.remove("flip-now"),650);
      }
      el.textContent=next;
    }
  });
}
updateCountdown();
setInterval(updateCountdown,1000);

// Premium scroll-entry animation inspired by modern symposium landing pages.
const revealItems = document.querySelectorAll(
  ".section-heading, .stat-card, .event-card, .event-tab-panel, .info-card, .map-frame, .brochure-card, .faq-item, .contact-card"
);

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add(
      entry.target.classList.contains("event-card") ? "event-visible" : "scroll-visible"
    );
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.14, rootMargin: "0px 0px -40px 0px" });

revealItems.forEach(el => revealObserver.observe(el));

// Event tabs: each event gets its own dedicated colored panel.
const eventTabButtons = document.querySelectorAll(".event-tab-btn");
const eventTabPanels = document.querySelectorAll(".event-tab-panel");
eventTabButtons.forEach(button => {
  button.addEventListener("click", () => {
    const target = button.dataset.event;
    eventTabButtons.forEach(btn => {
      const selected = btn === button;
      btn.classList.toggle("active", selected);
      btn.setAttribute("aria-selected", selected ? "true" : "false");
    });
    eventTabPanels.forEach(panel => panel.classList.toggle("active", panel.dataset.panel === target));
    const activePanel = document.querySelector(`.event-tab-panel[data-panel="${target}"]`);
    if (activePanel) activePanel.scrollIntoView({behavior:"smooth",block:"nearest"});
  });
});
