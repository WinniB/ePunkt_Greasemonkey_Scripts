// ==UserScript==
// @name        Betsy_ApplicantEducation
// @namespace   ePunkt
// @include     http://localhost:55853/Account/Education/Create*
// @version     1.0.0  
// @require		http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
// @require		https://raw.github.com/WinniB/ePunkt_Greasemonkey_Scripts/master/HelperFunctions.js
// @resource 	ePunktCss https://raw.github.com/WinniB/ePunkt_Greasemonkey_Scripts/master/ePunktScriptStyles.css
// ==/UserScript==

/*
 * v 1.0.0	21.01.2014 create
*/

ApplicantEducation_GenerateButton();


/*** START Fill Applicant Education ***/
function ApplicantEducation_GenerateButton(){
	var clickEvent = function (e) {
		ApplicantEducation_FillForm();
	}

	var inputBootstrap = createBootstrapButtonElement('GM Fill Form', 'NEWPortal_ApplicantEducation_FillButton');
	inputBootstrap.onclick = clickEvent;

	insertAfter(document.getElementById('save'), inputBootstrap);
}



function ApplicantEducation_FillForm(){
	var specialization = 'Fachrichtung ' + randomWord(9);
	
	var MonthStart = randNum(12); //startMonth
	var MonthEnd = randNum(12);	//endMonth
	var YearStart = parseInt( randNumMinMax(1980,2012) );	//startYear
	var YearEnd = randNumMinMax(1980,2012);	//endYear
	
	if(YearStart > YearEnd){
		var temp = YearEnd; 
		YearEnd = YearStart;
		YearStart = temp;
	}

	var location = 'Ort '+randomWord(8);

	selectRandomElement("Type");
	addValueById("Specialization", specialization);
	selectItemByValue(document.getElementById("Start_Month"), MonthStart);   	  
	selectItemByValue(document.getElementById("Start_Year"), YearStart)
	selectItemByValue(document.getElementById("End_Month"), MonthEnd);  
	selectItemByValue(document.getElementById("End_Year"), YearEnd);
	addValueById("Location", location);
	selectRandomElement("IsFinished");

}
/*** END Fill Applicant Education ***/
