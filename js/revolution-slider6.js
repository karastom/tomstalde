(function($) {
  'use strict' ;
	
	var revapi315,
		tpj=jQuery;

	tpj(document).ready(function() {
		if(tpj("#rev_slider_315_1").revolution == undefined){
			revslider_showDoubleJqueryError("#rev_slider_315_1");
		}else{
			revapi315 = tpj("#rev_slider_315_1").show().revolution({
				sliderType:"hero",
				jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
				sliderLayout:"fullwidth",
				dottedOverlay:"none",
				delay:9000,
				responsiveLevels:[1240,1024,778,480],
				visibilityLevels:[1240,1024,778,480],
				gridwidth:[1240,1024,778,480],
				gridheight:[800,768,500,300],
				lazyType:"none",
				parallax: {
					type:"scroll",
					origo:"slidercenter",
					speed:400,
					levels:[1,2,3,4,5,6,7,8,9,10,15,48,49,50,51,55],
				},
				shadow:0,
				spinner:"spinner3",
				autoHeight:"off",
				fullScreenAutoWidth:"off",
				fullScreenAlignForce:"off",
				fullScreenOffsetContainer: "",
				fullScreenOffset: "0px",
				disableProgressBar:"on",
				hideThumbsOnMobile:"off",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				debugMode:false,
				fallbacks: {
					simplifyAll:"off",
					disableFocusListener:false,
				}
			});
		}
		try{initSocialSharing("315")} catch(e){}
	});	/*ready*/
	
})(jQuery);// End of use strict	 