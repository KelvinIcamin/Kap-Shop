document.querySelectorAll('.faq').forEach(function(faq) {
    var question = faq.querySelector('.question');
    question.addEventListener('click', function() {
      faq.classList.toggle('active');
    });
  });