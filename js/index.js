//JQUERY UI library is needed for color animations

NewQuote();
function NewQuote()
{
	var quoteData = {};
	var apiURL  = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1"
	$.ajax(
	{
		url:apiURL,
		success:function(q){SetQuoteUI(q);} 
	});
}

function SetQuoteUI(quoteData)
{
	AnimateUI();
	var quoteUI = document.getElementById("Quote");
	var authorUI = document.getElementById("Author");
	
	quoteUI.innerHTML = '"' + StripHTMLTag(quoteData[0].content) + '"';
	authorUI.innerHTML = "- " + quoteData[0].title;
}

function AnimateUI()
{	
	var colorOptions = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
	
	var randomIndex = Math.floor(Math.random() * colorOptions.length);
	var color = colorOptions[randomIndex];

	$("html body").animate( {backgroundColor:color, color:color}, 1000);
	$(".button").animate( {backgroundColor:color}, 1000);
}

function Tweet()
{
	var url = "https://twitter.com/intent/tweet?text="
	url += encodeURI( $("#Quote").html() );
	url += encodeURI("\r\n");
	url += encodeURI( $("#Author").html() );
	
	window.open(url);
}

function StripHTMLTag(text)
{
	return text.replace(/(<([^>]+)>)/ig,"");
}

