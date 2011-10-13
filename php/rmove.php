<?php include('headtemplate.php'); ?>
        
<!-- DISPLAY MESSAGE IN THE MIDDLE : Initially display:none -->
        <div id="middle2" style='display:none;'>
            <div id="msg"> </div>
        </div>
 <!-- MIDDLE TEST BOX -->        
        <div id="middle">
            <h1>BOUNCY BUTTON</h1>  <a href="">restart-game</a>   |  <a href=# onclick="showystuff(1);">home</a>            
        </div>
<!-- BOUNCY BUTTON DIV -->        
       <div class="block"> <button id="r">Clickme</button></div> 
		
			
<?php include('foottemplate.php'); ?>

        
<script type="text/javascript">
function showystuff(show)
{
    $('#top').show();
     $('#right2').show();
     // $('#middle2').show();
       $('#left').show();
        $('#pane').show();
		$('#yleft').show();
    
}

function hide(hide)
{
    $('#top').hide();
     $('#right2').hide();
      $('#middle2').hide();
       $('#left').hide();
        $('#pane').hide();
		$('#yleft').hide();
}
$(document).ready(function(){
    $('#top').hide();
     $('#right2').hide();
      $('#middle2').hide();
       $('#left').hide();
        $('#pane').hide();
		$('#yleft').hide();
});
</script>