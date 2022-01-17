var menuOpen = false;

function secSlideUp(){
		let allSections = $('article > section');
		let screenHeight = $(window).height();
		let scrollTop = $(window).scrollTop();
		allSections.each(function(index){
			let section = allSections.eq(index);
			if(screenHeight + scrollTop - 50 > section.offset().top){
				section.animate({'top': 0, opacity: 1}, 500);
			}
		});
	};

window.onload = function(){
	secSlideUp();
	$(window).on('scroll', secSlideUp);
	$('body').on('click', function(){
		if(menuOpen){
			let menuItems = $('nav > a:not(:first-of-type)');
			let delay = 0;
			menuItems.each(function(index){
				setTimeout(function(){
					menuItems.eq(index).animate({'opacity': 0}, 300, function(){
						menuItems.eq(index).css({'display': 'none'});
					});
				}, delay + (50 * index));
			});
			$('nav > a:first-of-type').removeClass('close');
			menuOpen = false;
		}
	});

	$('nav > a:first-of-type').on('click', function(event){
		event.preventDefault(); 
		event.stopPropagation();
		let menuItems = $('nav > a:not(:first-of-type)');
		let delay = 0;
		if(menuOpen){
			menuItems.each(function(index){
				setTimeout(function(){
					menuItems.eq(index).animate({'opacity': 0}, 300, function(){
						menuItems.eq(index).css({'display': 'none'});
					});
				}, delay + (50 * index));
			});
			$(this).removeClass('close');
			menuOpen = false;
		}

		else{
			menuItems.each(function(index){
				setTimeout(function(){
					menuItems.eq(index).css({'display':'inline'});
					menuItems.eq(index).animate({'opacity':0.6}, 300);
				}, delay + (50 * index));
			});
			$(this).addClass('close');
			menuOpen = true;
		}
	});
};
