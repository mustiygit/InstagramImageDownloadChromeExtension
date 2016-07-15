/*
* Developer : Savaş Can ALTUN <savascanaltun@gmail.com>
* Github : http://github.com/saltun
* Pages : http://instagramresimindirme.net
* Todo : multi lang extension
*/
$(function(){



/* Run 3 seconds */
setInterval(function(){

/* get page url */
var page=document.URL;

/* Check page */
if (page.indexOf('/p/') > 0 ) {

	/* button text */
	if(chrome.i18n.getMessage("appLang")=="tr"){
		var downloadText="İndir";
	}else{
		var downloadText="Download";
	}
	
	/* download link */
	var link="http://instagramresimindirme.net/down.php?url="+page;

	$('._ovg3g').html('<a href="'+link+'" target="_blank" style=" display: inline-block; height: 38px; padding: 0 30px; color: #555; text-align: center; font-size: 11px; font-weight: 600; line-height: 38px; letter-spacing: .1rem; text-transform: uppercase; text-decoration: none; white-space: nowrap; background-color: transparent; border-radius: 4px; border: 1px solid #bbb; cursor: pointer; box-sizing: border-box; color: #FFF; background-color: #ff0000; border-color: #ff0000;">'+downloadText+' </a>');

}else{
	$('._ovg3g').html('');
}

}, 3000);



});