$(document).ready(function () {

	navFixed();
	mobileMenu();
	topmobileMenu();
	radioPlay();
	socialTab();
	sentiShare();
	//socialTabfixed();


	setTimeout(function () {
		sentiMeter();
	}, 3000);

	$('.searchBtn').on('click', function () {
		$(this).parent('span').toggleClass('open')
	});

	$('a.playvideo').click(function(){
		var videoID = $(this).parent('.video-container').attr('data-videoid');
		$(this).fadeOut();
		autoPlayVideo(videoID,'450','283');
	});


});

function navFixed() {
	$(window).on('scroll',function () {
		if ($(this).scrollTop() > 110) {
			$('header.main').addClass('fixed');
			$('.container').addClass('fixed');
		} else if ($(this).scrollTop() < 110) {
			$('header.main').removeClass('fixed');
			$('.container').removeClass('fixed');
		}
	});
}

function mobileMenu() {
	$('.burgermenu').on('click', function () {
		if ($(this).hasClass('open')) {
			$(this).removeClass('open');
			$('.main-nav').removeClass('slideDown');
		} else {
			$(this).addClass('open');
			$('.main-nav').addClass('slideDown');
		}
	});
}

function topmobileMenu() {
	$('.topnav').on('click', function () {
		if ($(this).hasClass('open')) {
			$(this).removeClass('open');
			$(this).children('i').removeClass('fa-angle-double-up').addClass('fa-angle-double-down');
			$('.topbar').removeClass('slideDown');
		} else {
			$(this).addClass('open');
			$(this).children('i').removeClass('fa-angle-double-down').addClass('fa-angle-double-up');
			$('.topbar').addClass('slideDown');
		}
	});
}

function radioPlay() {
	$('.play-radio').on('click', function () {
		if ($(this).hasClass('playing')) {
			$(this).removeClass('playing');
			$(this).children('i').removeClass('fa-pause').addClass('fa-play');
			$('#radio').get(0).pause();
		} else {
			$(this).addClass('playing');
			$(this).children('i').removeClass('fa-play').addClass('fa-pause');
			$('#radio').get(0).play();
		}
	});
}

function socialTab() {
	$('.social-sidebar-tab h2').each(function () {
		$(this).on('click', function () {
			var getId = $(this).attr('id');
			//console.log(getId);
			if ($(this).hasClass('active')) {
				return false;
			} else {
				$(this).addClass('active');
				$(this).siblings('h2').removeClass('active');
				$('.' + getId).addClass('active');
				$('.' + getId).siblings('div').removeClass('active');
			}
		});
	});
}

function sentiMeter() {
	$('.bar').each(function () {
		var level = $(this).attr('data-rate'),
			rated = (level / 100) * 200;
		$(this).animate({
			height: rated + 'px'
		});
		$(this).siblings('.status').children('.status-rate').text(level + '%');

	});
}

function sentiShare() {
	$('.senti-fb,.senti-tw').on('click', function () {
		$('.overlay').fadeIn();
	});
	$('.overlay').on('click', function () {
		$(this).fadeOut();
	});
}

function autoPlayVideo(vcode, width, height){
  "use strict";
  $(".acontent").append('<iframe width="'+width+'" height="'+height+'" src="https://www.youtube.com/embed/'+vcode+'?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');
}

function socialTabfixed(){
	$(window).scroll(function () {
		var $window = $(window),
			$social = $('.social-sidebar-tab').offset();
		if ($window.scrollTop() > $social.top ) {
			$('.social-sidebar-tab').addClass('fixed');
			$('.social-sidebar-tab').stop().animate({
				marginTop: '20px'
			});
		} else  {
			$('.social-sidebar-tab').removeClass('fixed');
			$('.social-sidebar-tab').stop().animate({
				marginTop: '0'
			});
		}
	});
}

