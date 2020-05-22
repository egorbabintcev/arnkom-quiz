$('.btn-callback.modal-open').on('click', function(e) {
  e.preventDefault();
  $('body').addClass('is-lock');
  $(this.dataset.target).show({ duration: 0, done: function() { $(this).addClass('is-open') } });
})

$('.btn-callback.modal-close').on('click', function(e) {
  e.preventDefault();
  $('body').removeClass('is-lock');
  $(this.dataset.target).hide({ duration: 0, done: function() { $(this).removeClass('is-open') } });
})

$('button.next-step').on('click', function(evt) {
  if (this.type === 'submit') return;

  evt.preventDefault();
  const curStep = $(this).parents('.quiz-step');
  const nextStep = curStep.next('.quiz-step');
  if (nextStep.hasClass('is-last')) {
    curStep.parents('.quiz-form-wrapper').addClass('last-step');
  }
  curStep.removeClass('is-active');
  nextStep.addClass('is-active');
})

$('.switch').on('change', function() {
  $(this).parents('.quiz-step').find('button.next-step[disabled]').prop('disabled', false);
});
