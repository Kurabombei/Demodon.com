var answers=[];

var R=[];

	var game=["The_Big_Bang_Theory", "Arrow", "Flash", "Walking_Dead", "Games_Of_The_Thrones", "Legends_Of_Tomorrow", "Daredevil", "Agents_SHIELD", "Agent_Carter", "Supergirl", "Smallville", "Scream", "Lucifer", "Street_Finghter", "Mortal_Kombat", "Supernatural", "House", "Breaking_Bad", "Brooklyn", "Da_Vinci`s_Demons", "Superpowers", "Constantine", "Sherlock", "Akame_Ga_Kill", "Guity_Crown", "Norgami", "Tokyo_Ghoul", "RE"]
	var games=[[1,1,2,2,3,2,3,2,1,2,1,2,1,2,3], [2,3,1,1,1,3,1,1,3,2,1,2,2,3,2], [2,2,2,1,2,3,2,1,2,2,1,1,2,2,2], [2,3,1,2,3,3,1,1,3,3,1,2,2,3,2], [1,3,1,1,3,3,2,1,1,2,1,2,2,2,1], [1,1,2,1,2,2,1,1,1,3,2,1,1,3,3], [2,2,1,1,1,2,1,1,2,2,1,2,2,1,1], [2,2,2,2,2,3,1,1,1,2,1,1,2,2,2], [1,2,2,1,3,2,1,2,3,3,1,2,1,2], [1,1,2,1,2,1,2,1,1,1,2,1,2,1,1], [2,1,2,1,2,3,1,1,3,1,2,1,1,1,1], [1,3,2,1,1,3,2,1,3,1,1,2,2,2,1], [1,2,1,1,3,2,2,1,2,2,2,2,1,1,1], [2,3,2,1,1,2,1,1,2,3,1,1,1,2,3], [1,3,1,1,1,2,2,1,1,1,2,1,2,2,1], [2,1,1,2,2,2,1,2,2,1,1,1,1,2,3], [1,2,2,2,1,2,2,1,2,2,1,1,1,2], [1,1,1,1,3,2,1,2,3,1,2,2,1,1,3], [1,1,2,2,2,2,2,2,1,2,2,1,2,2,1], [2,1,1,1,1,2,1,2,2,1,2,1,1,2,3], [2,1,2,1,2,1,2,1,1,2,2,1,2,2,3], [2,1,2,1,2,3,1,2,1,2,1,1,1,2,1], [2,2,1,1,2,2,2,2,1,1,2,2,1,1,2], [2,3,2,1,1,1,1,1,2,3,3,2,1,2,2], [1,1,1,1,2,1,2,1,2,1,2,1,1,2,2], [1,1,2,1,1,1,1,1,2,1,2,2,1,1,3], [2,2,1,1,2,1,1,1,2,1,2,1,2,1,2], [2,3,1,1,3,1,1,1,2,2,2,1,2,2,3]]
	var counter=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	
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
				$("#" + game[i]).show();
				
		}
	}					
}