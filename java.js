const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  const moreBtn = box.querySelector('.more');

  moreBtn.addEventListener('click', () => {
    const link = moreBtn.querySelector('a').getAttribute('href');
    window.location.href = link;
  });
});