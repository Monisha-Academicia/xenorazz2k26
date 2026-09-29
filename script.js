const target = new Date('2026-10-07T09:00:00+05:30').getTime();
const pad=n=>String(Math.max(0,n)).padStart(2,'0');
function tick(){const diff=Math.max(0,target-Date.now());const s=Math.floor(diff/1000);document.getElementById('days').textContent=pad(Math.floor(s/86400));document.getElementById('hours').textContent=pad(Math.floor(s%86400/3600));document.getElementById('minutes').textContent=pad(Math.floor(s%3600/60));document.getElementById('seconds').textContent=pad(s%60)}tick();setInterval(tick,1000);
const menu=document.querySelector('.menu-toggle');const nav=document.querySelector('#mainNav');menu.addEventListener('click',()=>nav.classList.toggle('open'));document.querySelectorAll('#mainNav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
