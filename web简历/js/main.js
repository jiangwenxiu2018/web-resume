(function () {
	//严格模式下运行
	'use strict';

	var getHeight = function() {
		var extraHeight = 0;
		setTimeout(function(){
			$('.personal-wrap').stop().animate({
				'height': $('.personal-tab-content.active').height() + extraHeight
			});
		}, 200);
	};

	var pieChart = function() {
		$('.chart').easyPieChart({
			scaleColor: false,
			lineWidth: 10,
			lineCap: 'butt',
			barColor: '#17e7a4',
			trackColor:	"#000000",
			size: 160,
			animate: 1000
		});
	};

	var tabContainer = function() {
		getHeight();
		$(window).resize(function(){
			getHeight();
		})
	};

	var tabClickTrigger = function() {
		$('.tab-menu a').on('click', function(event) {
			event.preventDefault();
			var $this = $(this),
				data = $this.data('tab'),
				pie = $this.data('pie');

			// add/remove active class
			$('.tab-menu li').removeClass('active');
			$this.closest('li').addClass('active');

			$('.personal-tab-content.active').addClass('animated fadeOutDown');

			setTimeout(function(){
				$('.personal-tab-content.active').removeClass('active animated fadeOutDown fadeInUp');
				$('.personal-tab-content[data-content="'+data+'"]').addClass('animated fadeInUp active');
				getHeight();
			}, 500);

			if ( pie === 'yes' ) {
				setTimeout(function(){
					pieChart();
				}, 800);
			}
			
		})
	};

	// Document on load.
	$(function(){
		tabContainer();
		tabClickTrigger();

	});


}());