$('.main-chapters').click(function(){
	$.scrollTo('.chapter-list', 800);
});

$('.why-this-book').click(function(){
	$.scrollTo('.why-read-the-book', 800);
});

$('.the-author').click(function(){
	$.scrollTo('.about-the-author', 800);
});

$('.testimonials').click(function(){
	$.scrollTo('.testimonials-list', 800);
});

$('.buy-the-book, .btn-buy-our-book').click(function(){
	$.scrollTo('.buy-the-book-container', 800);
});

$('.preview-download, .btn-preview, .btn-free-chapter').click(function(){
	$.scrollTo('.free-download-container', 800);
});

$(window).on('scroll', function(){
	if($(window).scrollTop() >= 50){
		$('.main-menu').addClass('bg-white');
	}else{
		$('.main-menu').removeClass('bg-white');
	}
});

$('.btn-subscribe').click(function(){
	$('form[name="email-subscription"]').submit(function(e){
		$('.pdf-view-custom object').fadeIn();
		$('.email-subscription-container').fadeOut();
		e.preventDefault();
	});
});
