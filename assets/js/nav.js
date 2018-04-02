var navbar = "<nav><ul>";
var socialNav = "<ul>";

navbar = navbar +
"<li><a href=\"index.html\">Blog</a></li>" + 
"<li><a href=\"projects.html\">Projects</a></li>" +
"<li><a href=\"about.html\">About</a></li>" +
"<li><a href=\"path.html\">Path</a></li>" +
"</ul>";

socialNav = socialNav +
"<i class=\"fa fa-facebook-square\"></i>" +
"<i class=\"fa fa-github\"></i>" +
"<i class=\"fa fa-youtube-square\"></i>" +
"<i class=\"test fa fa-copyright\"></i>" +
"</ul>";

$('#navMenu').html(navbar);
$('#navSoc').html(socialNav);

/*Events*/
$("h1").on("mouseenter", function(){
	$(this).css("color", "gray");
});

$("h1").on("mouseleave", function(){
	$(this).css("color", "white");
});

$("i").on("mouseenter", function(){
	$(this).css("color", "blue");
});