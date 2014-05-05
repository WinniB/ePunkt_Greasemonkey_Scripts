// ==UserScript==
// @name        Betsy_ApplicantPublications
// @namespace   ePunkt
// @include     http://localhost:55853/Account/Publications/Create*
// @version     1.0.0  
// @require		http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
// @require		https://raw.github.com/WinniB/ePunkt_Greasemonkey_Scripts/master/HelperFunctions.js
// @resource 	ePunktCss https://raw.github.com/WinniB/ePunkt_Greasemonkey_Scripts/master/ePunktScriptStyles.css
// ==/UserScript==

/*
 * v 1.0.0	22.01.2014 create
*/

ApplicantPublications_GenerateButton();


/*** START Fill Applicant Publications ***/
function ApplicantPublications_GenerateButton(){
	var clickEvent = function (e) {
		ApplicantPublications_FillForm();
	}

	var inputBootstrap = createBootstrapButtonElement('GM Fill Form', 'NEWPortal_ApplicantExperience_FillButton');
	inputBootstrap.onclick = clickEvent;

	insertAfter(document.getElementById('save'), inputBootstrap);
}



function ApplicantPublications_FillForm(){
	var title = 'Titel ' + randomWord(9);
	var description = 'Beschreibung Publikation '+randomWord(4);
	for(var i=0; i < 5; i++)    {
      description += randomWord(randNumMinMax(4,10));
	  description += ' ';
    }
	
	addValueById("Name", title);
	selectRandomElement("Type");
	addValueById("Description", description);
}
/*** END Fill Applicant Publications ***/