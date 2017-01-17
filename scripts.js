
	/*This function will provide random colors using hash codes, which will be utilized further
	below when we call the getRandomColor() function */
	function getRandomColor() {			//.split function converts strings to arrays using ' '
		var	 letters = '0123456789ABCDEF'.split('');
		var color = '#';
		for (var i = 0; i < 6; i++ ) {
			color += letters[Math.round(Math.random() * 15 )];
		}
		return color;
	}
	
	var clickedTime; var createdTime; var reactionTime;

function makeBox() 
{
	
		var time=Math.random();
	
		time=time*5000;
		//sets random timeout between 1-5 seconds
	
	setTimeout(function() 
	{
		//creates the Timeout function
		
			if (Math.random() > 0.5) {		
				document.getElementById("box").style.borderRadius="50%";
				/*Uses the Math.random function in an if statement to 
				set the object to occasionally be a circle */
			}
			else {			
				document.getElementById("box").style.borderRadius="0";
			}
			
			var top = Math.random();
			/*This will provide random positions for the circles and boxes*/
			top = top * 300;
			
			var left = Math.random();
			
			left = left* 500;
			
			document.getElementById("box").style.top = top + "px";
			
			document.getElementById("box").style.left = left + "px";
		
			document.getElementById("box").style.backgroundColor=getRandomColor();
			//random background colors will be provided using the getRandomColor() function//
	
			document.getElementById("box").style.display="block"; //This will display the CSS element
			
				createdTime=Date.now();
			
		}, time);
		//timeOut var time goes here
	
}	
	
		document.getElementById("box").onclick=function() {
				
			clickedTime=Date.now();
			
			reactionTime=(clickedTime-createdTime)/1000; //Clicked time will always be greater than created time
			
			document.getElementById("time").innerHTML=(reactionTime);
			//Provide ouput for reaction time via var reactionTime and 'time' id
			
			this.style.display="none";//can use 'this' instead of document.getElementById("box")//
			
			makeBox(); //makes the function makeBox
		
		}	
		
		makeBox(); //Used to call the makeBox function
