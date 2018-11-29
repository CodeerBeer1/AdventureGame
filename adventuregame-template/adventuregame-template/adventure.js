//Naam: Khizer
//Klas: 18A1



//VarsMetLangeTexten

	var modalStoryTextNode=document.createTextNode("Er was is een Henk. Hij was lang, dik en verlegen. Hij wou even naar buiten gaan om boodschappen te doen, maar dat zal hem niet zo gemakkelijk lukken. Met zijn buurman Koen aan zijn kant denkt hij dat hij zonder problemen zijn boodschappen kan doen.")
	var modalManualTextNode=document.createTextNode("In de verhaal moet je een spel spelen. Je kan kiezen tussen Easy, Medium en Hard difficulty. Bij iedere difficulty heb je andere tijden en moeilijkheden om de level te halen. Je krijgt ook punten die afhankelijk zijn van de difficulty.")
	var sceneOneText=document.createTextNode("Er was is een Henk. Hij was dik, lang en verlegen. Hij wou even naar buiten om boodschappen te doen, hij kwam onderweg zijn buurman Koen tegen en zei hoi tegen hem.")

//VarsMetLangeTexten



//Functions

	function sceneOne(argument) {

		console.log("Started Game")
		document.body.style.backgroundImage="url(img/situatie1.png)";
		document.body.style.backgroundSize="cover";
		document.body.style.backgroundRepeat="no-repeat";
		document.body.style.fontFamily="Archivo";
		gameContainer.style.backgroundColor="rgba(0,0,0,0)";

		gameTitle.style.display="none";
		storyBtnTitle.style.display="none";
		manualTitle.style.display="none";

		gameContainer.appendChild(sceneP).id="sceneP";
		sceneP.appendChild(sceneOneText);

		gameContainer.appendChild(volgendeDiv).id="volgendeDiv";
		volgendeDiv.appendChild(nextButton).id="nextButton";
		var nextext=document.createTextNode("Volgende");
		nextButton.appendChild(nextext)

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



//TheAddingPart

	var gameTitle=document.createElement("p");
	var storyBtnTitle=document.createElement("p");
		var modalStoryText=document.createElement("p");
	var manualTitle=document.createElement("p");
		var modalManualText=document.createElement("p");

	var sceneP=document.createElement("p");

	var modalStoryClose=document.createElement("button");
	var modalManualClose=document.createElement("button");

	var nextButton=document.createElement("button");

	var modalStory=document.createElement("div");
	var modalManual=document.createElement("div");

	var volgendeDiv=document.createElement("div");

	var img=document.createElement("img");

	var hr=document.createElement("hr");

//TheAddingPart	



//AppendingElementsInGame



	//StartButton

		gameContainer.appendChild(gameTitle).id="gameTitle";
		var text=document.createTextNode("Adventure Game");
		gameTitle.appendChild(text);
		gameTitle.setAttribute("onclick", "sceneOne()");

	//StartButton



	//ShowStory

		//StoryButton

			gameContainer.appendChild(storyBtnTitle).id="storyBtnTitle";
			var text=document.createTextNode("Verhaal");
			storyBtnTitle.appendChild(text);
			storyBtnTitle.setAttribute("onclick", "showStoryText()");

		//StoryButton

		//StoryModal

			gameContainer.appendChild(modalStory).id="modalStory";
			modalStory.appendChild(modalStoryText).id="modalStoryText";
			modalStoryText.appendChild(modalStoryTextNode);
			modalStory.appendChild(modalStoryClose).id="modalStoryClose";
			modalStoryClose.setAttribute("onclick", "modalStory.style.display='none';")
			var closeModalText=document.createTextNode("Terug");
			modalStoryClose.appendChild(closeModalText);
			gameContainer.appendChild(modalStory);

		//StoryModal

	//ShowStory

	//ShowManual

		gameContainer.appendChild(manualTitle).id="manualTitle";
		var text=document.createTextNode("Speluitleg");
		manualTitle.appendChild(text);
		manualTitle.setAttribute("onclick", "showManualText()");

	//ShowManual

	//ShowManualModal

		gameContainer.appendChild(modalManual).id="modalManual";
		modalManual.appendChild(modalManualText).id="modalManualText";
		modalManualText.appendChild(modalManualTextNode);
		modalManual.appendChild(modalManualClose).id="modalManualClose";
		modalManualClose.setAttribute("onclick", "modalManual.style.display='none';")
		var closeModalText=document.createTextNode("Terug");
		modalManualClose.appendChild(closeModalText);
		gameContainer.appendChild(modalManual);

	//ShowManualModal

//AppendingElementsInGame



//SceneOne

	

//SceneOne


