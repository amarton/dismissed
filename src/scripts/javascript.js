var app = app || {

	init: function(){

		app.share();

	},
	share: function(){

		$(".icon-twitter").on("click", function(){

			var tweet = "Dismissed: Tenants lose, landlords win in Baltimore rent court. %23rentcourt"; //Tweet text
			var url = "http://data.baltimoresun.com/news/dismissed/"; //Interactive URL

			var twitter_url = "https://twitter.com/intent/tweet?text="+tweet+"&url="+url+"&tw_p=tweetbutton";
			window.open(twitter_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;

		});

		$(".icon-facebook").on("click", function(){

			var picture = "http://data.baltimoresun.com/news/dismissed/dist/images/facebook-thumb-rent-court.png"; //Picture URL
			var title = "Dismissed: Tenants lose, landlords win in Baltimore rent court"; //Post title
			var description = "Read the Baltimore Sun investigation"; //Post description
			var url = "http://data.baltimoresun.com/news/dismissed/"; //Interactive URL

	    	var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link="+url+"&picture="+picture+"&name="+title+"&description="+description+"&redirect_uri=http://www.facebook.com";    		
			window.open(facebook_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;

		});

	}
	
}

$(document).ready(function(){
	app.init();
});
