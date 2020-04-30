var answers=[];

var R=[];

var Pirates=new Object();
Pirates.f = function()
	{

	var audio=new Audio();
	audio.src="OST/OST.mp3";
		audio.autoplay=true;
		$("#Pirates_Of_Caribbean").css("display", "none");
	}

	var Star_Wars=new Object();
Star_Wars.f = function()
	{

	var audio=new Audio();
	audio.src="OST/OST2.mp3";
		audio.autoplay=true;
		$("#Star_Wars").css("display", "none");
	}
	var Alone=new Object();
Alone.f = function()
	{

	var audio=new Audio();
	audio.src="OST/OST3.mp3";
		audio.autoplay=true;
		$("#Home_Alone").css("display", "none");
	}
	var Suicide=new Object();
Suicide.f = function()
	{

	var audio=new Audio();
	audio.src="OST/OST4.mp3";
		audio.autoplay=true;
		$("#Suicide_Squad").css("display", "none");
	}
	var Deadpool=new Object();
Deadpool.f = function()
	{

	var audio=new Audio();
	audio.src="OST/Deadpool.mp3";
		audio.autoplay=true;
		$("#Deadpool").css("display", "none");
	}
	
	var game=["The_Shawshank_Redemption", "Finding_Nemo", "Walle", "Full_Metal_Jacket", "A_Beautiful_Mind", "Clockwork_Orange", "World_War_Z", "Pacific_Rim", "Fight_Club", "Inception", "Deadpool", "The_Fast_and_The_Furious", "jOBS", "Interstellar", "Star_Wars", "Central_Intelligence", "Alien", "Dredd", "The_Diamond_Arm", "Men_Behind_The_Sun", "Terminator", "The_Hateful_Eight", "Inglourious_Basterds", "Pirates_Of_Caribbean", "Home_Alone", "Suicide_Squad"]
	var games=[[6,1,2,2,3,1,3,1,1,2,2,3,2,2,2], [6,2,2,3,3,2,3,2,2,1,2,3,3,1,2], [6,2,2,3,3,2,1,1,2,3,3,2,2], [7,2,2,2,2,2,3,2,1,2,2,2,2,2,2], [7,1,1,2,2,1,3,1,1,2,2,3,2,2,2], [7,2,2,2,2,2,2,2,1,2,2,2,2,2,2], [3,1,2,3,3,1,3,2,2,1,2,2,2,2,2], [3,2,1,3,3,2,2,3,1,2,2,3,2,2], [7,1,1,3,2,1,3,1,1,2,2,1,2,2,2], [7,1,1,2,2,1,2,1,2,2,1,3,2,2,2], [4,2,1,3,3,2,2,3,2,3,1,1,2,3,1,2], [4,1,2,3,3,2,3,2,2,1,2,3,3,1,2], [6,2,2,3,3,2,3,1,2,1,2,3,2,2,2], [7,1,1,2,3,1,2,2,1,2,2,3,2,2,2], [4,2,1,3,3,2,2,1,1,2,1,3,2,2,2], [3,2,2,3,3,1,3,2,3,1,1,2,3,3,2,2], [1,2,1,1,2,1,2,2,2,2,2,2,2,2], [2,2,2,2,2,2,2,2,1,2,1,1,2,2], [1,1,2,2,2,1,3,1,2,1,2,2,1,1,2], [5,2,2,1,2,2,3,1,1,2,2,1,1,2,1], [3,1,1,1,2,2,2,1,2,2,2,2,1,2,2], [2,1,2,1,1,1,3,1,2,2,2,1,1,2,2], [6,1,2,2,1,1,3,1,2,2,2,1,1,2,2], [3,1,1,2,2,2,3,2,2,1,2,1,1,2], [1, 1, 2, 2, 2, 2, 3, 2, 2, 1, 2, 2, 1, 1, 2], [2,2,1,2,2,2,1,2,3,1,1,1,1,1,2]]	
	var counter=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	
function check()
	{
		var inp = document.getElementsByName('q1');
		for (var i = 0; i < inp.length; i++) {
			if (inp[i].type == "radio" && inp[i].checked) {
			   answers.push(i);
			}
		}	
		 inp = document.getElementsByName('q2');
		for (var i = 0; i < inp.length; i++) {
			if (inp[i].type == "radio" && inp[i].checked) {
			   answers.push(i);
			}
		}
			inp = document.getElementsByName('q3');
		for (var i = 0; i < inp.length; i++) {
			if (inp[i].type == "radio" && inp[i].checked) {
			   answers.push(i);
			}
		}
			inp = document.getElementsByName('q4');
		for (var i = 0; i < inp.length; i++) {
			if (inp[i].type == "radio" && inp[i].checked) {
			   answers.push(i);
			}
		}	
			inp = document.getElementsByName('q5');
		for (var i = 0; i < inp.length; i++) {
			if (inp[i].type == "radio" && inp[i].checked) {
			   answers.push(i);
			}
		}	
			inp = document.getElementsByName('q6');
		for (var i = 0; i < inp.length; i++) {
			if (inp[i].type == "radio" && inp[i].checked) {
			   answers.push(i);
			}
		}	
			inp = document.getElementsByName('q7');
		for (var i = 0; i < inp.length; i++) {
			if (inp[i].type == "radio" && inp[i].checked) {
			   answers.push(i);
			}
		}	
			inp = document.getElementsByName('q8');
		for (var i = 0; i < inp.length; i++) {
			if (inp[i].type == "radio" && inp[i].checked) {
			   answers.push(i);
			}
		}	
			inp = document.getElementsByName('q9');
		for (var i = 0; i < inp.length; i++) {
			if (inp[i].type == "radio" && inp[i].checked) {
			   answers.push(i);
			}
		}	
			inp = document.getElementsByName('q10');
		for (var i = 0; i < inp.length; i++) {
			if (inp[i].type == "radio" && inp[i].checked) {
			   answers.push(i);
			}
		}	
			inp = document.getElementsByName('q11');
		for (var i = 0; i < inp.length; i++) {
			if (inp[i].type == "radio" && inp[i].checked) {
			   answers.push(i);
			}
		}	
			inp = document.getElementsByName('q12');
		for (var i = 0; i < inp.length; i++) {
			if (inp[i].type == "radio" && inp[i].checked) {
			   answers.push(i);
			}
		}	
			inp = document.getElementsByName('q13');
		for (var i = 0; i < inp.length; i++) {
			if (inp[i].type == "radio" && inp[i].checked) {
			   answers.push(i);
			}
		}	
			inp = document.getElementsByName('q14');
		for (var i = 0; i < inp.length; i++) {
			if (inp[i].type == "radio" && inp[i].checked) {
			   answers.push(i);
			}
		}	
		inp = document.getElementsByName('q15');
		for (var i = 0; i < inp.length; i++) {
			if (inp[i].type == "radio" && inp[i].checked) {
			   answers.push(i);
			}
		}	
			
    }
	
		
function lol()
{
		check();
		
		for (var j=0; j<games.length; j++)
			{
			for (var i=0; i<answers.length; i++)
				{
					if(answers[i]==games[j][i])					
						counter[j]=counter[j]+1;
					
						
				}
			}	
					var max=counter[0];
				for(var j=0; j<counter.length; j++){
						if(counter[j]>max)
						
						max=counter[j];
													}
					for (var j=0; j<counter.length; j++){
				if(max!=0)	
					{	
						if(counter[j]==max)
							R.push(game[j]);
					}
														}
														
					if(max==0)
					{
					j=parseInt(Math.random()*(26-0)+0);
					R[j]=game[j];
					}					
				
				$("#container").hide();
				
			
					for(var j=0; j<R.length; j++)
	{
		for(var i=0; i<game.length; i++)
			{
				if(R[j]==game[i])
				$("#" + game[i] ).show();
				
		}
	}					
}