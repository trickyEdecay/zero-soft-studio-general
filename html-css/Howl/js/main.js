$(document).ready(function()
{
	$("#animate").hover(function()
	{
		$("#Navigation").animate({width:'toggle'},300);
	});
});

$(document).ready(function()
{
	$("#animate").mouseenter(function()
	{
		$("#bar").animate({
			left:'80',
			opacity:'1.0',},200);
	});
});

$(document).ready(function()
{
	$("#animate").mouseleave(function()
	{
		$("#bar").animate({
			left:'0',
			opacity:'0.5',},400);
	});
});
