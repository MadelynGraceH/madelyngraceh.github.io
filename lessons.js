var lesson1 = {
	"title": "Headings and Paragraphs",
	"description": "",
	"video": "Headings and P.mp4",
	"challenge": {
		"title": "All About Plants",
		"description": "Now that you know about text and titles, make a webpage describing plants! Then, change the title to \"All About Plants\"!"
	},
    "reading": "",
        "body":""
}

var lesson2 = {
	"title": "Em and B",
	"description": "",
	"video": "Em and B.mp4",
	"challenge": {
		"title": "Important Imformation",
		"description": "Now you know how to make text bold and italic! Write a program to store important imformation using <em> and <b> to talk about things that are REALLY important."
	},
    "reading": "Review: Bold and Italic Text",
    "body":"Now you know about bold and italic text, but here's some reminders about them: When you're doing italic, don't type something like \"<i>\", you have to do <em>. This wasn't actully ever explained in the video, but another way to make text bold is <strong>."
}
var lesson3 = {}

var lessons = [lesson1, lesson2]
var loadLesson = function(lessonNumber) {
    var lesson = lessons[lessonNumber]
    document.getElementById("lessonTitle").innerText = lesson.title;
    document.getElementById("video").src = lesson.video
    document.getElementById("challengeTitle").innerText = lesson.challenge.title;
    document.getElementById("challengeDescription").innerText = lesson.challenge.description; 
    //document.getElementById("readingTitle").innerText = lesson.reading;
}
