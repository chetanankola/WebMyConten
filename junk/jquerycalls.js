var middlewidth = 500;


/*This file has more generic JS calls*/

/* Javascript to change background image using random function:
   add more images to backImage array to randomize better */
var backImage = new Array();
var randindex; // = Math.floor(Math.random() * backImage.length);
function changeBackgroundImage()
{ 
            randindex = Math.floor(Math.random() * backImage.length);
            var ind=0;		
           // backImage[ind++] = "url(/homepage/images/signs.jpg)";
            backImage[ind++] = "url(/homepage/images/clouds.jpg)";
           // backImage[ind++] = "url(/homepage/images/guitar.jpg)";
            backImage[ind++] = "url(/homepage/images/bg4.jpg)";
              backImage[ind++] = "url(/homepage/images/rain.jpg)";	
           // backImage[ind++] = "url(/homepage/images/clouds.jpg)";		
          // backImage[ind++] = "url(/homepage/images/strings.jpg)";
            backImage[ind++] = "url(/homepage/images/light_folds.jpg)";
 
        //    backImage[ind++] = "url(/homepage/images/mountain.jpg)";		
           // backImage[ind++] = "url(/homepage/images/strings2.jpg)";
          //  backImage[ind++] = "url(/homepage/images/clouds.jpg)";
            backImage[ind++] = "url(/homepage/images/lilboys.jpg)";
             //  backImage[ind++] = "url(/homepage/images/drop.png)";
            //backImage[ind++] = "url(/homepage/images/road.jpg)";
           // backImage[ind++] = "url(/homepage/images/cartoon.jpg)";
          //  backImage[ind++] = "url(/homepage/images/clouds4.jpg)";

            /*
            backImage[ind++] = "url(/homepage/images/clouds5.jpg)";
            backImage[ind++] = "url(/homepage/images/animatrix.jpg)";
            backImage[ind++] = "url(/homepage/images/clouds3.jpg)"; 
            backImage[ind++] = "url(/homepage/images/snow.jpg)"; 
            backImage[ind++] = "url(/homepage/images/darkforest.jpg)";
            backImage[ind++] = "url(/homepage/images/bg.jpg)";
            backImage[ind++] = "url(/homepage/images/guitar2.jpg)";
            backImage[ind++] = "url(/homepage/images/guitar3.jpg)";
            backImage[ind++] = "url(/homepage/images/bottlespray.jpg)";
            backImage[ind++] = "url(/homepage/images/leaf.jpg)";
            backImage[ind++] = "url(/homepage/images/darkclouds.jpg)";
            */
            
            document.getElementById("bodyid1").style.backgroundImage = backImage[randindex]; 		
            var imagename= backImage[randindex];
            var imagelink = imagename.split("/");
            var finalimagelink = imagelink[3].split(")");
              displaymsg('background changed to '+finalimagelink[0]);
            document.links["downloadimglink"].href ="http://chetanankola.com/homepage/images/"+finalimagelink[0];
              
} 
	
function loadbackground() //called from rightpanel.php
{	
  /* var background="light_folds.jpg"; //clouds, mountain, signs, 
   document.getElementById("bodyid1").style.backgroundImage = "url(/homepage/images/"+background+")";
   */
 
       // document.links["downloadimglink"].href ="http://chetanankola.com/homepage/images/"+background;
}


function moveblockdivright(){$(".block").animate({ marginLeft: "+=50px"}, 5 );}
function moveblockdivleft(){$(".block").animate({ marginLeft: "-=50px"}, 5);}
function moveblockdivtop(){$(".block").animate({ marginTop: "-=70px" }, 5 );}
function moveblockdivdown(){$(".block").animate({ marginTop: "+=50px"}, 5);}
function randomizemotion()
{
    randindex = Math.floor(Math.random() * 4);
    switch(randindex)
    {
       case 0: moveblockdivdown();break;
       case 1: moveblockdivtop();break;
       case 2: moveblockdivleft();break;
       case 3: moveblockdivright();break; 
    }
}

function clearmiddle2() //needed for game
{
	document.getElementById("middle2").style.display = "none";
}

function toggle_navshow(){     $('#left').fadeIn('slow');   }
function toggle_navhide(){      $('#left').fadeOut('slow'); }

seeme=1;
function toggleprofilepic(){
     var abc = new Array();
     abc[0]="/homepage/images/down.gif";
     abc[1]="/homepage/images/up.jpg";
     $('#profilepic').toggle('slow', function() {
     });  
     $('#imgarrow').attr("src",abc[seeme]);
     $('#captionprofilepic').toggle('slow', function() {});
     if(seeme==1)seeme=0;
     else seeme=1;
}

function loadclickirri() {
document.getElementById("middle").style.display = "none";
 $("#middle2").load("../html/clickirri.html");
// document.getElementById("middle").style.display = "block";

}
  
var timeforsearchboxtoappear = 'slow';
var searchposition = '#pane'; //can be html or #left or #pane
var searchboxsize = 50;
function loadsearchdiv()
{
//$("<div id='searchdiv' style='width:i; height:inherit;'>   <input  id='search' size = 10 type='textbox' onKeyUp='clearpics();blahblah();' onKeyDown='clearpics();blahblah();' /> <br><p style='padding:0px;font-size:12px; display:inline;'>Search photos</p><div id='internalnext' style='display:none;'><a href='#here'  onclick='blahblah();'> next</a><br> </div></div>").hide().appendTo("#pane").fadeIn(timeforsearchboxtoappear);   
$("<div id='searchdiv'><input id='search' size = "+searchboxsize+" type='textbox' onKeyUp='nextresults();clearpics();blahblah();' /> <p style='padding:0px;font-size:12px; display:inline;'>Search photos</p><div id='internalnext' style='display:none;'><a href='#here'  onclick='nextresults();blahblah();'> next</a><br> </div></div>").hide().appendTo(searchposition).fadeIn(timeforsearchboxtoappear);   
}		
function addvidsearchdiv()
{
$("<div id='vidsearchdiv'><input id='ysearch' type='textbox' size = "+searchboxsize+" value='' onKeyUp='clearvideo();loadvideo();' /> <p style='padding:0px;font-size:12px; display:inline;'>Search video</p></div>").hide().appendTo(searchposition).fadeIn(timeforsearchboxtoappear);
}


/*YTUBE RESULTS ... */
var totalnumofytuberesults=4;
function addytuberesultdiv()
{
     removeytuberesultdiv();
     $("<div id='rightpane'></div>").hide().appendTo('html').fadeIn(1000);
}

function removeytuberesultdiv()
{ 
	for (i=0;i<totalnumofytuberesults;i++)
	{
	    var vframe= '#ytuberes'+i;
		//alert(vframe);
		$(vframe).remove();
	}
	$('#rightpane').remove();
}


//called when you call loadpage() will remove any divs that have been dynamically added
function cleardynamicdivs()
{
     $('#vidsearchdiv').remove();
     $('#searchdiv').remove();
     removeytuberesultdiv(); //do this only if loaded...else unncessary a call.
     $('#yframe').remove();
}

function clearmiddleifpicsearchempty() //when you click on a link this happens.
{
          if($('#search').val()=='')
          {
                      //alert($('#search'));
                      $('#middle').hide();
                      $('#internalnext').hide();
                      $('#shownext').hide();
                      $('#photos').hide();          
          }
}
function clearmiddledivforvideo()
{
        $('#middle').hide();
}

function clearotherdivsonloadpage()
{
	$('#photos').hide();  //this div is in photos.html
}

/***LOADPAGE FUNCTION!! ******************/
function loadpage(page,num) 
{
     if(num==2){ cleardynamicdivs(); addvidsearchdiv(); $("#middle").load(page);  clearmiddledivforvideo(); } //if videosearch 
     if(num==1){ cleardynamicdivs(); loadsearchdiv();   $("#middle").load(page);  clearmiddleifpicsearchempty(); }  //if photosearch
     if(num==0){ cleardynamicdivs();                    $("#middle").load(page);  clearotherdivsonloadpage();    $("#middle").fadeIn('slow');} 
     $(".block").hide();   
}



function detacheverything(){


	//document.getElementById("middle").innerHTML = "<h1> You can move around blocks now.. </h1>";
	//document.getElementById("detach").innerHTML = "Detach enabled";
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
		node: '#left'
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

function restoremiddlewidth()
{
     $('#middle').width(middlewidth);
}

function clearmsgboard()
{
        $("#msgboard").fadeOut(5000);
        
}
    
function displaymsg(msg)
{
   $('#msgboard').remove();
   $("<div id='msgboard'> </div>").hide().appendTo("html").show();
   $("#msgboard").html('<p>'+msg+'</p>');
   setTimeout("clearmsgboard()",2000);
}
    
	
//$('#left').animate({ marginLeft: "+=220px"}, 1000 );
//$('#left').animate({ marginLeft: "-=220px"}, 1000 );

function animatebanner()
{

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

$(document).ready(function(){

$('#pane').css('marginTop','-40px');
$('#pane').animate({ marginTop: "+40px"}, 600 );



//ANIMATE BANNER
//animatebanner();



var alreadyover = 0;
	$("#emptyleftcontainer").hover(function() {
		$('#left').fadeIn();
		$('#leftleft').hide();
			}, function() {
		$('#left').hide();
		$('#leftleft').fadeIn();
	});

     
	 
/********************************************************ADD STYLE *************************************************************************/ 
     $('#leftleft').css('background-color','#393A3B');
     $('#leftleft').css('border-radius','4px');	
     $('#leftleft').addClass('jusgloss regularshadow  transparentborder'); //glossshadow //solidborder
     $('#leftleft p').css('color','#fff');
     
     
     $('#left').addClass('bgcolor threeborders opacity boxshadow');
     $('#top').addClass('bgcolor fourborders borderradius opacity boxshadow');
     $('#middle').addClass('bgcolor fourborders borderradius opacity boxshadow');
     //$('#pane').addClass(/*'bgcolor fourborders borderradius opacity boxshadow'*/);
     $('#pane').addClass('jusgloss glossshadow slimmerborder');
     $('#topleft').addClass('bgcolor jusgloss glossshadow transparentborder '); //regularshadow /*glossshadow  threeborders  transparentborder'*/
     $('#topleft').css('background-color','#333');
     
     
     $('#fbstats').css('background-color','#fff');
     $('#fbstats').addClass('lightshadow hovershadow');
     $('#searchdiv').addClass('bgcolor borderradius');
     $('#vidsearchdiv').addClass('bgcolor borderradius');
     
     $('#footer').css('background-color','#fff');
     $('#footer').addClass('lightshadow footerfont');
     
     
     $('#full').css('background-color','#555');
     $('#bodyid1').css('background-color','#eee');
     $('#full').addClass('deepshadow jusgloss');


 /*    $('#logo1').addClass('reflectBelow');
     $('#logo2').addClass('reflectBelow');
     $('#logo3').addClass('reflectBelow');
     $('#logo4').addClass('reflectBelow');*/
    // $('#bodyid1').addClass('gradient');
    // $('#topleft').addClass('reflectBelow');
    // $('#fbstats').addClass('reflectBelow');
   //$('#pane').addClass('chamak');
   //$('#middle').addClass('chamak');



/**************************************************************************************************************************************/











     $('a').click(
     function(e){
         e.preventDefault; // prevent default behaviour which is to navigate..
         $('.highlight').removeClass('highlight');
         $(this).addClass('highlight');
		 
		 	$("#plus").hide();
			$("#minus").hide();
			$("#resetmid").hide();
			$("#close").hide();	
	$('#middle').css('margin','20px 600px 20px 190px');
    $('#middle').width(500); $('#middle').css('height','inherit');

     });
     /*          $('a').hover(
               function(e){
                   e.preventDefault; // don't follow the link
                   $('.highlight').removeClass('highlight');
                   $(this).addClass('highlight')
               });
     */
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

/*for clickrr*/
    $("#r").mouseover
    (
        function()
        {        
            randomizemotion(); 
        }	
    );
     $("#r").mouseout
    (
        function()
        {        
            randomizemotion();
        }
    );
    $("#r").click
    (
        function()
        {
         // displaymsg('<h1>OK YOU WIN MEH!!!!!<h1>'); DID NOT WORK..
          document.getElementById("middle2").style.display = "block";   
           $("#msg").html("OK YOU WIN MEH!!!!!");
		   setTimeout("clearmiddle2()",2000); 
        }
    );

    




YUI().use('dd-drag', function(Y) {
		//Selector of the node to make draggable
		var dd = new Y.DD.Drag({
		node: '#inblurscreen'
		});


                
	});       





	 
	 
$("<input type='button' value='+' id='plus' /><br/>").hide().appendTo("#inblurscreen");
$("<input type='button' value='-' id='minus' /><br/>").hide().appendTo("#inblurscreen");
$("<input type='button' value='reset' id='resetmid' /><br/>").hide().appendTo("#inblurscreen");    
$("<input type='button' size=30 value='X' id='close' /><br/>").hide().appendTo("#inblurscreen");    
 	    

$('#close').click(function(){ /*$('#middle').hide();*/
			$('#blurscreen').css('opacity','0');
			$('#blurscreen').css('z-index','-10000');
			$('#middle').hide();
			$('#yframe').remove();
                        removeytuberesultdiv();
                        $('#ysearch').removeClass('bigtextbox');

});
    
});    