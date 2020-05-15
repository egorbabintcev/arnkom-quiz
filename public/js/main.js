$('.btn-callback.modal-open').on('click', function(e) {
  e.preventDefault();
  $('body').addClass(['darken', 'lock']);
  $(this.dataset.target).show({});
})

$('.btn-callback.modal-close').on('click', function(e) {
  e.preventDefault();
  $('body').removeClass(['darken', 'lock']);
  $(this.dataset.target).hide({});
})

$('.btn-callback.next-step').on('click', function(e) {
  if (this.type !== 'submit') {
    e.preventDefault();
    const curStep = $(this).parents('.quiz-step');
    const nextStep = curStep.next('.quiz-step');
    curStep.removeClass('is-active');
    nextStep.addClass('is-active');
    return;
  }
})
