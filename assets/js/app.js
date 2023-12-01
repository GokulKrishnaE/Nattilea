$(document).ready(function(){
    
// include html
  let includes = $('[data-include]')
  jQuery.each(includes, function(){
    let html = '/' + $(this).data('include') + '.html'
    $(this).load(html)
  })

  $('.product-thumbnail').slick({
    dots: true,
    prevArrow: false,
    nextArrow: false,
    infinite: true,
  });

})

$(document).ajaxStop(function(){
  $('.match-height').matchHeight()
})