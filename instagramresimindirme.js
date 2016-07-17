/*
* Developer : Savaş Can ALTUN <savascanaltun@gmail.com>
* Github : http://github.com/saltun
* Pages : http://instagramresimindirme.net
*/
$(function(){



/* Run 3 seconds */
setInterval(function(){

/* get page url */
var page=document.URL;

/* Check page */
if (page.indexOf('/p/') > 0 ) {

	
	/* download link */
	var link="http://instagramresimindirme.net/down.php?url="+page;

	$('._ovg3g').html('<a href="'+link+'"><img src="http://uptc.xyz/fcghj.png" style="margin-left:10px;margin-top:5px;" title="Save"></a>');

}else{
	$('._ovg3g').html('');
}

}, 3000);



});