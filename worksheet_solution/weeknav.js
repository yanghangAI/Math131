// Week switcher shown at the top of every week's solutions page.
// To publish a new week, add it to WEEKS.
(function(){
  const WEEKS=[
    {n:2,title:'Secants, tangents, and limits that blow up'},
    {n:3,title:'Computing limits, squeezing them, and pinning them down'},
    {n:4,title:'Continuity, and limits far away'},
    {n:5,title:'The derivative, from the limit definition'}
  ];
  const m=location.pathname.match(/week(\d+)\/?(index\.html)?$/);
  const cur=m?+m[1]:null, i=WEEKS.findIndex(w=>w.n===cur);
  const css=`
.weeknav{display:flex;align-items:center;flex-wrap:wrap;gap:6px 14px;margin:0 0 18px;font-family:"Source Sans 3",ui-sans-serif,system-ui,sans-serif;font-size:.9rem;font-weight:600}
.weeknav a{color:var(--blue);text-decoration:none;border-radius:3px;padding:2px 4px}
.weeknav a:hover{text-decoration:underline}
.weeknav .home{margin-right:auto}
.weeknav .off{color:var(--ink-3);font-weight:400;padding:2px 4px}
.weeknav select{font:inherit;font-weight:600;color:var(--ink);background:var(--paper);border:1px solid var(--rule);border-radius:3px;padding:3px 6px;cursor:pointer;max-width:100%}
@media print{.weeknav{display:none}}`;
  const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
  const nav=document.createElement('nav');nav.className='weeknav';nav.setAttribute('aria-label','Weeks');
  const link=(w,txt)=>w?`<a href="../week${w.n}/" title="${w.title}">${txt}</a>`:`<span class="off">${txt}</span>`;
  const prev=i>0?WEEKS[i-1]:null, next=i>=0&&i<WEEKS.length-1?WEEKS[i+1]:null;
  nav.innerHTML=`<a class="home" href="../">⌂ All weeks</a>`+
    link(prev,prev?`‹ Week ${prev.n}`:'‹ Prev')+
    `<select aria-label="Jump to week">${WEEKS.map(w=>`<option value="${w.n}"${w.n===cur?' selected':''}>Week ${w.n}</option>`).join('')}</select>`+
    link(next,next?`Week ${next.n} ›`:'Next ›');
  nav.querySelector('select').addEventListener('change',e=>{location.href=`../week${e.target.value}/`;});
  const header=document.querySelector('header.top');
  if(header)header.insertBefore(nav,header.firstChild);else document.body.insertBefore(nav,document.body.firstChild);
})();
