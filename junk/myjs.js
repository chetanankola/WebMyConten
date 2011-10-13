
/*NOT USED ANYMORE*/




/* Javascript to change background image using random function:
   add more images to backImage array to randomize better */
    var backImage = new Array();
    var randindex; // = Math.floor(Math.random() * backImage.length);
    function changeBackgroundImage()
    { 
		randindex = Math.floor(Math.random() * backImage.length);
		var ind=0;		
		backImage[ind++] = "url(/homepage/images/signs.jpg)";
		backImage[ind++] = "url(/homepage/images/clouds.jpg)";
		backImage[ind++] = "url(/homepage/images/guitar.jpg)";
		backImage[ind++] = "url(/homepage/images/bg4.jpg)";	
		backImage[ind++] = "url(/homepage/images/clouds.jpg)";		
		backImage[ind++] = "url(/homepage/images/strings.jpg)";
		backImage[ind++] = "url(/homepage/images/light_folds.jpg)";
		backImage[ind++] = "url(/homepage/images/mountain.jpg)";		
		backImage[ind++] = "url(/homepage/images/strings2.jpg)";
		backImage[ind++] = "url(/homepage/images/clouds.jpg)";
		backImage[ind++] = "url(/homepage/images/lilboys.jpg)";		
		backImage[ind++] = "url(/homepage/images/road.jpg)";
	    backImage[ind++] = "url(/homepage/images/clouds4.jpg)";

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
		document.links["downloadimglink"].href ="http://chetanankola.com/homepage/images/"+finalimagelink[0];
    } 
	
	function loadbackground() //called from rightpanel.php
	{	
		var background="cartoon.jpg"; //clouds, mountain, signs, 
	    document.getElementById("bodyid1").style.backgroundImage = "url(/homepage/images/"+background+")"; 		
		document.links["downloadimglink"].href ="http://chetanankola.com/homepage/images/"+background;
	}