	$(document).ready(function(){
		document.getElementById('b-google').style.display="none";
				// Hide the div
	          $("#inlinePopUp").hide();
	          // Show the div after 1s
	          $("#inlinePopUp").delay(1000).fadeIn(100)
	          $('#pageflip').css('opacity','0.2');       
	          		
           
	          $("#inlinePopUp #btnAccpt").click(function() {	          	  
	          		jQuery("#inlinePopUp").hide();
	          		jQuery('#pageflip').css('opacity','1');
	          });
			     
					
	         $('.close').click(function(){
					  	$("#inlinePopUp").hide();
					    $("#closePopUp").fadeIn(100);	 	   
			  });
			  
				  $('.closeBtn').click(function(){
				  	$("#closePopUp").fadeOut(100, function(){
						$("#inlinePopUp").fadeIn(100);
					});
			  });

				  	$("#testBtn").click(function(){																								
				    var inner = $(this).next('.ansshow');
				    var display = inner.css('display');
				    inner.css('display', (display === 'none') ? 'block' : 'none');
					});	
			    
	});


	/*var MyScore = getCookie('MyScore');			
				if ( MyScore > 0 ){
				 	document.getElementById("score").innerHTML=MyScore;
					score = parseInt(MyScore);
				}else{
					score = 0;
			}*/
			

			// My js
			
			