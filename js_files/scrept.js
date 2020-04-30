var answers=[];

var R=[];


	var game=["MetalGearSolid", "MetalGearSolid2", "MetalGearSolid3", "MetalGearSolid4", "MetalGearSolid_Peace_Walker", "MetalGearSolid_V_Ground_Zeroes", "MetalGearSolid_V_The_Phantom_Pain", "GTA_3", "GTA_IV", "GTA_V", "Call_Of_Duty_Modern_Warfare", "Call_Of_Duty_Modern_Warfare2", "Call_Of_Duty_Modern_Warfare3", "Call_Of_Duty_Black_Ops", "Call_Of_Duty_Black_Ops2", "Call_Of_Duty_Black_Ops3", "Assassins_Creed", "Assassins_Creed2", "Assassins_Creed_Brotherhood", "Assassins_Creed_Revelations", "Assassins_Creed_III", "CS_GO", "DOTA2", "PayDay2", "SniperElite_V2", "ZombieArmyTrilogy", "Wolfenstein", "Wolfenstein_TheNewOrder", "inFAMOUS_SecondSon", "SaintsRow4", "Bioshock_Infinite", "HotlineMaimi", "DeusEx_HumanRevolution", "DeusEx_MankindDivided", "Fallout2", "Fallout_NewVegas", "Fallout4", "Uncharted", "Uncharted2", "Uncharted3", "Uncharted4", "Portal2", "NoMansSky", "Outlast", "Minecraft", "DeadSpace", "DeadSpace2", "DeadSpace3", "MassEffect", "MassEffect2", "MassEffect3", "FarCry4", "TheElderScrolls_V_Skyrim", "TheWitcher", "TheWitcher2_AssasinsOfKings", "TheWitcher3_WildHunt", "FinalFantasy_XIII", "Warframe", "Arma3", "XCOM2", "MaxPayne3", "HeavyRain", "Bloodborne", "GearsOfWar", "Prototype2"]
	var games=[[1,2,1,1,1,2,1,2,2,1,2,2,2,1,1], [1,2,1,1,1,2,1,2,2,1,2,2,2,1,1], [1,2,1,2,1,3,1,2,2,1,2,2,2,2,1], [1,2,2,2,2,2,1,2,2,1,1,2,2,2,1], [1,3,2,2,3,3,2,2,2,2,2,2,2,2,1], [1,3,1,1,2,3,1,2,2,1,1,2,2,2,1], [1,2,2,1,2,3,2,1,3,1,1,2,2,2,1], [2,3,2,2,1,3,2,2,2,1,1,2,2,1,2], [1,3,2,2,2,3,2,1,2,1,2,2,2,1,2], [1,3,2,1,2,3,2,1,1,1,1,1,2,2,2], [1,3,2,2,2,3,2,2,1,1,1,1,2,2,2], [1,3,2,2,2,3,2,2,1,1,1,1,2,2,2], [1,3,2,2,2,3,2,2,1,1,1,1,2,2,2], [1,2,2,2,1,3,2,2,1,1,1,2,2,2,2], [1,2,2,2,2,2,1,1,1,1,1,2,2,2,2], [1,2,2,2,1,2,2,2,1,2,1,1,2,2,2], [1,3,2,1,2,2,2,2,1,1,2,2,1,2,1], [1,3,2,1,2,2,2,2,1,1,2,2,1,2,1], [1,3,2,1,2,2,2,2,1,1,2,2,1,2,1], [1,3,2,1,2,2,2,2,1,1,2,2,1,2,1], [1,3,2,1,2,2,2,2,1,1,2,2,1,2,1], [2,3,1,2,2,3,3,2,1,3,1,2,2,2,2], [2,3,2,2,1,3,2,1,3,2,1,1,2,2], [2,3,1,1,2,3,3,1,2,2,1,2,2,2,1], [1,3,2,2,2,3,3,2,1,1,1,2,2,2,1], [1,2,2,2,1,3,3,2,1,2,2,2,2,2,2], [1,2,2,1,3,2,1,1,1,1,1,2,2,2], [1,3,2,2,1,2,1,2,1,1,1,2,2,1,1], [1,3,2,1,2,3,2,1,1,1,2,1,2,2,2], [1,3,2,1,2,2,2,2,1,1,1,1,2,2], [1,2,2,1,1,2,1,2,1,1,1,1,2,2,2], [2,3,2,2,1,3,2,1,1,1,1,2,1,1,2], [1,3,1,1,2,2,1,1,2,1,2,1,2,1,1], [1,3,1,1,2,2,1,1,2,1,2,1,2,1,1], [2,2,1,1,1,2,2,1,2,1,2,2,2,1,2], [1,2,1,1,1,2,2,1,2,1,2,2,2,2,2], [1,3,2,1,1,2,2,1,1,1,1,2,2,2,2], [1,2,2,1,3,3,1,2,1,1,1,2,2,2,2], [1,2,2,1,3,3,1,2,1,1,1,2,2,2,2], [1,3,2,2,3,3,2,2,1,1,1,2,2,2,2], [1,2,1,1,3,3,1,2,2,1,1,2,2,2,1], [2,3,1,1,3,2,2,2,1,1,2,2,2,2,2], [2,3,2,1,3,2,3,1,3,1,2,2,2,2,2], [2,1,1,1,1,3,2,1,3,1,2,2,1,1,1], [2,3,2,1,3,1,3,1,1,3,2,2,1,2,2], [2,1,2,2,1,2,2,2,3,1,2,2,2,2,2], [2,1,2,2,1,2,2,2,3,1,2,2,2,2,2], [1,3,3,1,1,2,2,3,2,1,2,2,2,2], [1,3,3,1,1,2,2,3,2,1,2,2,2,2], [1,3,2,2,3,2,1,1,1,1,1,2,2,2], [1,3,2,2,3,2,1,1,1,1,1,2,2,2], [1,3,2,1,1,3,2,1,1,1,1,2,2,2,1], [2,3,2,1,2,1,2,1,1,1,2,1,1,2,1], [2,3,2,1,2,1,1,1,1,1,2,2,1,2,2], [2,3,2,1,2,1,1,1,1,2,2,1,2,2], [1,3,1,1,1,1,1,1,1,1,2,1,1,1,2], [2,3,2,2,3,1,1,2,1,1,2,2,1,2,2], [1,3,2,1,1,2,3,1,1,3,1,1,1,2,1], [2,3,1,2,2,3,3,1,2,3,1,2,2,1,1], [3,1,1,2,2,2,1,1,3,1,2,2,2,1,1], [1,3,2,2,1,3,2,2,3,1,1,2,2,1,2], [2,3,2,2,3,3,1,1,3,1,2,2,2,2,2], [1,2,1,1,1,1,2,1,1,1,2,2,1,1,2], [1,2,1,2,1,2,2,2,3,1,1,2,2,1,2], [1,2,2,1,1,3,2,2,1,1,2,1,1,2,1]]
	
	
var counter=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
					j=parseInt(Math.random()*(65-0)+0);
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