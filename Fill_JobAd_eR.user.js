// ==UserScript==
// @name        Fill_JobAd_eR
// @namespace   ePunkt
// @description Füllt alle benötigten Felder in EditJobAd aus um einen Stelleninserat anzulegen
// @include     http://localhost:50527/Core/Job/EditJobAd.aspx*
// @include     http://staging.epunkt.net/Builds/Beta/eRecruiter/Core/Job/EditJobAd.aspx*
// @include     http://staging.epunkt.net/Builds/Dev/eRecruiter/Core/Job/EditJobAd.aspx*
// @include     https://er.epunkt.net/Core/Job/EditJobAd.aspx*
// @version     1.0.3
// @require		https://raw.github.com/WinniB/ePunkt_Greasemonkey_Scripts/master/HelperFunctions.js
// ==/UserScript==

/* INFO: MUST BE AN EXTRA SCRIPT BECAUSE CKEDITOR CAN NOT BE LOADED OTHERWISE!!!! NO GM _addStyle!!!!!
 * v 1.0.0	10.09.2013 create
 * v 1.0.1	04.11.2013 update sources
 * v 1.0.2	27.12.2013 update includes
 * v 1.0.3	17.06.2014 add save button on top to bypass scrolling 
*/


/* 
$(function(){
	var myinstances = [];

	//this is the foreach loop
	for(var i in CKEDITOR.instances) {

	   // this  returns each instance as object try it with alert(CKEDITOR.instances[i]) 
		alert('instance as object: ' + CKEDITOR.instances[i]); 
	   
		// this returns the names of the textareas/id of the instances. 
		alert('name of the textareas/id of the instance:' + CKEDITOR.instances[i].name);

		// returns the initial value of the textarea 
		alert('initial value of the textarea: ' + CKEDITOR.instances[i].value);  
	 
	   // this updates the value of the textarea from the CK instances.. 
	   alert('this updates the value of the textarea from the CK instance..: ' + CKEDITOR.instances[i].updateElement());

	   // this retrieve the data of each instances and store it into an associative array with the names of the textareas as keys... 
	   myinstances[CKEDITOR.instances[i].name] = CKEDITOR.instances[i].getData(); 
	}
});
*/

//alert('Before generate button');
generateSaveButtonTop();
generateButton();
//alert('After generate button');

function fillForm(){
	//alert('In function "fillForm"');
	
	var now = new Date();
	var day = addLeadingZeros(1,2,now.getDate());
	var month = now.getMonth();
	month += 1;
	month = addLeadingZeros(1,2,month);
	
	var hour = addLeadingZeros(1,2,now.getHours());
	var min = addLeadingZeros(1,2,now.getMinutes());

	var Block1_Html = "In einem jungen Team bist du Teil eines sehr agilen Entwicklungsprozesses, der nahe am Kunden passiert. Du bist im gesamten Software-Lifecycle eingebunden und bringst dich bei Analyse, Design und Implementierung ein. Neben Gestaltungsfreiraum und Platz f&uuml;r pers&ouml;nliche Weiterentwicklung besteht mittelfristig auch die M&ouml;glichkeit, unternehmensintern Aufgaben im Projektmanagement zu &uuml;bernehmen."
	
	var Block2_Html = "<div style='line-height:24px;text-align:center;'>";
	Block2_Html += "<span style='padding-right:15px;font-size:130%;'>Engagement</span> <span style='padding-right:15px; font-size:110%;'>ReSharper</span> <span style='padding-right:15px; font-size:150%;'>ASP.NET</span> <span style='padding-right:15px;font-size:120%;'>CSS</span> <span style='padding-right:15px; font-size:110%;'>Web Performance</span> <span style='padding-right:15px;font-size:130%;'>WebForms</span> <span style='padding-right:15px;font-size:120%;'>MVC</span> <span style='padding-right:15px;font-size:120%;'>Git</span> <span style='padding-right:15px;font-size:140%;'>HTML</span> <span style='padding-right:15px; font-size:110%;'>Selenium</span> <span style='padding-right:15px;font-size:130%;'>Flexibilit&auml;t</span> <span style='padding-right:15px; font-size:170%;'>C#</span> <span style='padding-right:15px;font-size:130%;'>Visual Studio</span> <span style='padding-right:15px;font-size:130%;'>SQL Server</span> <span style='padding-right:15px; font-size:110%;'>LINQ</span> <span style='padding-right:15px; font-size:120%;'>Entity Framework</span> <span style='padding-right:15px;font-size:140%;'>.NET 4</span> <span style='padding-right:15px;font-size:120%;'>Continuous Integration</span> <span style='padding-right:15px; font-size:110%;'>TeamCity</span> <span style='padding-right:15px; font-size:110%;'>JSON</span> <span style='padding-right:15px; font-size:150%;'>JavaScript</span> <span style='padding-right:15px;font-size:130%;'>Windows Server</span> <span style='padding-right:15px;font-size:130%;'>IIS</span> <span style='padding-right:15px;font-size:130%;'>Microsoft Web Stack</span> <span style='padding-right:15px; font-size:110%;'>HTML5</span> <span style='padding-right:15px;font-size:130%;'>Eigeninitiative</span><span style='padding-right:15px;font-size:120%;'>Praktische Erfahrung</span> <span style='padding-right:15px; font-size:130%;'>NUnit</span>";
	Block2_Html += "</div>";
	Block2_Html += "<div style='line-height: 24px; text-align: center;'>";
	Block2_Html += "<span style='padding-right:15px;font-size:130%;'>jQuery</span> <span style='padding-right:15px; font-size:110%;'>Cloud</span><span style='padding-right:15px; font-size:150%;'>Universit&auml;ts-/FH-Abschluss</span>";
	Block2_Html += "</div>";
	
	var Block3_Html = "... wir ein Unternehmen sind, in dem nicht nur &uuml;ber Work-Life-Balance geredet, sondern sie auch gelebt wird. Die Arbeit soll dir Spa&szlig; machen und zu dir passen. Und wir sorgen daf&uuml;r, dass du alles bekommst, um das zu tun, was du am liebsten machst: N&auml;mlich hervorragende Software, die daf&uuml;r da ist, die Probleme ihrer Anwender zu l&ouml;sen.";
	var Block4_Html = "";

	var Titel = 'Software Engineer .NET/C# ' + day + '-' + month + ' ' + hour + ':' + min;
	var SubTitel = 'für den Microsoft Web Stack';
	var Location = 'Linzer Innenstadt';
	
	var CompanyDescription = "Enter a company description";
	var CompanyDescriptionChecked = new Boolean(true);
	
	var instanceBlock1 = CKEDITOR.instances.ctl00_Main_txtBlock1;
	var instanceBlock2 = CKEDITOR.instances.ctl00_Main_txtBlock2;
	var instanceBlock3 = CKEDITOR.instances.ctl00_Main_txtBlock3;
	var instanceBlock4 = CKEDITOR.instances.ctl00_Main_txtBlock4;

	if(instanceBlock1){
		instanceBlock1.setData(Block1_Html);
	}
	
	if(instanceBlock2){
		instanceBlock2.setData(Block2_Html);
	}
	
	if(instanceBlock3){
		instanceBlock3.setData(Block3_Html);
	}
	
	if(instanceBlock4){
		instanceBlock4.setData(Block4_Html);
	}

	if(document.getElementById("ctl00_Main_txtTitle")){
		document.getElementById("ctl00_Main_txtTitle").value = Titel; 
	}

	if(document.getElementById("ctl00_Main_txtSubTitle")){
		document.getElementById("ctl00_Main_txtSubTitle").value = SubTitel; 
	}

	if(document.getElementById("ctl00_Main_txtLocation")){
		document.getElementById("ctl00_Main_txtLocation").value = Location; 
	}

}


/* GENERATE BUTTON */
function generateButton(){
	//alert('In function "generateButton"');

	var clickEvent = function (e) {
		fillForm();
	}
	
	var input = createInputButtonElement('Fill Job Ad Data', 'FillButton1', 'epunkt-button');
	input.onclick = clickEvent;

	var parent = document.getElementById('ctl00_Main_btnSave').parentNode;
	parent.insertBefore(input, parent.firstChild);
	
	
	var input2 = createInputButtonElement('Fill Job Ad Data', 'FillButton2', 'epunkt-button');
	input2.onclick = clickEvent;
	input2.style.cssFloat = 'right';
	var parentTD = document.getElementById('ctl00_Main_txtTitle');

	insertAfter(parentTD, input2);
}

/* GENERATE SAVE BUTTON */
function generateSaveButtonTop(){
	//alert('In function "generateSaveButtonTop"');

	var clickEvent = function (e) {
		$("#ctl00_Main_btnSave").click();
	} 
	
	var input = createInputButtonElement('Save Job Ad', 'SaveButtonTop', 'epunkt-button');
	input.onclick = clickEvent;
	input.style.cssFloat = 'right';

	var parentTD = document.getElementById('ctl00_Main_txtTitle');
	insertAfter(parentTD, input);
}