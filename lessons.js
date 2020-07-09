var lesson1 = {
	"title": "Headings and Paragraphs",
	"description": "",
	"video": "videos/1_headings_and_p.mp4",
	"challenge": {
		"title": "All About Plants",
		"description": "Now that you know about text and titles, make a webpage describing plants! Then, change the title to \"All About Plants\"!"
	},
    "reading": {}
}

var lesson2 = {
	"title": "Em and B",
	"description": "",
	"video": "videos/2_em_and_b.mp4",
	"challenge": {
		"title": "Important Imformation",
		"description": "Now you know how to make text bold and italic! Write a program to store important imformation using <em> and <b> to talk about things that are REALLY important."
	},
    "reading": {
		"title": "Review: Bold and Italic Text",
		"body":"Now you know about bold and italic text, but here's some reminders about them: When you're doing italic, don't type something like \"<i>\", you have to do <em>. This wasn't actually ever explained in the video, but another way to make text bold is <strong>."
	}
}


var lesson3 = {
	"title": "Images",
	"description": "",
	"video": "videos/3_images.mp4",
	"challenge": {
		"title": "Birthday Party",
		"description": "Now that you know how to make images, make a birthday party using images! You can find images online."
	},
    "reading": {
		"title": "",
		"body": ""
	}
}

var lesson4 = {
	"title": "Intro To CSS",
	"description": "",
	"video": "videos/4_intro_to_css.mp4",
	"challenge": {
		"title": "Colored Webpage",
		"description": "Now that you know how to make webpages colorful, make a colored webpage! It can be something like the donut webpage, etc."
	},
	"reading":{
		"title": "",
		"body": ""
	}
}


var lessons = [lesson1, lesson2, lesson3, lesson4]
var loadLesson = function(lessonNumber) {
    var lesson = lessons[lessonNumber]
    document.getElementById("lessonTitle").innerText = lesson.title;
	document.getElementById("videoSource").src = lesson.video
	document.getElementById("video").load()
    document.getElementById("challengeTitle").innerText = lesson.challenge.title;
	document.getElementById("challengeDescription").innerText = lesson.challenge.description;
	if (lesson.reading.title) {
		document.getElementById("readingTitle").innerText = lesson.reading.title;
		document.getElementById("readingBody").innerText = lesson.reading.body;

	} else {
		document.getElementById("readingTitle").innerText = ""
		document.getElementById("readingBody").innerText = ""
	}
	}
