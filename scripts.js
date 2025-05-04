document.addEventListener('keydown', e => {
  if (e.key.toLowerCase() === 'd') {
    document.body.classList.toggle('dark-mode');
  }
});