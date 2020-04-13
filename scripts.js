$(document).ready(function() {
	$t = 300;
	$play = setInterval(function(){
		formatTime();
	},1000);

	function formatTime(){
		$t--;
		$m = Math.floor($t/60);
		$s = $t%60 < 10 ? "0" + $t%60 : $t%60;
		$formatted = $m + ":" + $s;
		$('#time').text($formatted);
		if($t==0){
			clearInterval($play);
			$('header, footer, #container').fadeOut(2000);
		}
	}
});