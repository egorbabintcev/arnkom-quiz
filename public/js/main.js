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

$('.btn-callback.next-step').on('click', function(e) {
  if (this.type !== 'submit') {
    e.preventDefault();
    const curStep = $(this).parents('.quiz-step');
    if (curStep.hasClass('is-last')) {
      curStep.parents('.quiz-form').find('.quiz-main , .quiz-sidebar').each((i, el) => $(el).prop('hidden', true));
      curStep.parents('.quiz-form').find('.quiz-cta').prop('hidden', false);
      curStep.removeClass('is-active');
      return;
    }
    const nextStep = curStep.next('.quiz-step');
    curStep.removeClass('is-active');
    nextStep.addClass('is-active');
    return;
  }
})

function radioChangeListener() {
  console.log('changed');
  $(this).parents('.quiz-step').find('button.next-step').prop('disabled', false);
  this.removeEventListener('change', radioChangeListener);
}
$('.radio').on('change', radioChangeListener);

$('form.quiz-form').on('submit', function(e) {
  e.preventDefault();
  console.log($(this).serialize());
})
