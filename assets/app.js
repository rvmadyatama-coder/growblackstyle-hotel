(function(){
 const menuButton=document.querySelector(".menu-button");
 const nav=document.querySelector(".nav");
 if(menuButton&&nav){menuButton.addEventListener("click",function(){const open=nav.classList.toggle("open");menuButton.setAttribute("aria-expanded",String(open));});}
 const form=document.querySelector("#search-form");
 const input=document.querySelector("#site-search");
 const grid=document.querySelector("#article-grid");
 const status=document.querySelector("#search-status");
 const noResults=document.querySelector("#no-results");
 if(form&&input&&grid){
   const cards=Array.from(grid.querySelectorAll(".article-card"));
   function search(){
     const query=input.value.trim().toLocaleLowerCase();
     let shown=0;
     cards.forEach(card=>{const match=!query||card.textContent.toLocaleLowerCase().includes(query);card.classList.toggle("hidden",!match);if(match)shown++;});
     if(status)status.textContent=query?(shown+" matching article(s)."):"Showing all articles.";
     if(noResults)noResults.classList.toggle("hidden",shown!==0);
   }
   form.addEventListener("submit",function(event){event.preventDefault();search();document.querySelector("#latest")?.scrollIntoView({behavior:"smooth"});});
   input.addEventListener("input",search);
 }
})();
/* GROWBLACKSTYLE-CARD-CLICK-REFINEMENT */
document.addEventListener('click', function (event) {
  const card = event.target.closest(
    '.article-card, .category-card, .editor-card, .feature-card, .topic-card, .card'
  );
  if (!card || event.defaultPrevented) return;
  if (event.target.closest('a, button, input, select, textarea, label')) return;
  const link = card.querySelector('a[href]');
  if (link && link.getAttribute('href')) {
    window.location.href = link.href;
  }
});
document.querySelectorAll(
  '.article-card, .category-card, .editor-card, .feature-card, .topic-card, .card'
).forEach(function (card) {
  if (card.querySelector('a[href]')) {
    card.style.cursor = 'pointer';
  }
});
