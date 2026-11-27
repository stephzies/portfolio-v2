(() => {
  const cards = [...document.querySelectorAll('[data-project]')];
  const key = 'portfolio-selected-project';
  const showSelection = (slug) => {
    for (const card of cards) {
      if (card.dataset.project === slug) card.dataset.selected = 'true';
      else delete card.dataset.selected;
    }
  };
  const restoreSelection = () => {
    try { showSelection(sessionStorage.getItem(key)); } catch {}
  };
  for (const card of cards) {
    card.addEventListener('click', () => {
      showSelection(card.dataset.project);
      try { sessionStorage.setItem(key, card.dataset.project); } catch {}
    });
  }
  restoreSelection();
  window.addEventListener('pageshow', restoreSelection);
})();

(() => {
  const followOldAboutLink = () => {
    if (location.hash === '#approach') location.replace(new URL('about/', document.baseURI));
  };
  followOldAboutLink();
  window.addEventListener('hashchange', followOldAboutLink);
})();
