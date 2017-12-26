$(document).ready(function(){

	var $heart = $('.heart');
	var $addComment = $('.photo_addcomment_area');

	// Heart red-empty

	$heart.click(function(){

		// 눌렀을 때 --> like 수를 늘려야 한다
		var likes = $(this).parent().parent().children('.likes_count').children('.likes_number'),
		likesNumber = parseInt(likes.html()),
		newValue;

		if($(this).hasClass('fa-heart-o')){
			newValue = likesNumber + 1 ;
		} else{
			newValue = likesNumber - 1 ;
		}

		likes.html(newValue);

		// 눌렀을 때 --> 색깔이 바뀌어야
		$(this).toggleClass("fa-heart-o fa-heart");

	});


	// Comment Addding

	$addComment.keydown(function(event){

		if(event.keyCode == 13){
			var newComment = event.target.value;
			var commentList = $(this).parent().parent().children('.comment_container');
			$(this).val('').blur();
			commentList.append("<li class='comment_content'><span class='comment_author'>Alex Park</span>" + newComment + "</li>");
		}
	});


});