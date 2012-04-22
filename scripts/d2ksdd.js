

/*var nexttemplate=1;
function changeTemplate()
{
            
            var template = [classictemplate,template1,template2,shadowtemplate,mixtemplate];
            var msgboard = ['classictemplate','template1','template2','shadowtemplate','mixtemplate'];
            randindex = Math.floor(Math.random() * template.length);
            //nexttemplate= new Date(milliseconds);
            nexttemplate = nexttemplate*randindex;
            nexttemplate = nexttemplate%template.length;
            template[nexttemplate]();
            displaymsg(msgboard[nexttemplate]);
} 
*/


var middlewidth = 500;
/*This file has more generic JS calls*/
/* Javascript to change background image using random function:
   add more images to backImage array to randomize better */
var backImage = new Array();
var randindex; // = Math.floor(Math.random() * backImage.length);


function clearbackground() {
	localStorage.clear();
	document.getElementById("bodyid1").style.backgroundImage = "url(../images/menu_tile.png)";// 50% -210px repeat-x"; 
	document.getElementById("bodyid1").style.backgroundColor = "#fff";

	document.getElementById("bodyid1").style.width="100%"; 
	document.getElementById("bodyid1").style.height="100%"; 
	document.getElementById("bodyid1").style.backgroundAttachment="fixed";	
}

function config_offline_mode(flag) {
	if (typeof(localStorage) === 'undefined' ) {
		alert("Your browser doesnt support HTML5 offline storage.. ");
	} else{
		if(flag==1) {
		
			displaymsg('offline mode set');
			localStorage.AllowOffline = 1;
			//$('#cloudanimation').show();
		}else {
			//alert("offline mode removed");
			localStorage.AllowOffline = 0;
			displaymsg('offline mode disabled');
			//$('#cloudanimation').hide();
		}
	}
}

function config_animation(nflag) {
		if(nflag.checked) {
			$('#cloudanimation').show();
		}else {
			$('#cloudanimation').hide();
		}
}

function show_offline_mode_status() {
	//alert( get_offline_mode_status() );
	displaymsg(localStorage.AllowOffline);
}
function config_offline(checkbox) {
	if(checkbox.checked) {
		config_offline_mode(1);
	}else {
		config_offline_mode(0);
	}
}
function get_offline_mode_status() {
	if(localStorage.AllowOffline == NULL ) {
		return 0;
	}else {
		if(localStorage.AllowOffline == 1) {
			return 1;
		}else {
			return 0;
		}
	}

}
function changeBackgroundImage() { 
	
	randindex = Math.floor(Math.random() * backImage.length);
	var ind=0;		
	//backImage[ind++] = "url(/homepage/images/clouds.jpg)";
	backImage[ind++] = "url(/homepage/images/ruggedbg1.png)";
	backImage[ind++] = "url(/homepage/images/ruggedbg2.png)";
	backImage[ind++] = "url(/homepage/images/ruggedbg3.png)";
	backImage[ind++] = "url(/homepage/images/ruggedbg4.png)";
	backImage[ind++] = "url(/homepage/images/ruggedbg5.png)";
	backImage[ind++] = "url(/homepage/images/ruggedbg6.png)";
	backImage[ind++] = "url(/homepage/images/ruggedbg7.png)";
	backImage[ind++] = "url(/homepage/images/ruggedbg8.png)";
	backImage[ind++] = "url(/homepage/images/ruggedbg9.png)";
	backImage[ind++] = "url(/homepage/images/ruggedbg10.png)";
	backImage[ind++] = "url(/homepage/images/ruggedbg11.png)";
	backImage[ind++] = "url(/homepage/images/ruggedbg12.png)";
	backImage[ind++] = "url(/homepage/images/ruggedbg13.png)";
	
	
	backImage[ind++] = "url(/homepage/images/html5wall.jpg)";
	backImage[ind++] = "url(/homepage/images/brightbg1.jpg)";
	backImage[ind++] = "url(/homepage/images/brightbg2.jpg)";
	backImage[ind++] = "url(/homepage/images/brightbg3.jpg)";
	backImage[ind++] = "url(/homepage/images/graybg1.jpg)";
	backImage[ind++] = "url(/homepage/images/graybg2.jpg)";
	backImage[ind++] = "url(/homepage/images/lightgraybg1.png)";
	backImage[ind++] = "url(/homepage/images/lightgraybg2.jpg)";
	backImage[ind++] = "url(/homepage/images/plainwhitebg3.jpg)";
	backImage[ind++] = "url(/homepage/images/plainwhitebg4.png)";
	//backImage[ind++] = "url(/homepage/images/bg4.jpg)";
	//backImage[ind++] = "url(/homepage/images/rain.jpg)";	
	backImage[ind++] = "url(/homepage/images/light_folds.jpg)";
	backImage[ind++] = "url(/homepage/images/lilboys.jpg)";
	//backImage[ind++] = "url(/homepage/images/clouds.jpg)";
	backImage[ind++] = "url(/homepage/images/AwesomeAwesome.jpg)";
	backImage[ind++] = "url(/homepage/images/scenegray.jpg)";
	
	

	//backImage[ind++] = "url(/homepage/images/speakers.jpg)";
	//backImage[ind++] = "url(/homepage/images/trees.jpg)";
	//backImage[ind++] = "url(/homepage/images/signs.jpg)";
	document.getElementById("bodyid1").style.backgroundImage = backImage[randindex]; 
	document.getElementById("bodyid1").style.width="100%"; 
	document.getElementById("bodyid1").style.height="100%"; 
	document.getElementById("bodyid1").style.backgroundAttachment="fixed";
	var imagename= backImage[randindex];
	var imagelink = imagename.split("/");
	var finalimagelink = imagelink[3].split(")");
	displaymsg('background changed to '+finalimagelink[0]);
	/*
	$('#bodyid1 h1').removeClass('bannerinit')
	$("#bodyid1 h1").addClass("hollisterplatesmall");
	*/
	
	if (typeof(localStorage) == 'undefined' ) {
		alert('Your browser does not support HTML5 localStorage. Try upgrading.');
	} else {
		try {
			//localStorage.setItem("bg", backImage[randindex]); //saves to the database, "key", "value"
			localStorage.bg = backImage[randindex];
		} catch (e) {
			 if (e == QUOTA_EXCEEDED_ERR) {
				 alert('html5 storage Quota exceeded!'); //data wasn't successfully saved due to quota exceed so throw an error
			}
		}
	}
	//document.links["downloadimglink"].href ="http://chetanankola.com/homepage/images/"+finalimagelink[0];	
} 

var timeforsearchboxtoappear = 'slow';
var searchposition = '#pane'; //can be html or #left or #pane
var searchboxsize = 50;
function loadsearchdiv() {
	$("<div id='searchdiv'><input id='search' size = "+searchboxsize+" type='textbox' onKeyUp='nextresults();clearpics();blahblah();' /> <p style='padding:0px;font-size:12px; display:inline;'>Search photos</p><div id='internalnext' style='display:none;'><a href='#here'  onclick='nextresults();blahblah();'> next</a><br> </div></div>").hide().appendTo(searchposition).fadeIn(timeforsearchboxtoappear);   	

	$('#search').jCallout({
		message: "You can search photos here",
		position:"right",
	/*backgroundColor: "#F7F3B1",
   textColor: "#3B3b3B"*/
	}); //courtesy: http://jsfiddle.net/anupamsm/zdbpj/5/embedded/result/
		
	}
		
function addvidsearchdiv() {
	$("<div id='vidsearchdiv'><input id='ysearch' type='textbox' size = "+searchboxsize+" value='' onKeyUp='clearvideo();loadvideo();' /> <p style='padding:0px;font-size:12px; display:inline;'>Search video</p></div>").hide().appendTo(searchposition).fadeIn(timeforsearchboxtoappear);

	
	$('#ysearch').jCallout({
		message: "You can search videos here",
		position:"right",
	/*backgroundColor: "#F7F3B1",
   textColor: "#3B3b3B"*/
	}); //courtesy: http://jsfiddle.net/anupamsm/zdbpj/5/embedded/result/
		
	}

var totalnumofytuberesults=3;
function removeytuberesultdiv() { 
	for (i=0;i<totalnumofytuberesults;i++)
	{
	    var vframe= '#ytuberes'+i;
		//alert(vframe);
		$(vframe).remove();
	}
	//$('#rightpane').remove();
}

//called when you call loadpage() will remove any divs that have been dynamically added
function cleardynamicdivs() {
	$('#vidsearchdiv').remove();
	$('#searchdiv').remove();
	$('#yframe').remove();
}

function clearmiddleifpicsearchempty() {
	if($('#search').val()=='') {
		$('#middle').hide();
		$('#internalnext').hide();
		$('#shownext').hide();
		$('#photos').hide();          
	}
}
function clearmiddledivforvideo() {
        $('#middle').hide();
}

function clearotherdivsonloadpage() {
	$('#photos').hide();  //this div is in photos.html
}

/***LOADPAGE FUNCTION!! ******************/
function loadpage(page,num) {
     if(num==2){ cleardynamicdivs(); addvidsearchdiv(); $("#middle").load(page);  clearmiddledivforvideo(); } //if videosearch 
     if(num==1){ cleardynamicdivs(); loadsearchdiv();   $("#middle").load(page);  clearmiddleifpicsearchempty(); }  //if photosearch
     if(num==0){ cleardynamicdivs();                    $("#middle").load(page);  clearotherdivsonloadpage();    $("#middle").fadeIn('slow');} 
     $(".block").hide();   
}

function detacheverything(){
	document.getElementById("detach").style.display = "none";
	YUI().use('dd-drag', function(Y) {
		//Selector of the node to make draggable
		var dd = new Y.DD.Drag({
			node: '#middle'
		});
		var dd = new Y.DD.Drag({
			node: '#top'
		});
		var dd = new Y.DD.Drag({
			node: '#leftmenu'
		});
			
		var dd = new Y.DD.Drag({
			node: '#pane'
		});
	  
		var dd = new Y.DD.Drag({
			node: '#right2'
		});    
        
		var dd = new Y.DD.Drag({
			node: '#middle2'
		}); 
        var dd = new Y.DD.Drag({
		node: '.block'
		});     
                var dd = new Y.DD.Drag({
		node: '#ysearch'
		});    
                var dd = new Y.DD.Drag({
		node: '#photos'
		});
                var dd = new Y.DD.Drag({
		node: '#vidsearchdiv'
		});
                 var dd = new Y.DD.Drag({
		node: '#searchdiv'
                });  
	});       
    displaymsg('blocks have been detached try moving them around');
}

function restoremiddlewidth() {
    $('#middle').width(middlewidth); 
}

function clearmsgboard() {
    $("#msgboard").fadeOut('slow'); //5000 before
  
}
    
function displaymsg(msg) {
   $('#msgboard').remove();
   $("<div id='msgboard' style='display:none;opacity:0.8;width:400px; height:20px; padding:6px;position:fixed;top:2px;left:30%;color:#555;-moz-box-shadow: 0 0 2px 2px #999;-webkit-box-shadow: 0 0 2px 2px #888;box-shadow: 0 0 2px 2px #888;background:#fff;z-index:1000;background: -moz-linear-gradient(top, #fefefe, #efefef);-moz-border-radius:3px;border-radius:3px;background: -webkit-gradient(linear, left top, left bottom, from(#fefefe), to(#efefef));'> </div>").hide().appendTo("html").show();
   $("#msgboard").html('<p style="color:#777;text-shadow:0px 1px 0 white;">'+msg+'</p>');
    $("#msgboard").fadeIn('slow');
   setTimeout("clearmsgboard()",6000);
   

}

    

function animatebanner() {
$('#top').css('marginLeft','-200px');
$('#top').animate({ marginLeft: "+=490px"}, 500 );
$('#top').animate({ marginLeft: "-=100px"}, 500 );
$('#pane').css('marginLeft','-200px');
$('#pane').animate({ marginLeft: "+=490px"}, 800 );
$('#pane').animate({ marginLeft: "-=100px"}, 800 );
$('#middle').css('marginLeft','0px');
$('#middle').css('marginLeft','290px');
$('#middle').css('marginLeft','190px');
$('#rightpane').css('marginLeft','0px');
$('#rightpane').css('marginright','90px');
}



function template2() {	  
	setcommon();
	$('#leftmenutogglebutton').css('background-color','#393A3B');
	$('#leftmenutogglebutton').css('border-radius','4px');	
	$('#leftmenutogglebutton').addClass('jusgloss regularshadow  transparentborder'); //glossshadow //solidborder
	$('#leftmenutogglebutton p').css('color','#fff');
	$('#leftmenu').addClass('bgcolor threeborders opacity boxshadow');
	//$('#pane').addClass(/*'bgcolor fourborders borderradius opacity boxshadow'*/);
	$('#pane').addClass('glossshadow slimmerborder');
	$('#pane').css('background-color','#aaa');
	$('#pane a').css('color','#000');
	$('#top').addClass('/*bgcolor fourborders borderradius opacity boxshadow*/ glossshadow slimmerborder');
	$('#topleft').addClass('bgcolor jusgloss glossshadow transparentborder '); //regularshadow /*glossshadow  threeborders  transparentborder'*/
	$('#topleft').css('background-color','#333');
	$('#fbstats').css('background-color','#fff');
	$('#fbstats').addClass('lightshadow hovershadow');
	$('#searchdiv').addClass('bgcolor borderradius');
	$('#vidsearchdiv').addClass('bgcolor borderradius');
	$('#footer').css('background-color','#fff');
	$('#footer').addClass('lightshadow footerfont');
	$('#middle').addClass('/*bgcolor fourborders*/ borderradius opacity gitshadow');
    $('#middle').css('background-color','#fff');
    $('#full').css('background-color','#fdfdfd');
    $('#full').addClass('lightshadow');//deepestshadow	
    $('#bodyid1').css('background-color','#fff');
}

var resettemplate = function() {
	$('.jusgloss').remove();
	$('.regularshadow').remove();
	$('.transparentborder').remove();
	$('.glossshadow').remove();
	$('.slimmerborder').remove();
	$('.reflectBelow').remove();
	$('.boxshadow').remove();
	$('.opacity').remove();
	$('.lightshadow').remove();
	$('.hovershadow').remove();
	$('.darkinsetshadow').remove();
	$('.deepglossshadow').remove();
	$('.lightshadow').remove();
	$('.footerfont').remove();
}

var  template1 = function() {	 
	setcommon();
	$('#leftmenutogglebutton').css('background-color','#393A3B');
	$('#leftmenutogglebutton').css('border-radius','4px');	
	$('#leftmenutogglebutton').addClass('jusgloss regularshadow  transparentborder'); //glossshadow //solidborder
	$('#leftmenutogglebutton p').css('color','#fff');
	$('#leftmenu').addClass('bgcolor threeborders opacity boxshadow');
	$('#pane').addClass('glossshadow slimmerborder');
	$('#pane').css('background-color','#bbb');
	$('#pane a').css('color','#000');
	$('#top').addClass('/*bgcolor fourborders borderradius opacity boxshadow*/ glossshadow slimmerborder');
	$('#topleft').addClass('bgcolor jusgloss glossshadow transparentborder '); //regularshadow /*glossshadow  threeborders  transparentborder'*/
	$('#topleft').css('background-color','#333');
	$('#topleft a').css('color','#fff');
	$('#topleft p').css('color','#fff');
	$('#fbstats').css('background-color','#fff');
	$('#fbstats').addClass('lightshadow hovershadow');
	$('#searchdiv').addClass('bgcolor borderradius');
	$('#vidsearchdiv').addClass('bgcolor borderradius');
	$('#footer').css('background-color','#fff');
	$('#footer').addClass('lightshadow footerfont');
	$('#middle').addClass('/*bgcolor fourborders*/ borderradius opacity boxshadow');
	$('#middle').css('background-color','#fff');
	$('#middle').addClass('darkinsetshadow');
	$('#full').css('background-color','#555');
	$('#full').addClass('deepglossshadow');//deepestshadow
	$('#bodyid1').css('background-color','#fff');
}

var classictemplate = function()
{
	setcommon();
	$('#pane').css('background-color','#F0F0F0');    
	$('#fbstats').css('background-color','#FAFAFA');
	$('#leftmenu').css('background-color','#FFFFFF');
	$('#leftmenu').addClass('gitshadow');
	$('#middle').css('background-color','#FAFAFA');
	$('#topleft').css('background-color','#FAFAFA');
	$('#leftmenutogglebutton').css('background-color','#FAFAFA');
	$('#leftmenutogglebutton').addClass('gitshadow');
	$('#footer').css('background-color','#FFFFFF');
	$('#footer').addClass('lightershadow');
	$('#full').css('background-color','#fdfdfd');
	$('#full').addClass('lightshadow');//deepestshadow	
}

var  shadowtemplate = function()
{
	setcommon();
	$('#pane').addClass('lightershadow aquagradient'); 
	$('#footer').addClass('lightershadow silvergradient');
	$('#fbstats').addClass('lightershadow silvergradient');
	$('#middle').addClass('lightershadow borderradius');
	$('#middle').css('background-color','#fff');
	$('#leftmenutogglebutton').css('border-radius','8px');	
	$('#leftmenutogglebutton').addClass('silvergradient lightershadow');
	$('#leftmenu').addClass('lightershadow');
    $('#full').css('background-color','#fdfdfd');
    $('#full').addClass('lightshadow');//deepestshadow	
	$('#pane').hover(
		function() {$('#pane').removeClass('aquagradient'); $('#pane').addClass('bluegradient'); }, 
		function() {$('#pane').removeClass('bluegradient'); $('#pane').addClass('aquagradient'); });	
}


var mixtemplate = function(){
            setcommon(); 
            //$('#bodyid1').css('background','#F5F6F7');
			$('#bodyid1').css('background','#Fff');
            $('#pane').css('background','#FFFFFF');
			//$('#headpanel').addClass('gitshadow');
			$('#headpanel').addClass('lightshadow');
			$('#headpanel').css('opacity','0.5');
			//$('#googlesite').addClass('gitshadow');
			//$('#fbframe').addClass('gitshadow');
            $('#pane').addClass('gitshadow appleborderradius');
            $('#fbstats').css('background-color','#FFFFFF');
            $('#leftmenu').css('background-color','#FFFFFF');
            $('#middle').css('background-color','#FFFFFF'); 
            $('#middle').addClass('gitshadow borderradius');
            $('#leftmenutogglebutton').css('background-color','#393A3B');
            $('#leftmenutogglebutton').css('border-radius','4px');	
            $('#leftmenutogglebutton').addClass('jusgloss regularshadow  transparentborder'); //glossshadow //solidborder
            $('#leftmenutogglebutton p').css('color','#fff');
            $('#leftmenu').addClass('bgcolor threeborders opacity boxshadow'); 
            $('#footer').addClass('gitshadow footerfont');
           // $('#full').css('background-color','#FfFfFf');
           // $('#full').addClass('lightshadow');//deepestshadow	
		   // $('#full').css('opacity','0.2'); 

}

var newtemplate = function(){

            setcommon(); 
			//alert(localStorage.bg);
			//localStorage.bg = "ASDASKSKSK";
			//alert(localStorage.bg);
			
	
            //$('#bodyid1').css('background','#F5F6F7');
			//$('#bodyid1').css('background','#fff5ff');
           
		   // $('#googlesite').addClass('gitshadow');
		   // $('#fbframe').addClass('gitshadow');
		   // $('#pane').css('background','#FFFFFF');
           // $('#pane').addClass('gitshadow appleborderradius');
			// $('#pane').addClass('gitshadow transparentborder');
			$('#pane').addClass('transparentborder ytubeshadow');
            $('#fbstats').css('background-color','#FFFFFF');
           
            $('#middle').css('background-color','#FFFFFF'); 
            // $('#middle').addClass('gitshadow appleborderradius');
			// $('#middle').addClass('middleshadow');
			$('#middle').addClass('ytubeshadow');
			var csstxt = $('#leftmenutogglebutton').css('cssText') + ';background-color:#393A3B;border-radius:4px;color:#fff;';
			$('#leftmenutogglebutton').css('cssText', csstxt);
			
			/*
			var el = document.getElementById('mydiv');
			el.className = 'gitshadow';
			*/
			
			//$('#leftmenutogglebutton').css('background-color','#393A3B');
            //$('#leftmenutogglebutton').css('border-radius','4px');	
			//$('#leftmenutogglebutton p').css('color','#fff');
			// $('#leftmenutogglebutton').addClass('jusgloss regularshadow3 transparentborder'); //glossshadow //solidborder
			$('#leftmenutogglebutton').addClass('jusgloss regularshadow1 transparentborder'); 
			//$('#leftmenutogglebutton').addClass('transformStyle');

			// $('#leftmenu').addClass('bgcolor transparentborder opacity leftmenuborders regularshadow3'); 
			// $('#leftmenu').css('background-color','#FFFFFF');
			//$('#leftmenu').addClass('ytubeshadow');
			//$('#leftmenu').addClass('transformStyle2');
			//$('#leftmenu').css('border-radius','4px');	
			//$('#footer').addClass('gitshadow footerfont');
			//$('#footer2').addClass('ytubeshadow');
            //$('#full').css('background-color','#FfFfFf');
            //$('#full').addClass('lightshadow');//deepestshadow	
		    //$('#full').css('opacity','0.8'); 
			//$('#top').css('display','block'); 
			//$('#top').addClass('gitshadow appleborderradius');
			//$('#headpanel').addClass('gitshadow new_blue_gradient_bg');
			$('#headpanel').css('opacity','0.9');
			$('#headpanel').css('background-color','#393A3B');
            $('#headpanel').addClass('jusgloss regularshadow3 transparentborder'); //glossshadow //solidborder
           // $('#headpanel a').css('color','#fff');			
			$('#leftmenu').addClass('leftmenustyle');
			
			
			$('#homeimagelink').addClass('panereflectBelow');
			$('#headerplate').css('background-color','#393A3B');
			$('#headerplate').css('background-color','#fff');
			
            //$('#headerplate').css('border-radius','2px');	
            //$('#headerplate').addClass('jusgloss gitshadow transparentborder');
		
			if(localStorage.bg) {
				//var bg = localStorage.getItem("bg");
				document.getElementById("bodyid1").style.backgroundImage = localStorage.bg; 
				document.getElementById("bodyid1").style.width="100%"; 
				document.getElementById("bodyid1").style.height="100%"; 
				document.getElementById("bodyid1").style.backgroundAttachment="fixed";
			
			}
}

var setcommon=function(){	
            //$('#headpanel').css('margin','-24px 0 0 -5px');
			//$('#headpanel').css('padding','4px');
			//$('#headpanel').css('top','0px');
			//$('#headpanel').css('left','0px');
           // $('#pane').css('margin','40px 0 0 150px');
           // $('#pane').css('width','73.3%');
           // $('#pane').css('padding-top','30px');
            //$('#middle').css('margin','10px 0px 0px 268px');
            
			//$('#middle').css('margin','10px 0px 0px 150px');
            //$('#middle').css('width','73.3%'); //50%
}

var BannerBehaviour = function() { 
	$("#dlogo1").hover(function() {
		$('#logo1').attr("src","http://chetanankola.com/homepage/images/logo2.png");
			}, function() {
		$('#logo1').attr("src","http://chetanankola.com/homepage/images/logo1.png");
	});
	
	$("#dlogo2").hover(function() {
		$('#logo2').attr("src","http://chetanankola.com/homepage/images/logo3.png");
			}, function() {
		$('#logo2').attr("src","http://chetanankola.com/homepage/images/logo2.png");
	});
	
	$("#dlogo3").hover(function() {
		$('#logo3').attr("src","http://chetanankola.com/homepage/images/logo2.png");
			}, function() {
		$('#logo3').attr("src","http://chetanankola.com/homepage/images/logo3.png");
	});
	$("#dlogo4").hover(function() {
		$('#logo4').attr("src","http://chetanankola.com/homepage/images/logo2.png");
			}, function() {
		$('#logo4').attr("src","http://chetanankola.com/homepage/images/logo1.png");
	});
}

var LinkHighlightBehaviour = function() {
/*	$('#leftmenu a').click(
	function(e){
		e.preventDefault; // prevent default behaviour which is to navigate..
		$('.highlight2').removeClass('highlight2');
		$(this).addClass('highlight2');
	});
*/
/* //this will retain only mark on links.
$('#leftmenu li a').click(
	function(e){
		e.preventDefault; // prevent default behaviour which is to navigate..
		$('.highlight2').removeClass('highlight2');
		$(this).addClass('highlight2');
	});
*/
	$('#leftmenu li').click(
		function(e){
			e.preventDefault; // prevent default behaviour which is to navigate..
			$('.highlight2').removeClass('highlight2');
			$('.highlight3').removeClass('highlight3');
			$(this).addClass('highlight2');
		});
	/*$('#pane ul li').click(
		function(e){
		 e.preventDefault; // prevent default behaviour which is to navigate..
		 $('.highlight2').removeClass('highlight2');
		 $('.highlight3').removeClass('highlight3');
		 $(this).addClass('highlight3');
		});
	*/
}





$(document).ready(function(){    


	//$('#leftmenutogglebutton').addClass('regularshadow3');	
	newtemplate();
	/*$('#top').fadeIn('fast');
	$('#leftmenutogglebutton').fadeIn('fast');
	$('#pane').fadeIn('fast');
	*/

	

	$('#leftmenutogglebutton').click(function(){ 
	/*	if( $('#leftmenutogglebutton').is('.regularshadow1') ) {
			$('#leftmenutogglebutton').removeClass('regularshadow1');	
			$('#leftmenutogglebutton').addClass('regularshadow2');		
		} else {
			$('#leftmenutogglebutton').removeClass('regularshadow2');	
			$('#leftmenutogglebutton').addClass('regularshadow1');		
		}
	*/	
	/*
		if( $('#leftmenutogglebutton').is('.regularshadow3') ) {
			$('#leftmenutogglebutton').removeClass('regularshadow3');	
			$('#leftmenutogglebutton').addClass('regularshadow1');		
		} else {
			$('#leftmenutogglebutton').removeClass('regularshadow1');	
			$('#leftmenutogglebutton').addClass('regularshadow3');		
		}
	*/
	
		if( $('#leftmenutogglebutton').is('.regularshadow3') ) {
			$('#leftmenutogglebutton').removeClass('regularshadow3');	
			$('#leftmenutogglebutton').addClass('regularshadow1');	
			$("#leftmenutogglebutton").html("<ul><li><a href=# align='center'>Hide Menu</a></li> </ul>");
		} else {
			$('#leftmenutogglebutton').removeClass('regularshadow1');	
			$('#leftmenutogglebutton').addClass('regularshadow3');		
			$("#leftmenutogglebutton").html("<ul><li><a href=# align='center'>Show Menu</a></li> </ul>");
		}
	
	
		$('#leftmenu').slideToggle();	
	});
	
/*	$('#leftmenutogglebutton').hover(function() {
		if( $('#leftmenutogglebutton').is('.regularshadow3') ) {
			$('#leftmenutogglebutton').removeClass('regularshadow3');	
			$('#leftmenutogglebutton').addClass('regularshadow1');		
		}
	}, function() {	
		if( $('#leftmenutogglebutton').is('.regularshadow3') ) {
			$('#leftmenutogglebutton').removeClass('regularshadow3');	
			$('#leftmenutogglebutton').addClass('regularshadow1');		
		}	
	});
*/
	//animatebanner(); //setTimeout(animatebanner, 2000);  dont uncomment this... all wrong  

/*
	$("#emptyleftcontainer").hover(function() {		
//	$('#leftmenutogglebutton').removeClass('regularshadow');
//	$('#leftmenutogglebutton').addClass('regularshadow2');
	//$('#leftmenutogglebutton').hide();
	//$('#leftmenu').show();
	//$('#leftmenu').slideDown();  
	$('#leftmenu').slideToggle();
	}, function() {		
		//$('#leftmenu').hide();
	    //$('#leftmenutogglebutton').show();
		$('#leftmenu').slideToggle();
	});
*/    
	LinkHighlightBehaviour();
	$("<input type='button' value='+' id='plus' /><br/>").hide().appendTo("#inblurscreen");
	$("<input type='button' value='-' id='minus' /><br/>").hide().appendTo("#inblurscreen");
	$("<input type='button' value='reset' id='resetmid' /><br/>").hide().appendTo("#inblurscreen");    
	$("<input type='button' size=30 value='X' id='close' /><br/>").hide().appendTo("#inblurscreen");    
	$('#close').click(function(){ 
		/*$('#middle').hide();*/
		$('#blurscreen').css('opacity','0');
		$('#blurscreen').css('z-index','-10000');
		$('#middle').hide();
		$('#yframe').remove();
		removeytuberesultdiv();
		$('#ysearch').removeClass('bigtextbox');
	});
	BannerBehaviour();	

	$('#musiclink').click().fadeIn('slow');
	/*$('#leftmenu').slideToggle();*/ 
	
	
	/*
	$('.bannerinit span').hover(function() {
		$('.bannerinit span').addClass('straightenletters');
	}, function() {	
		$('.bannerinit span').removeClass('straightenletters');	
	});
	*/
		$(window).scroll(function() {
			var y = $(this).scrollTop();
			if(y>220) {			
				//$('#leftmenu').addClass('leftmenushadow2');		
								$('#leftmenu').css({
									position:'inherit',
									position:'fixed',
									top:'20px'
								   });
				 
			}else {
				$('#leftmenu').css({
									position:'absolute',
									top:'30%'
													
								   });
				//$('#leftmenu').removeClass('leftmenushadow2');
				

				}
		});	

});    