$('.btn-callback.modal-open').on('click', function(e) {
  e.preventDefault();
  $('body').addClass(['darken', 'lock']);
  $(this.dataset.target).show({ duration: 0, done: function() { $(this).addClass('is-open') } });
})

$('.btn-callback.modal-close').on('click', function(e) {
  e.preventDefault();
  $('body').removeClass(['darken', 'lock']);
  $(this.dataset.target).hide({ duration: 0, done: function() { $(this).removeClass('is-open') } });
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


function radioChangeListener() {
  console.log('changed');
  $(this).parents('.quiz-step').find('button.next-step').prop('disabled', false);
}
$('.radio').on('change', radioChangeListener);
