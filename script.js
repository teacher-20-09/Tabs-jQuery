$(document).ready(function(){
$("body").html("<h3>CreateTab");
$("<input>").attr({
	id:"txt",
	placeholder:'input count tabs:2-5'
}).appendTo("body");
$("<input>").attr({
type:'button',
value:'create'
}).insertAfter("#txt")
.click(function(){
var value=$('#txt').val();
$('#txt').val("");
if(isNaN(value)){
	alert("input number!")
	return
}	
if( value<2|| value>5){
	alert('error number!');
	return
}
$("<div>").attr('id','tabs').insertAfter("input[type='button']")
for(var i=1;i<=value;i++){
	$("<a>").attr('href','#tab'+i).text('Tab'+i)
	.appendTo("#tabs").after("<div>");
	$("#tabs div:last").text("content"+i)
	.attr('id','tab'+i)
}
$("#tabs a").wrapAll("<div class=menu>")
.filter(':first').addClass('active');
$("#tabs div").not('.menu').wrapAll("<div class='content'>")
.hide().filter(":first").show();
$('.menu').click(function(event){
	var target=event.target;
	if (target.tagName !=='A')return
		var id=$(target).attr('href');
	console.log(id);
	$('.active').removeClass('active');
	$(target).addClass('active');
	$('#tabs .content div ').hide();
	$(id).show();
	event.preventDefault();

})
})
})