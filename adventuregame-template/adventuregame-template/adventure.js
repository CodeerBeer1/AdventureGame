//Naam: Khizer
//Klas: 18A1



//VarsMetLangeTexten

	var modalStartTextNode=document.createTextNode("Weet je zeker dat je de spel wilt beginnen?");
	var modalStoryTextNode=document.createTextNode("Er was is een Henk. Hij was lang, dik en verlegen. Hij wou even naar buiten gaan om boodschappen te doen, maar dat zal hem niet zo gemakkelijk lukken. Met zijn buurman Koen aan zijn kant denkt hij dat hij zonder problemen zijn boodschappen kan doen.");
	var modalManualTextNode=document.createTextNode("In de verhaal moet je een spel spelen. Je kan kiezen tussen Easy, Medium en Hard difficulty. Bij iedere difficulty heb je andere tijden en moeilijkheden om de level te halen. Je krijgt ook punten die afhankelijk zijn van de difficulty.");
	var sceneOneText=document.createTextNode("Er was is een Henk. Hij was dik, lang en verlegen. Hij wou even naar buiten om boodschappen te doen, hij kwam onderweg zijn buurman Koen tegen en zei hoi tegen hem.");
	var sceneTwoText=document.createTextNode("Henk liep naar de supermarkt. Voor de supermarkt waren veel berenvallen voor geen reden. Henk was slechtziend dus zag het niet. Hij stapte op een val en zijn voet was afgehakt door de stekelige tanden van de val. Henk en zijn voet vielen allebij in een put naast hem.");
	var sceneThreeText=document.createTextNode("In de put stond een pc met NVIDIA GeForce GTX 2080 ti, Intel Core i9 8000, een maxxter muis en een keyboard, maar het had wel gare speakers. En het had een 4k display 140hz hdr etc.");

//VarsMetLangeTexten



//Functions

	function confirm(argument) {

		modalStart.style.display="block";

	}

	function sceneOne(argument) {

		console.log("Started Game");
		console.log("Scene 1");

		document.body.style.backgroundImage="url(img/situatie1.png)";
		document.body.style.backgroundSize="cover";
		document.body.style.backgroundRepeat="no-repeat";
		document.body.style.fontFamily="Archivo";
		gameContainer.style.backgroundColor="rgba(0,0,0,0)";

		modalStart.style.display="none";
		gameTitle.style.display="none";
		storyBtnTitle.style.display="none";
		manualTitle.style.display="none";

		sceneP.style.display="block";
		nextButton.style.display="block";
		prevButton.style.display="none";

		nextButton.setAttribute("onclick", "sceneTwo()")

		sceneP.innerHTML=sceneOneText.textContent;

	}

	function sceneTwo(argument) {

		console.log("Scene 2");

		document.body.style.backgroundImage="url(img/situatie2.png)";
		prevButton.style.display="block";
		
		nextButton.setAttribute("onclick", "sceneThree()");
		prevButton.setAttribute("onclick", "sceneOne()")

		sceneP.innerHTML=sceneTwoText.textContent;

	}

	function sceneThree(argument) {

		console.log("Scene 3");
		document.body.style.backgroundImage="url(img/situatie3.png)";

		
		nextButton.setAttribute("onclick", "sceneFour()");
		prevButton.setAttribute("onclick", "sceneTwo()");

		sceneP.style.backgroundColor="white";
		sceneP.style.color="black";
		sceneP.style.borderColor="black";

		nextButton.style.backgroundColor="white";
		nextButton.style.color="black";
		nextButton.style.borderColor="black";

		prevButton.style.backgroundColor="white";
		prevButton.style.color="black";
		prevButton.style.borderColor="black";

		sceneP.innerHTML=sceneThreeText.textContent;
	}

	function sceneFour(argument) {
		
		console.log("Scene 4")
		document.body.style.backgroundImage="url(img/situatie4.png)"

		nextButton.setAttribute("onclick", "")
		prevButton.setAttribute("onclick", "sceneThree()")

	}

	function showStoryText(argument) {

		modalStory.style.display="block";
		
	}

	function showManualText(argument) {

		modalManual.style.display="block";

	}

//Functions



//TheRemovingPart

	var gameContainer=document.getElementById("game-container");

	var beginelementarray=[
		document.getElementById('title'),
		document.getElementById('description'),
		document.getElementById('game-buttons'),
		document.getElementById('inventoryItem')
	];

	for (i=0; i<beginelementarray.length; i++) {
		gameContainer.removeChild(beginelementarray[i]);
	}

//TheRemovingPart



//AddingNeededElements

	var gameTitle=document.createElement("p");
	gameTitle.setAttribute("id", "gameTitle");
	gameTitle.setAttribute("onclick", "confirm()");

		var modalStartText=document.createElement("p");
		modalStartText.setAttribute("id", "modalStartText");

	var storyBtnTitle=document.createElement("p");
	storyBtnTitle.setAttribute("id", "storyBtnTitle");
	storyBtnTitle.setAttribute("onclick", "showStoryText()");
		var modalStoryText=document.createElement("p");
		modalStoryText.setAttribute("id", "modalStoryText");

	var manualTitle=document.createElement("p");
	manualTitle.setAttribute("id", "manualTitle");
	manualTitle.setAttribute("onclick", "showManualText()");
		var modalManualText=document.createElement("p");
		modalManualText.setAttribute("id", "modalManualText");

	var sceneP=document.createElement("p");
	sceneP.setAttribute("id", "sceneP");

	var modalStartClose=document.createElement("button");
	modalStartClose.setAttribute("id", "modalStartClose");
	modalStartClose.setAttribute("onclick", "modalStart.style.display='none';");

	var modalStartContinue=document.createElement("button");
	modalStartContinue.setAttribute("id", "modalStartContinue");
	modalStartContinue.setAttribute("onclick", "sceneOne()");

	var modalStoryClose=document.createElement("button");
	modalStoryClose.setAttribute("id", "modalStoryClose");
	modalStoryClose.setAttribute("onclick", "modalStory.style.display='none';");

	var modalManualClose=document.createElement("button");
	modalManualClose.setAttribute("id", "modalManualClose");
	modalManualClose.setAttribute("onclick", "modalManual.style.display='none';");

	var nextButton=document.createElement("button");
	nextButton.setAttribute("id", "nextButton");
	nextButton.setAttribute("onclick", "");

	var prevButton=document.createElement("button");
	prevButton.setAttribute("id", "prevButton");
	prevButton.setAttribute("onclick", "")

	var modalStart=document.createElement("div");
	modalStart.setAttribute("id", "modalStart");

	var modalStory=document.createElement("div");
	modalStory.setAttribute("id", "modalStory")

	var modalManual=document.createElement("div");
	modalManual.setAttribute("id", "modalManual");

	var volgendeDiv=document.createElement("div");
	volgendeDiv.setAttribute("id", "volgendeDiv");

	var vorigeDiv=document.createElement("div");
	vorigeDiv.setAttribute("id", "vorigeDiv");

	var img=document.createElement("img");

	var hr=document.createElement("hr");

//AddingNeededElements



//Start



	//StartButton

		gameContainer.appendChild(gameTitle);

		var text=document.createTextNode("Adventure Game");
		gameTitle.appendChild(text);
		

	//StartButton



	//StartModal

		gameContainer.appendChild(modalStart);

		modalStart.appendChild(modalStartText);
		modalStartText.appendChild(modalStartTextNode);

		modalStart.appendChild(modalStartClose);
		modalStart.appendChild(modalStartContinue);

			var closeStartModalText=document.createTextNode("Nee");
		modalStartClose.appendChild(closeStartModalText);

			var continueModalText=document.createTextNode("Ja");
		modalStartContinue.appendChild(continueModalText);

	//StartModal



	//StoryButton

		gameContainer.appendChild(storyBtnTitle);

			var text=document.createTextNode("Verhaal");
		storyBtnTitle.appendChild(text);

	//StoryButton

	//StoryModal

		gameContainer.appendChild(modalStory);

		modalStory.appendChild(modalStoryText);
		modalStoryText.appendChild(modalStoryTextNode);

		modalStory.appendChild(modalStoryClose);

			var closeModalText=document.createTextNode("Terug");
		modalStoryClose.appendChild(closeModalText);

	//StoryModal



	//ShowManual

		gameContainer.appendChild(manualTitle);

			var text=document.createTextNode("Speluitleg");
		manualTitle.appendChild(text);

	//ManualButton

	//ManualModal

		gameContainer.appendChild(modalManual);

		modalManual.appendChild(modalManualText);
		modalManualText.appendChild(modalManualTextNode);

		modalManual.appendChild(modalManualClose);

			var closeModalText=document.createTextNode("Terug");
		modalManualClose.appendChild(closeModalText);

	//ManualModal

//Start



//SceneOne

	gameContainer.appendChild(sceneP);
	sceneP.appendChild(sceneOneText);

	gameContainer.appendChild(volgendeDiv);
	volgendeDiv.appendChild(nextButton);

	gameContainer.appendChild(vorigeDiv);
	vorigeDiv.appendChild(prevButton);

		var nextext=document.createTextNode("Volgende");
	nextButton.appendChild(nextext);

		var pretext=document.createTextNode("Vorige");
	prevButton.appendChild(pretext);

	sceneP.style.display="none";
	nextButton.style.display="none";
	prevButton.style.display="none";

//SceneOne
