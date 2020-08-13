	function slideLeft() {
		$(".page").animate({
			// left: "-="+window.innerWidth
			left: "-=100%"
		}, 1800)
	}

	function slideRight() {
		$(".page").animate({
			// left: "-="+window.innerWidth
			left: "+=100%"
		}, 1800)
	}


	// change pseudo-pages
	// $("#design").click(slideLeft);
	$("#design").click(function () {
		$("#bg-design").css("-webkit-animation-name","expand");
		$("#bg-design").css("-webkit-animation-duration","1s");
		$("#bg-design").css("-webkit-animation-fill-mode","forwards");
		$("#bg-design").css("-webkit-animation-iteration-count","1");
		window.location.href = "design.html";
	});
	// $("#design-nav").click(slideRight);
	// $("#photo").click(slideRight);
	$("#photo").click(function () {
		$("#bg-photo").css("-webkit-animation-name","expand");
		$("#bg-photo").css("-webkit-animation-duration","1s");
		$("#bg-photo").css("-webkit-animation-fill-mode","forwards");
		$("#bg-photo").css("-webkit-animation-iteration-count","1");
		window.location.href = "photo.html";
	});
	// $("#photo-nav").click(slideLeft);
	$(".nav").click(function () {
		window.location.href = "index.html";
	});

	$("#beauty").click(function () {
		$("*").css("font-family", "Comic Sans MS, cursive");
		$("#name").css("text-shadow","none");
		$("#name").css("color","red");
		$("#name").css("font-weight","bold");
		// $("#bg").css("background","url('img/passion.jpg') no-repeat");
		$("#bg").css("background","aqua");
		// $("#bg").css("background-position","left top");
		// $("#bg").css("background-size","400px 300px");
		$(".footer").css("background-color","fuchsia");
		$("#passion").css("opacity","1");
		$("#frog").css("opacity","1");
		$(".nav").css("background","none");
		$(".nav").css("font-weight","bold");
		$(".panel-name").css("font-weight","bold");
	})

	$("#photo").hover(function () {
		$("#bg-photo").css("background-image","url('img/bg 4.jpg'")
		$("#bg-photo").css("background-repeat","no-repeat")
		$("#bg-photo").css("background-position","left bottom")
		$("#bg-photo").css("background-size","cover")

		$("#bg-photo").css("-webkit-animation-name","shrink")
		$("#bg-photo").css("-webkit-animation-duration","0.8s")
		$("#bg-photo").css("-webkit-animation-fill-mode","forwards")
		$("#bg-photo").css("-webkit-animation-iteration-count","1")

		$("#photo").css("-webkit-animation-name","text-expand")
		$("#photo").css("-webkit-animation-duration","0.3s")
		$("#photo").css("-webkit-animation-fill-mode","forwards")
		$("#photo").css("-webkit-animation-iteration-count","1")
	}, function () {
		$("#bg-photo").css("-webkit-animation-name","expand")
		$("#bg-photo").css("-webkit-animation-duration","0.8s")
		$("#bg-photo").css("-webkit-animation-fill-mode","forwards")
		$("#bg-photo").css("-webkit-animation-iteration-count","1")

		$("#photo").css("-webkit-animation-name","text-shrink")
		$("#photo").css("-webkit-animation-duration","0.3s")
		$("#photo").css("-webkit-animation-fill-mode","forwards")
		$("#photo").css("-webkit-animation-iteration-count","1")
		$("#photo").css("opacity","1")
	});

	$("#design").hover(function () {
		$("#bg-design").css("background-image","url('img/bg 5.png'")
		$("#bg-design").css("background-repeat","tile")
		$("#bg-design").css("background-position","right top")
		$("#bg-design").css("background-size","50%")

		$("#bg-design").css("-webkit-animation-name","shrink")
		$("#bg-design").css("-webkit-animation-duration","0.8s")
		$("#bg-design").css("-webkit-animation-fill-mode","forwards")
		$("#bg-design").css("-webkit-animation-iteration-count","1")

		$("#design").css("-webkit-animation-name","text-expand")
		$("#design").css("-webkit-animation-duration","0.3s")
		$("#design").css("-webkit-animation-fill-mode","forwards")
		$("#design").css("-webkit-animation-iteration-count","1")
		$("#design").css("opacity","1")
	}, function () {
		$("#bg-design").css("-webkit-animation-name","expand")
		$("#bg-design").css("-webkit-animation-duration","0.8s")
		$("#bg-design").css("-webkit-animation-fill-mode","forwards")
		$("#bg-design").css("-webkit-animation-iteration-count","1")

		$("#design").css("-webkit-animation-name","text-shrink")
		$("#design").css("-webkit-animation-duration","0.3s")
		$("#design").css("-webkit-animation-fill-mode","forwards")
		$("#design").css("-webkit-animation-iteration-count","1")
	});
