// ==UserScript==
// @name        Betsy_Register
// @namespace   ePunkt
// @include     http://localhost:55853/Register*
// @version     1.0.1  
// @require		http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
// @require		https://raw.github.com/WinniB/ePunkt_Greasemonkey_Scripts/master/HelperFunctions.js
// @resource 	ePunktCss https://raw.github.com/WinniB/ePunkt_Greasemonkey_Scripts/master/ePunktScriptStyles.css
// ==/UserScript==

/*
 * v 1.0.0	21.01.2014 create
 * v 1.0.1	06.02.2014 edit birthdate dateformat, adapt gender selection, improve script to add password
*/
var ePunktCssSource = GM_getResourceText("ePunktCss");

newPortalSettings_SignUp_InUse = GM_getValue("eR_NewPortal_Settings_PortalSignUp_InUse",true);
newPortalSettings_SignUp_UseDateTime = GM_getValue("eR_NewPortal_Settings_PortalSignUp_UseDateTime",true);
newPortalSettings_SignUp_FirstName = GM_getValue("eR_NewPortal_Settings_PortalSignUp_FirstName","ePunkt");
newPortalSettings_SignUp_LastName = GM_getValue("eR_NewPortal_Settings_PortalSignUp_LastName","ePunkt");
newPortalSettings_SignUp_Phone = GM_getValue("eR_NewPortal_Settings_PortalSignUp_Phone","12345");
newPortalSettings_SignUp_Email = GM_getValue("eR_NewPortal_Settings_PortalSignUp_Email","ePunktUser@epunkt.com");
newPortalSettings_SignUp_Email_UseRandom = GM_getValue("eR_NewPortal_Settings_PortalSignUp_Email_UseRandom",true);
newPortalSettings_SignUp_BirthDate = GM_getValue("eR_NewPortal_Settings_PortalSignUp_BirthDate","01.01.2000");
newPortalSettings_SignUp_Street = GM_getValue("eR_NewPortal_Settings_PortalSignUp_Street","ePunkt Plaza");
newPortalSettings_SignUp_ZipCode = GM_getValue("eR_NewPortal_Settings_PortalSignUp_ZipCode","4020");
newPortalSettings_SignUp_City = GM_getValue("eR_NewPortal_Settings_PortalSignUp_City","Linz");
newPortalSettings_SignUp_Country  = GM_getValue("eR_NewPortal_Settings_PortalSignUp_Country",14); // default: Austria
newPortalSettings_SignUp_Nationality = GM_getValue("eR_NewPortal_Settings_PortalSignUp_Nationality",14); // default: Austria
newPortalSettings_SignUp_Gender = GM_getValue("newPortalSettings_SignUp_Gender","Male");
newPortalSettings_SignUp_Gender_UseRandom = GM_getValue("newPortalSettings_SignUp_Gender_UseRandom",true);
newPortalSettings_SignUp_UserName = GM_getValue("eR_NewPortal_Settings_PortalSignUp_UserName","ePunktUser");
newPortalSettings_SignUp_UserName_UseRandom = GM_getValue("eR_NewPortal_Settings_PortalSignUp_UserName_UseRandom",true);
newPortalSettings_SignUp_Password = GM_getValue("eR_NewPortal_Settings_PortalSignUp_Password","ePunkt");

PortalSignUp_GenerateButton();


/*** START Portal Sign Up ***/
function PortalSignUp_GenerateButton(){
	var clickEvent = function (e) {
		PortalSignUp_FillForm();
	}

	var inputBootstrap = createBootstrapButtonElement('GM Fill Form', 'NEWPortalSignUp_FillButton');
	inputBootstrap.onclick = clickEvent;

	insertAfter(document.getElementById('save'), inputBootstrap);
}



function PortalSignUp_FillForm(){

	var LastName = newPortalSettings_SignUp_LastName;

	if(newPortalSettings_SignUp_UseDateTime){
		LastName = LastName + ' ' + actualDateTimeString();
	}
	
	var randWord = randomWord(10);

	var Email = newPortalSettings_SignUp_Email;
	if(newPortalSettings_SignUp_Email_UseRandom || !newPortalSettings_SignUp_Email){
		Email = randWord + '@epunkt.com';
	}

	var UserName = newPortalSettings_SignUp_UserName;
	if(newPortalSettings_SignUp_UserName_UseRandom || !newPortalSettings_SignUp_UserName){
		UserName = randWord;
	}
	
	var Gender = newPortalSettings_SignUp_Gender;
	if(newPortalSettings_SignUp_Gender_UseRandom){
		Gender = "Male"		
		if(!randBool()){
			Gender = "Female"
		}
	}
	
	selectElementByValue("Gender", Gender);
	selectRandomElement("TitleBeforeName");
	selectRandomElement("TitleAfterName");
	addValueById("FirstName", newPortalSettings_SignUp_FirstName);
	addValueById("LastName", LastName);
	addValueById("Email", Email);
	addValueById("Phone", newPortalSettings_SignUp_Phone);
	addValueById("BirthDate", newPortalSettings_SignUp_BirthDate);
	addValueById("Street", newPortalSettings_SignUp_Street);
	addValueById("ZipCode", newPortalSettings_SignUp_ZipCode);
	addValueById("City", newPortalSettings_SignUp_City);
	selectElementByIndex("Country", newPortalSettings_SignUp_Country);
	selectElementByIndex("Citizenship", newPortalSettings_SignUp_Nationality);
	addValueById("Password", newPortalSettings_SignUp_Password);
	addValueById("RepeatPassword", newPortalSettings_SignUp_Password);
	
	if(document.getElementById("AcceptTermsAndConditions")){
		document.getElementById("AcceptTermsAndConditions").checked = true;
	}
	
}
/*** END Portal Sign Up ***/