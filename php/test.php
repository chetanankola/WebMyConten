
<html>
<head>
<link rel="stylesheet" href="http://chetanankola.com/homepage/css/layout.css"  type="text/css" />
<link rel="stylesheet" href="http://chetanankola.com/homepage/css/layoutstyle.css"  type="text/css" />
 
<script src="https://www.google.com/jsapi?key=ABQIAAAANG7mvy6rOfi5N6X-ZuO-zRR8NGwC8ksDUYFZYS7xfpAF8_2XoRSPZ0TOxfEIbuc5OS-_tvAE_w3mHA" type="text/javascript"></script>
<script src="http://chetanankola.com/homepage/scripts/youtubesearch.js" type="text/javascript"> </script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.0/jquery.min.js?ver=1.4.0"></script>
</head>

<link rel="icon" type="image/gif" href="http://chetanankola.com/homepage/images/logo.gif" />  

<body>
<script type="text/javascript" src = "http://chetanankola.com/homepage/scripts/jquerycalls.js"></script>


<!--
<div id="middle">
	<a href=# onclick="addnewtextbox()"> addnew textbox </a>
	<div id="new"> 
	</div>
</div>
-->   

<!--
<div id="middle" style="width:320px; height:195px;">
  <div id="instanttext" style="word-break:break-all;"> 
  </div>
</div>
-->

<!--
<a href=# onclick="resizediv();">resize div to image size </a> 
<div id="imagefit" style="border:10px solid #000;">
<img id="imgsrc" src="http://chetanankola.com/homepage/images/clouds.jpg" width="100px" height="200px"> </img>
</div>
-->   

<script type="text/javascript">


var mywidth = "600";
var myheight = "400";
var ysearch='lazarus';
var searchkey= encodeURIComponent('lazarus');
var final;
 // document.getElementById("middle2").style.width=mywidth;
  //document.getElementById("middle2").style.height=myheight;


function resizediv()
{ 
  document.getElementById("yvideos").style.width=mywidth;
  document.getElementById("yvideos").style.height=myheight;
  document.getElementById("middle2").style.width=mywidth;
  document.getElementById("middle2").style.height=myheight;
}
$(document).ready(function()
{
 
 		   if($('#ysearch').val()!='')
		   {
		      //alert($('#ysearch').val());
		      $('#middle2').show();
		     
		   }
		    else
		    {
		      $('#middle2').hide();
		    }
		    
		    
	 /*$("#ysearch").keydown(function () {
	       ysearch = $(this).val();
	       $("#instanttext").html(ysearch);
		  searchkey = encodeURIComponent(ysearch);
	     });*/
	 

	 $("#ysearch").keyup(function () {      
	       ysearch = $(this).val();
	       $("#instanttext").html(ysearch);
		   searchkey =encodeURIComponent(ysearch);
		   
		   if($('#ysearch').val()!='')
		   {
		      //alert($('#ysearch').val());
		      $('#middle2').show();
		      loadvideo();
		   }
		    else
		    {
		      $('#middle2').hide();
		    }
	  }); //end of onkeyup

function loadvideo()
{
	var yt_url='http://gdata.youtube.com/feeds/api/videos?q='+ysearch+'&format=5&max-results=1&v=2&alt=jsonc'; 
         
	$.ajax
	({
	type: "GET",
	url: yt_url,
	dataType:"jsonp",
	success: function(response)
	{
			if(response.data.items)
			{
					$.each(response.data.items, function(i,data)
					{
					       
						var video_id=data.id;
						var video_title=data.title;
						var video_viewCount=data.viewCount;
						
						
						// IFRAME Embed for YouTube
						var video_frame="<iframe id='yframe' width='"+mywidth+"' height='"+myheight+"' src='http://www.youtube.com/embed/"+video_id+"' frameborder='0' type='text/html'></iframe>";
						/* var final="<div id='title'>"+video_title+"</div><div>"+video_frame+"</div><div id='count'>"+video_viewCount+" Views</div>";*/
						final = video_frame ;
						
						$("#yvideos").html(final);//.fadeIn('slow'); // Result
						resizediv()
						
						
						
						//$(video_frame).hide().appendTo("#yvideos").fadeIn();
					});
			}
			else
			{
					$("#yvideos").html("<div id='no'>No Video</div>");
					
			}
	}
	});//ajax ends	
} // end of load video





});
 </script>

<div id="middle" style="width:150px; height:inherit;">
 <input type="text" value="" id="ysearch" /> <br>Search video
</div>

<div id="middle2">

<div id="yvideos">
<!--		<object>
		<param name="movie" value="http://www.youtube.com/v/u1zgFlCw8Aw?version=3">
		<param name="allowFullScreen" value="true">
		<param name="allowScriptAccess" value="always">	    
		<embed
		src="http://www.youtube.com/v/u1zgFlCw8Aw?version=3"
		type="application/x-shockwave-flash"
		allowfullscreen="true"
		allowScriptAccess="always"
		width="320"
		height="195">
		</object>
-->
	</div>

</div>
 
 
 

<script type="text/javascript">
		function addnewtextbox()
		{
			$("<input type='text' id='ysearch' /><br>").hide().appendTo("#new").fadeIn();
		}
</script>


</body>
</html>  

