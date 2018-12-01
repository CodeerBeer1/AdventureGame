//Naam: Khizer
//Klas: 18A1



//RemovingBloatWare

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

//RemovingBloatWare



//TextNodes

	var text=document.createTextNode("Adventure Game");
	var continueModalText=document.createTextNode("Ja");
	var closeModalText=document.createTextNode("Terug");
	var storytext=document.createTextNode("Verhaal");
	var closeStartModalText=document.createTextNode("Nee");
	var closeModalStoryText=document.createTextNode("Terug");
	var manualtext=document.createTextNode("Speluitleg");
	var nextext=document.createTextNode("Volgende");
	var pretext=document.createTextNode("Vorige");
	var modalStartTextNode=document.createTextNode("Weet je zeker dat je de spel wilt beginnen?");
	var modalStoryTextNode=document.createTextNode("Er was is een Henk. Hij was lang, dik en verlegen. Hij wou even naar buiten gaan om boodschappen te doen, maar dat zal hem niet zo gemakkelijk lukken. Met zijn buurman Koen aan zijn kant denkt hij dat hij zonder problemen zijn boodschappen kan doen.");
	var modalManualTextNode=document.createTextNode("In de verhaal moet je een spel spelen. Je kan kiezen tussen Easy, Medium en Hard difficulty. Bij iedere difficulty heb je andere tijden en moeilijkheden om de level te halen. Je krijgt ook punten die afhankelijk zijn van de difficulty.");
	var sceneOneText=document.createTextNode("Er was is een Henk. Hij was dik, lang en verlegen. Hij wou even naar buiten om boodschappen te doen, hij kwam onderweg zijn buurman Koen tegen en zei hoi tegen hem.");
	var sceneTwoText=document.createTextNode("Henk liep naar de supermarkt. Voor de supermarkt waren veel berenvallen voor geen reden. Henk was slechtziend dus zag het niet. Hij stapte op een val en zijn voet was afgehakt door de stekelige tanden van de val. Henk en zijn voet vielen allebij in een put naast hem.");
	var sceneThreeText=document.createTextNode("In de put stond stoel met een pc met NVIDIA GeForce GTX 2080 Ti, Intel Core i9 8000, een maxxter muis en een keyboard, maar het had wel gare speakers. En het had een 4k display 140hz HDR etc.");
	var sceneFourText=document.createTextNode("Op die stoel is een proximity sensor, die ervoor zorgt dat de pc aangaat. Maar Henk was dik genoeg dat de sensor kapot ging maar de pc ging alsnog aan.");
	var sceneFiveText=document.createTextNode("Ondertussen was Koen effe een biertje aan het tappen.");
	var sceneSixText=document.createTextNode("Er verscheen iets op Henk's scherm waar hij een spel moet spelen om zijn voet terug te krijgen, het lijkt onlogisch maar Henk is dom en gelooft het toch.");
	var realtext=document.createTextNode("START");
	var fourKText=document.createTextNode("4K 120 FPS HDR 1ms 144Hz");
	var welcomeText=document.createTextNode("Welcome To The Game");
	var footext=document.createTextNode("Get your foot back now!");
	var difficultyChooseText=document.createTextNode("Choose A difficulty");
	var easyButtonText=document.createTextNode("Easy");
	var mediumButtonText=document.createTextNode("Medium");
	var hardButtonText=document.createTextNode("Hard");

//TextNodes



//Functions

	function prevButtonHoverLight(argument) {
		
		prevButton.style.width="400px";
		prevButton.style.borderRadius="0px 50px 50px 0px";
		prevButton.style.backgroundColor="black";
		prevButton.style.color="white";
		prevButton.style.borderColor="white";

	}

	function nextButtonHoverDark(argument) {
		
		nextButton.style.width="400px";
		nextButton.style.borderRadius="50px 0px 0px 50px";
		nextButton.style.backgroundColor="white";
		nextButton.style.color="black";
		nextButton.style.borderColor="black";

	}

	function nextButtonHoverLight(argument) {
		
		nextButton.style.width="400px";
		nextButton.style.borderRadius="50px 0px 0px 50px";
		nextButton.style.backgroundColor="black";
		nextButton.style.color="white";
		nextButton.style.borderColor="white";

	}

	function prevButtonHoverDark(argument) {
		
		prevButton.style.width="400px";
		prevButton.style.borderRadius="0px 50px 50px 0px";
		prevButton.style.backgroundColor="white";
		prevButton.style.color="black";
		prevButton.style.borderColor="black";

	}

	function changeButtonStyleLight(argument) {

		nextButton.style.backgroundColor="white";
		nextButton.style.color="black";
		nextButton.style.borderColor="black";
		nextButton.style.width="300px";

		prevButton.style.backgroundColor="white";
		prevButton.style.color="black";
		prevButton.style.borderColor="black";
		prevButton.style.width="300px";

	}

	function changeButtonStyleDark(argument) {
		
		nextButton.style.backgroundColor="#595959";
		nextButton.style.color="white";
		nextButton.style.borderColor="white";
		nextButton.style.width="300px";

		prevButton.style.backgroundColor="#595959";
		prevButton.style.color="white";
		prevButton.style.borderColor="white";
		prevButton.style.width="300px";

	}

	function backgroundColorChange(color, bodyColor) {

		gameContainer.style.backgroundColor=color;
		document.body.style.backgroundColor=bodyColor;

	}

	function borderColorChange(color, bgColor) {
		
		modalStartText.style.borderColor=color;
		modalStart.style.backgroundColor=bgColor;

	}

	function confirm(argument) {

		modalStart.style.display="block";

	}

	function sceneOne(argument) {

		console.log("Started Game");
		console.log("Scene 1");

		document.body.style.transition="1s";
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
		changeButtonStyleDark();

		prevButton.style.display="block";
		
		nextButton.setAttribute("onmousemove", "nextButtonHoverDark()");
		prevButton.setAttribute("onmousemove", "prevButtonHoverDark()");

		nextButton.setAttribute("onmouseleave", "changeButtonStyleDark()");
		prevButton.setAttribute("onmouseleave", "changeButtonStyleDark()");
		
		prevButton.setAttribute("onclick", "sceneOne()");
		nextButton.setAttribute("onclick", "sceneThree()");

		sceneP.style.backgroundColor="#595959";
		sceneP.style.color="white";

		sceneP.innerHTML=sceneTwoText.textContent;

	}

	function sceneThree(argument) {

		console.log("Scene 3");
		document.body.style.backgroundImage="url(img/situatie3.png)";
		changeButtonStyleLight();
		
		nextButton.setAttribute("onclick", "sceneFour()");
		prevButton.setAttribute("onclick", "sceneTwo()");

		nextButton.setAttribute("onmousemove", "nextButtonHoverLight()");
		prevButton.setAttribute("onmousemove", "prevButtonHoverLight()");

		nextButton.setAttribute("onmouseleave", "changeButtonStyleLight()");
		prevButton.setAttribute("onmouseleave", "changeButtonStyleLight()");

		sceneP.style.backgroundColor="white";
		sceneP.style.color="black";

		sceneP.innerHTML=sceneThreeText.textContent;
	}

	function sceneFour(argument) {
		
		console.log("Scene 4")
		document.body.style.backgroundImage="url(img/situatie4.png)"
		changeButtonStyleLight();

		nextButton.setAttribute("onclick", "sceneFive()");
		prevButton.setAttribute("onclick", "sceneThree()");

		nextButton.setAttribute("onmousemove", "nextButtonHoverLight()");
		prevButton.setAttribute("onmousemove", "prevButtonHoverLight()");

		nextButton.setAttribute("onmouseleave", "changeButtonStyleLight()");
		prevButton.setAttribute("onmouseleave", "changeButtonStyleLight()");

		sceneP.style.backgroundColor="white";
		sceneP.style.color="black";

		sceneP.innerHTML=sceneFourText.textContent;

	}

	function sceneFive(argument) {

		console.log("Scene 5");
		document.body.style.backgroundImage="url(img/situatie5.png)";
		changeButtonStyleDark()

		nextButton.setAttribute("onclick", "sceneSix()");
		prevButton.setAttribute("onclick", "sceneFour()");

		nextButton.setAttribute("onmousemove", "nextButtonHoverDark()");
		prevButton.setAttribute("onmousemove", "prevButtonHoverDark()");

		nextButton.setAttribute("onmouseleave", "changeButtonStyleDark()");
		prevButton.setAttribute("onmouseleave", "changeButtonStyleDark()");

		sceneP.style.backgroundColor="#595959";
		sceneP.style.color="white";

		sceneP.innerHTML=sceneFiveText.textContent;

	}

	function sceneSix(argument) {
		
		console.log("Scene 6");
		document.body.style.backgroundImage="url(img/scherm.png)";
		changeButtonStyleLight();

		nextButton.setAttribute("onclick", "sceneSeven()");
		prevButton.setAttribute("onclick", "sceneFive()");

		nextButton.setAttribute("onmousemove", "nextButtonHoverLight()");
		prevButton.setAttribute("onmousemove", "prevButtonHoverLight()");

		nextButton.setAttribute("onmouseleave", "changeButtonStyleLight()");
		prevButton.setAttribute("onmouseleave", "changeButtonStyleLight()");

		sceneP.style.backgroundColor="white";
		sceneP.style.color="black";

		nextButton.style.display="block";
		prevButton.style.display="block";
		sceneP.style.display="block";
		realStart.style.display="none";

		sceneP.innerHTML=sceneSixText.textContent;

	}

	function sceneSeven(argument) {
		
		console.log("Starting InGame game");

		nextButton.style.display="none";	
		sceneP.style.display="none";

		realStart.style.display="block";

		prevButton.setAttribute("onclick", "sceneSix()");


	}

	function gameIntro(argument) {

		console.log("Started InGame game")
		document.body.style.backgroundImage="none";
		document.body.style.backgroundColor="red";
		document.body.style.fontFamily="BalooTamma";

		prevButton.style.display="none";
		realStart.style.display="none";
		fourK.style.display="block";
		welcome.style.display="block";
		foot.style.display="block";
		difficultyChoose.style.display="block";
		difficultyDiv.style.display="block";
		EnterName.style.display="block";

	}

	function showStoryText(argument) {

		modalStory.style.display="block";
		
	}

	function showManualText(argument) {

		modalManual.style.display="block";

	}

	function startGameEasy(argument) {
		
		window.open("", "", "width=100 height=100");
		welcome.style.display="none";
		foot.style.display="none";
		difficultyChoose.style.display="none";
		difficultyDiv.style.display="none";
		EnterName.style.display="none";

		difficultyDisplay.style.display="block";
		difficultyDisplay.innerHTML="Difficulty: Easy</br>";
		nameDisplay.style.display="block";	

		nameDisplay.innerHTML="Username: "+EnterName.value;

		/*if (EnterName==null||"Enter username") {
			nameDisplay.innerHTML="Guest"
		}
		else if (EnterName!=null||"Enter username") {
			nameDisplay.innerHTML="Username: "+EnterName.value;
		}*/
		
		puzzleDiv.style.display="grid";
		puzzleDiv.style.gridTemplateColumns="repeat(3, 33.3%)";
		puzzleDiv.style.gridTemplateRows="repeat(3, 33.3%)";

	}

	function startGameMedium(argument) {

		welcome.style.display="none";
		foot.style.display="none";
		difficultyChoose.style.display="none";
		difficultyDiv.style.display="none";
		EnterName.style.display="none";

		difficultyDisplay.style.display="block";
		difficultyDisplay.innerHTML="Difficulty: Medium</br>";
		nameDisplay.style.display="block";
		nameDisplay.innerHTML="Username: "+EnterName.value;

		puzzleDiv.style.display="grid";

		puzzleDiv.style.display="grid";
		puzzleDiv.style.gridTemplateColumns="repeat(5, 20%)";
		puzzleDiv.style.gridTemplateRows="repeat(5, 20%)";

	}

	function startGameHard(argument) {
		
		welcome.style.display="none";
		foot.style.display="none";
		difficultyChoose.style.display="none";
		difficultyDiv.style.display="none";
		EnterName.style.display="none";

		difficultyDisplay.style.display="block";
		difficultyDisplay.innerHTML="Difficulty: Hard</br>";
		nameDisplay.style.display="block";
		nameDisplay.innerHTML="Username: "+EnterName.value;

		puzzleDiv.style.display="grid";
		puzzleDiv.style.display="grid";
		puzzleDiv.style.gridTemplateColumns="repeat(7, 14.3%)";
		puzzleDiv.style.gridTemplateRows="repeat(7, 14.3%)";

	}

//Functions



//AddingNeededElements

	var gameTitle=document.createElement("p");
	gameTitle.setAttribute("id", "gameTitle");
	gameTitle.setAttribute("onclick", "confirm()");
	gameTitle.setAttribute("onmousemove", "backgroundColorChange('#0000b3', '#000080')");
	gameTitle.setAttribute("onmouseleave", "backgroundColorChange('#666666', '#404040')");

	var modalStartText=document.createElement("p");
	modalStartText.setAttribute("id", "modalStartText");

	var storyBtnTitle=document.createElement("p");
	storyBtnTitle.setAttribute("id", "storyBtnTitle");
	storyBtnTitle.setAttribute("onclick", "showStoryText()");
	storyBtnTitle.setAttribute("onmousemove", "backgroundColorChange('#800000', '#660000')");
	storyBtnTitle.setAttribute("onmouseleave", "backgroundColorChange('#666666', '#404040')");

	var modalStoryText=document.createElement("p");
	modalStoryText.setAttribute("id", "modalStoryText");

	var manualTitle=document.createElement("p");
	manualTitle.setAttribute("id", "manualTitle");
	manualTitle.setAttribute("onclick", "showManualText()");
	manualTitle.setAttribute("onmousemove", "backgroundColorChange('#248f24', '#145214')");
	manualTitle.setAttribute("onmouseleave", "backgroundColorChange('#666666', '#404040')");

	var modalManualText=document.createElement("p");
	modalManualText.setAttribute("id", "modalManualText");

	var sceneP=document.createElement("p");
	sceneP.setAttribute("id", "sceneP");

	var modalStartClose=document.createElement("button");
	modalStartClose.setAttribute("id", "modalStartClose");
	modalStartClose.setAttribute("onclick", "modalStart.style.display='none';");
	modalStartClose.setAttribute("onmousemove", "borderColorChange('#ff0000', 'rgba(80,0,0,0.5')")
	modalStartClose.setAttribute("onmouseleave", "borderColorChange('black', 'rgba(0,0,0,0.5')")

	var modalStartContinue=document.createElement("button");
	modalStartContinue.setAttribute("id", "modalStartContinue");
	modalStartContinue.setAttribute("onclick", "sceneOne()");
	modalStartContinue.setAttribute("onmousemove", "borderColorChange('#00ff00', 'rgba(0,80,0,0.5')");
	modalStartContinue.setAttribute("onmouseleave", "borderColorChange('black', 'rgba(0,0,0,0.5')");

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

	var realStart=document.createElement("div");
	realStart.setAttribute("id", "realStart");
	realStart.setAttribute("onclick", "gameIntro()");
	realStart.setAttribute("onmousemove", "prevButton.style.opacity='0'");
	realStart.setAttribute("onmouseleave", "prevButton.style.opacity='1'");

	var fourK=document.createElement("p");
	fourK.setAttribute("id", "fourK");

	var welcome=document.createElement("p");
	welcome.setAttribute("id", "welcome");

	var foot=document.createElement("p");
	foot.setAttribute("id", "foot");

	var difficultyChoose=document.createElement("p");
	difficultyChoose.setAttribute("id", "difficultyChoose");

	var difficultyDiv=document.createElement("div");
	difficultyDiv.setAttribute("id", "difficultyDiv");

	var easyButton=document.createElement("button");
	easyButton.setAttribute("id", "easyButton");
	easyButton.setAttribute("onclick", "startGameEasy()");

	var mediumButton=document.createElement("button");
	mediumButton.setAttribute("id", "mediumButton");
	mediumButton.setAttribute("onclick", "startGameMedium()");

	var hardButton=document.createElement("button");
	hardButton.setAttribute("id", "hardButton");
	hardButton.setAttribute("onclick", "startGameHard()");

	var difficultyDisplay=document.createElement("p");
	difficultyDisplay.setAttribute("id", "difficultyDisplay");

	var puzzleDiv=document.createElement("div");
	puzzleDiv.setAttribute("id", "puzzleDiv");

	var EnterName=document.createElement("input");
	EnterName.setAttribute("id", "EnterName");
	EnterName.setAttribute("value", "Enter username");
	EnterName.setAttribute("onclick", "EnterName.value=null")

	var nameDisplay=document.createElement("p");
	nameDisplay.setAttribute("id", "nameDisplay");

	var img=document.createElement("img");

	var hr=document.createElement("hr");

//AddingNeededElements



//Start



	//StartButton

		gameContainer.appendChild(gameTitle);
		gameTitle.appendChild(text);
		
	//StartButton



	//StartModal

		gameContainer.appendChild(modalStart);

		modalStart.appendChild(modalStartText);
		modalStartText.appendChild(modalStartTextNode);

		modalStart.appendChild(modalStartClose);
		modalStart.appendChild(modalStartContinue);

		modalStartClose.appendChild(closeStartModalText);
		modalStartContinue.appendChild(continueModalText);

	//StartModal



	//StoryButton

		gameContainer.appendChild(storyBtnTitle);
		storyBtnTitle.appendChild(storytext);

	//StoryButton

	//StoryModal

		gameContainer.appendChild(modalStory);

		modalStory.appendChild(modalStoryText);
		modalStoryText.appendChild(modalStoryTextNode);

		modalStory.appendChild(modalStoryClose);
		modalStoryClose.appendChild(closeModalStoryText);

	//StoryModal



	//ManualButton

		gameContainer.appendChild(manualTitle);	
		manualTitle.appendChild(manualtext);

	//ManualButton

	//ManualModal

		gameContainer.appendChild(modalManual);

		modalManual.appendChild(modalManualText);
		modalManualText.appendChild(modalManualTextNode);

		modalManual.appendChild(modalManualClose);
		modalManualClose.appendChild(closeModalText);

	//ManualModal



//Start



//appendingNeededElements

	gameContainer.appendChild(sceneP);
	sceneP.appendChild(sceneOneText);

	gameContainer.appendChild(volgendeDiv);
	volgendeDiv.appendChild(nextButton);

	gameContainer.appendChild(vorigeDiv);
	vorigeDiv.appendChild(prevButton);

	gameContainer.appendChild(realStart);

	gameContainer.appendChild(fourK);

	gameContainer.appendChild(welcome);

	gameContainer.appendChild(foot);

	gameContainer.appendChild(difficultyChoose);

	gameContainer.appendChild(difficultyDiv);
	difficultyDiv.appendChild(easyButton);
	difficultyDiv.appendChild(mediumButton);
	difficultyDiv.appendChild(hardButton);

	gameContainer.appendChild(nameDisplay);

	gameContainer.appendChild(EnterName);

	gameContainer.appendChild(difficultyDisplay);

	gameContainer.appendChild(puzzleDiv);

	nextButton.appendChild(nextext);

	prevButton.appendChild(pretext);
		
	realStart.appendChild(realtext);

	fourK.appendChild(fourKText);

	welcome.appendChild(welcomeText);

	foot.appendChild(footext);

	difficultyChoose.appendChild(difficultyChooseText);

	easyButton.appendChild(easyButtonText);
		
	mediumButton.appendChild(mediumButtonText)

	hardButton.appendChild(hardButtonText);

//appendingNeededElements