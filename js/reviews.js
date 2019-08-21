window.addEventListener('DOMContentLoaded', function(e) {
  let reviewBlocks = Array.from(document.querySelectorAll('.reviews-page-block'));
  reviewBlocks.forEach(function (item) {
    let showBtn = item.querySelector('.reviews-page-block__show');
    let hideBtn = item.querySelector('.reviews-page-block__hide');
    showBtn.addEventListener('click', function(e) {
      item.classList.add('--expanded');
      showBtn.classList.add('--hidden');
      hideBtn.classList.remove('--hidden');
    });

    hideBtn.addEventListener('click', function (e) {
      item.classList.remove('--expanded');
      showBtn.classList.remove('--hidden');
      hideBtn.classList.add('--hidden');
    });
  });
});