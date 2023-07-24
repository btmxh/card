const socialPanels = document.getElementsByClassName('socials-panel');
for(let i = 0; i < socialPanels.length; i++) {
  const panel = socialPanels.item(i);
  const href = panel.getAttribute("socials_href");
  if(href !== null) {
    panel.addEventListener("click", () => {
      window.open(href);
    })
  }
}
