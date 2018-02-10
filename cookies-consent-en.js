(function($) {
	"use strict"; // Start of use strict
	
	var consent = getCookie_eu("cookies-consent");
	if (consent == null || consent == "" || consent == undefined)
	{
		$('body').append([
			'<div id="cookies-consent">',
				'<div id="cookie-accept-wrapper" class="row display-flex">',
					'<div class="col-xs-8">Website uses cookies for best user experience. By continuing to browse the site, you are agreeing to our use of cookies.</div>',
					'<div class="col-xs-4 button-wrapper">',
						'<div>',
							'<button id="cookie-accept" class="btn btn-default btn-xs" >OK</button>',
							'<button id="cookie-more" class="btn btn-default btn-xs" >More</button></div>',
						'</div>',
				'</div>',
				'<div id="cookie-details-wrapper" class="row display-flex" style="display:none;">',
					'<div class="col-xs-8">',
						'<div>Website uses cookies for following features:</div>',
						'<div class="feature"><span class="fa fa-ico fa-chevron-right"></span>Language choice</div>',
						'<div class="feature"><span class="fa fa-ico fa-chevron-right"></span>Google Analytics</div>',
						'<div class="feature"><span class="fa fa-ico fa-chevron-right"></span>PayPal</div>',
					'</div>',
					'<div class="col-xs-4 button-wrapper">',
						'<div>',
							'<button id="cookie-accept2" class="btn btn-default btn-xs" >OK</button>',
							'<a href="https://google.com" class="btn btn-default btn-xs" role="button">Leave website</a>',
						'</div>',
					'</div>',
				'</div>',
			'</div>'
		].join(''));
	}

	function setCookie_eu(c_name,value,exdays)
	{

		var exdate = new Date();
		exdate.setDate(exdate.getDate() + exdays);
		var c_value = escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
		document.cookie = c_name + "=" + c_value+"; path=/";

		$('#cookie_directive_container').hide('slow');
	}


	function getCookie_eu(c_name)
	{
		var i,x,y,ARRcookies=document.cookie.split(";");
		for (i=0;i<ARRcookies.length;i++)
		{
			x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
			y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
			x=x.replace(/^\s+|\s+$/g,"");
			if (x==c_name)
			{
				return unescape(y);
			}
		}
	}

	$("#cookie-more").click(function(){
		$('#cookie-accept-wrapper').hide();
		$('#cookie-details-wrapper').show();
	});
	
	$("#cookie-accept").click(function(){
		setCookie_eu("cookies-consent", 1, 30);
		$('#cookies-consent').hide();
	});
	
	$("#cookie-accept2").click(function(){
		setCookie_eu("cookies-consent", 1, 30);
		$('#cookies-consent').hide();
	});
	
})(jQuery);