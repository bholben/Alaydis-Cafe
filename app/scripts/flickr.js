
var ids = new Array();
var titles = new Array();

function showGallery(){
	var sel = document.getElementById("Galleries");
	var selectedID = sel.options[sel.selectedIndex].value;

	$(".largeImageWrap").each(function(i){
		$(this).remove()
	});

	$(".sliderGallery_Wrap").each(function(i){
		$(this).remove()
	});

	$('#flickrTest').flickrGallery({
		galleryHeight : 'auto',
		useFlickr: 'true',
		useFlickrLargeSize: 'true',
		useHoverIntent: 'true',
		flickrAPIKey: '2d31d51537b23ddfe8ca37e7a75ba732',
		photosetID: selectedID,
		useLightBox: 'true',
		per_page: 50
	});
}

$().ready(function(){
	$.getJSON("http://api.flickr.com/services/rest/? & method=flickr.photosets.getList
		& api_key=2d31d51537b23ddfe8ca37e7a75ba732 & user_id=131037413@N02 & format=json&jsoncallback=?",

	function(data){
		var photo.ID = "";
		var title = "";

		$.each(data.photos.photo, function(i,set){
			photoID = set.id;
			title = set.title;
			ids.push(photoID);
			titles.push(title);
		});

		for(i=0; i<ids.length;i++){
			var option = new Option(titles[i],ids[i]);
			var dropDown = document.getElementById("Galleries");
			dropDown.options[i] = option;
		}

		$('#flickrTest').flickrGallery({
			galleryHeight : 'auto',
			useFlickr: 'true',
			useFlickrLargeSize: 'true',
			useHoverIntent: 'true',
			flickrAPIKey: 'a22b1a90b000578e1854ebdb3a3b5ba7',
			photoID: ids[0],
			useLightBox: 'true',
			per_page: 50
		});
	});
});

