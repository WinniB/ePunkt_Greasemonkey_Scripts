// ==UserScript==
// @name        Betsy_ApplicantExperience
// @namespace   ePunkt
// @include     http://localhost:55853/Account/Experience/Create*
// @version     1.0.0  
// @require		http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
// @require		https://raw.github.com/WinniB/ePunkt_Greasemonkey_Scripts/master/HelperFunctions.js
// @resource 	ePunktCss https://raw.github.com/WinniB/ePunkt_Greasemonkey_Scripts/master/ePunktScriptStyles.css
// ==/UserScript==

/*
 * v 1.0.0	21.01.2014 create
*/

ApplicantExperience_GenerateButton();


/*** START Fill Applicant Experience ***/
function ApplicantExperience_GenerateButton(){
	var clickEvent = function (e) {
		ApplicantExperience_FillForm();
	}

	var inputBootstrap = createBootstrapButtonElement('GM Fill Form', 'NEWPortal_ApplicantExperience_FillButton');
	inputBootstrap.onclick = clickEvent;

	insertAfter(document.getElementById('save'), inputBootstrap);
}



function ApplicantExperience_FillForm(){
	var name = 'Unternehmen ' + randomWord(9);
	
	var MonthStart = randNum(12); //startMonth
	var MonthEnd = randNum(12);	//endMonth
	var YearStart = parseInt( randNumMinMax(1980,2012) );	//startYear
	var YearEnd = randNumMinMax(1980,2012);	//endYear
	
	if(YearStart > YearEnd){
		var temp = YearEnd; 
		YearEnd = YearStart;
		YearStart = temp;
	}

	var position = 'Position '+randomWord(8);
	var tasks = 'Aufgaben '+randomWord(8);
    for(var i=0; i < 8; i++)    {
      tasks += randomWord(randNumMinMax(4,20));
	  tasks += ' ';
    }
	
	var quitReason = 'Austrittsgrund '+randomWord(4);
	for(var i=0; i < 5; i++)    {
      quitReason += randomWord(randNumMinMax(4,10));
	  quitReason += ' ';
    }
	
	addValueById("Name", name);
	
	selectItemByValue(document.getElementById("Start_Month"), MonthStart);   	  
	selectItemByValue(document.getElementById("Start_Year"), YearStart)
	selectItemByValue(document.getElementById("End_Month"), MonthEnd);  
	selectItemByValue(document.getElementById("End_Year"), YearEnd);
	
	selectRandomElement("CareerLevel");
	
	addValueById("Position", position);
	addValueById("Tasks", tasks);
	addValueById("ReasonForQuitting", quitReason);
}
/*** END Fill Applicant Experience ***/