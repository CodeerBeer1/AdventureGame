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



//CreatingNeededElements

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

	var puzzleDiv=document.createElement("div");
	puzzleDiv.setAttribute("id", "puzzleDiv");

	var EnterName=document.createElement("input");
	EnterName.setAttribute("id", "EnterName");
	EnterName.setAttribute("value", "Enter username");
	EnterName.setAttribute("onclick", "EnterName.value=null");

	var gameCountdown=document.createElement("p");
	gameCountdown.setAttribute("id", "gameCountdown")

	var nameDisplay=document.createElement("p");
	nameDisplay.setAttribute("id", "nameDisplay");

	var levelName=document.createElement("p");
	levelName.setAttribute("id", "levelName");

	var levelUitleg=document.createElement("p");
	levelUitleg.setAttribute("id", "levelUitleg");

		//PuzzleEasy

			var puzzleBlankPiece1=document.createElement("img");
			puzzleBlankPiece1.style.src="img/white.png";
			puzzleBlankPiece1.setAttribute("class", "puzzleEasyBlankPiece");
			puzzleBlankPiece1.setAttribute("onclick", "src=puzzleSelect");

			var puzzleBlankPiece2=document.createElement("img");
			puzzleBlankPiece2.style.src="img/white.png";
			puzzleBlankPiece2.setAttribute("class", "puzzleEasyBlankPiece");
			puzzleBlankPiece2.setAttribute("onclick", "src=puzzleSelect");

			var puzzleBlankPiece3=document.createElement("img");
			puzzleBlankPiece3.style.src="img/white.png";
			puzzleBlankPiece3.setAttribute("class", "puzzleEasyBlankPiece");
			puzzleBlankPiece3.setAttribute("onclick", "src=puzzleSelect");

			var puzzleBlankPiece4=document.createElement("img");
			puzzleBlankPiece4.style.src="img/white.png";
			puzzleBlankPiece4.setAttribute("class", "puzzleEasyBlankPiece");
			puzzleBlankPiece4.setAttribute("onclick", "src=puzzleSelect");

			var puzzleBlankPiece5=document.createElement("img");
			puzzleBlankPiece5.style.src="img/white.png";
			puzzleBlankPiece5.setAttribute("class", "puzzleEasyBlankPiece");
			puzzleBlankPiece5.setAttribute("onclick", "src=puzzleSelect");

			var puzzleBlankPiece6=document.createElement("img");
			puzzleBlankPiece6.style.src="img/white.png";
			puzzleBlankPiece6.setAttribute("class", "puzzleEasyBlankPiece");
			puzzleBlankPiece6.setAttribute("onclick", "src=puzzleSelect");

			var puzzleBlankPiece7=document.createElement("img");
			puzzleBlankPiece7.style.src="img/white.png";
			puzzleBlankPiece7.setAttribute("class", "puzzleEasyBlankPiece");
			puzzleBlankPiece7.setAttribute("onclick", "src=puzzleSelect");

			var puzzleBlankPiece8=document.createElement("img");
			puzzleBlankPiece8.style.src="img/white.png";
			puzzleBlankPiece8.setAttribute("class", "puzzleEasyBlankPiece");
			puzzleBlankPiece8.setAttribute("onclick", "src=puzzleSelect");

			var puzzleBlankPiece9=document.createElement("img");
			puzzleBlankPiece9.style.src="img/white.png";
			puzzleBlankPiece9.setAttribute("class", "puzzleEasyBlankPiece");
			puzzleBlankPiece9.setAttribute("onclick", "src=puzzleSelect");


			var puzzleEasyPiece1=document.createElement("img");
			puzzleEasyPiece1.setAttribute("src", "img/puzzlepiece1.png");
			puzzleEasyPiece1.setAttribute("onclick", "puzzleSelect='img/puzzlepiece1.png'");

			var puzzleEasyPiece2=document.createElement("img");
			puzzleEasyPiece2.setAttribute("src", "img/puzzlepiece2.jpg");
			puzzleEasyPiece2.setAttribute("onclick", "puzzleSelect='img/puzzlepiece2.jpg'");

			var puzzleEasyPiece3=document.createElement("img");
			puzzleEasyPiece3.setAttribute("src", "img/puzzlepiece3.jpg");
			puzzleEasyPiece3.setAttribute("onclick", "puzzleSelect='img/puzzlepiece3.jpg'");

			var puzzleEasyPiece4=document.createElement("img");
			puzzleEasyPiece4.setAttribute("src", "img/puzzlepiece4.jpg");
			puzzleEasyPiece4.setAttribute("onclick", "puzzleSelect='img/puzzlepiece4.jpg'");

			var puzzleEasyPiece5=document.createElement("img");
			puzzleEasyPiece5.setAttribute("src", "img/puzzlepiece5.jpg");
			puzzleEasyPiece5.setAttribute("onclick", "puzzleSelect='img/puzzlepiece5.jpg'");

			var puzzleEasyPiece6=document.createElement("img");
			puzzleEasyPiece6.setAttribute("src", "img/puzzlepiece6.jpg");
			puzzleEasyPiece6.setAttribute("onclick", "puzzleSelect='img/puzzlepiece6.jpg'");

			var puzzleEasyPiece7=document.createElement("img");
			puzzleEasyPiece7.setAttribute("src", "img/puzzlepiece7.jpg");
			puzzleEasyPiece7.setAttribute("onclick", "puzzleSelect='img/puzzlepiece7.jpg'");

			var puzzleEasyPiece8=document.createElement("img");
			puzzleEasyPiece8.setAttribute("src", "img/puzzlepiece8.jpg");
			puzzleEasyPiece8.setAttribute("onclick", "puzzleSelect='img/puzzlepiece8.jpg'");

			var puzzleEasyPiece9=document.createElement("img");
			puzzleEasyPiece9.setAttribute("src", "img/puzzlepiece9.jpg");
			puzzleEasyPiece9.setAttribute("onclick", "puzzleSelect='img/puzzlepiece9.jpg'");

		//PuzzleEasy

		//PuzzleMedium

			

		//PuzzleMedium

		//PuzzleHard



		//PuzzleHard

	var puzzlePieceDiv=document.createElement("div");
	puzzlePieceDiv.setAttribute("id", "puzzlePieceDiv");

	var hr=document.createElement("hr");

//CreatingNeededElements



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
	var sceneThreeText=document.createTextNode("In de put stond stoel met een pc met NVIDIA GeForce GTX 2080 Ti, Intel Core i9 8000, een maxxter muis en een keyboard, maar het had wel gare speakers. En het had een 4K display 140Hz HDR etc.");
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
	var gameCountdownText=document.createTextNode("Starting in "+3);
	var puzzleLevelText=document.createTextNode("Puzzle");
	var puzzleUitleg=document.createTextNode("Click on a puzzle piece that you want to choose and place it somewhere in the puzzle container by clicking it.")

//TextNodes



//GameVars

	var puzzleSelect="img/white.png";

//GameVars



//Functions

	function gameTimeout() {
		setTimeout(alert("hoi"),10000)
	}

	function showStoryText() {

		modalStory.style.display="block";
		
	}

	function showManualText() {

		modalManual.style.display="block";

	}

	function prevButtonHoverLight() {
		
		prevButton.style.width="400px";
		prevButton.style.borderRadius="0px 50px 50px 0px";
		prevButton.style.backgroundColor="black";
		prevButton.style.color="white";
		prevButton.style.borderColor="white";

	}

	function nextButtonHoverDark() {
		
		nextButton.style.width="400px";
		nextButton.style.borderRadius="50px 0px 0px 50px";
		nextButton.style.backgroundColor="white";
		nextButton.style.color="black";
		nextButton.style.borderColor="black";

	}

	function nextButtonHoverLight() {
		
		nextButton.style.width="400px";
		nextButton.style.borderRadius="50px 0px 0px 50px";
		nextButton.style.backgroundColor="black";
		nextButton.style.color="white";
		nextButton.style.borderColor="white";

	}

	function prevButtonHoverDark() {
		
		prevButton.style.width="400px";
		prevButton.style.borderRadius="0px 50px 50px 0px";
		prevButton.style.backgroundColor="white";
		prevButton.style.color="black";
		prevButton.style.borderColor="black";

	}

	function changeButtonStyleLight() {

		console.log("Changed button style Light");
		nextButton.style.backgroundColor="white";
		nextButton.style.color="black";
		nextButton.style.borderColor="black";
		nextButton.style.width="300px";

		prevButton.style.backgroundColor="white";
		prevButton.style.color="black";
		prevButton.style.borderColor="black";
		prevButton.style.width="300px";

	}

	function changeButtonStyleDark() {
		
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

	function confirm() {

		modalStart.style.display="block";

	}

	function sceneOne() {

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

		sceneP.innerHTML = sceneOneText.textContent;
	}

	function sceneTwo() {

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

	function sceneThree() {

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

	function sceneFour() {
		
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

	function sceneFive() {

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

	function sceneSix() {
		
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

	function sceneSeven() {
		
		console.log("Starting InGame game");

		nextButton.style.display="none";	
		sceneP.style.display="none";

		realStart.style.display="block";

		prevButton.setAttribute("onclick", "sceneSix()");


	}

	function gameIntro() {

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

	function startGameEasy() {

		console.log("Easy difficulty chosen");
		fourK.style.display="none";
		welcome.style.display="none";
		foot.style.display="none";
		difficultyChoose.style.display="none";
		difficultyDiv.style.display="none";
		EnterName.style.display="none";

		gameCountdown.style.display="block";

		setTimeout(function() {
			gameCountdown.innerHTML="Starting in "+2;
			setTimeout(function() {
				gameCountdown.innerHTML="Starting in "+1
				setTimeout(function () {level1Easy()}, 1000);
			}, 1000);
		}, 1000);


		

	}

	function startGameMedium() {

		console.log("Medium difficulty chosen");
		fourK.style.display="none";
		welcome.style.display="none";
		foot.style.display="none";
		difficultyChoose.style.display="none";
		difficultyDiv.style.display="none";
		EnterName.style.display="none";

		gameCountdown.style.display="block";

		setTimeout(function() {
			gameCountdown.innerHTML="Starting in "+2;
			setTimeout(function() {
				gameCountdown.innerHTML="Starting in "+1
				setTimeout(function () {level1Medium()}, 1000);
			}, 1000);
		}, 1000);


	}

	function startGameHard() {
		
		console.log("Hard difficulty chosen");
		fourK.style.display="none";
		welcome.style.display="none";
		foot.style.display="none";
		difficultyChoose.style.display="none";
		difficultyDiv.style.display="none";
		EnterName.style.display="none";

		gameCountdown.style.display="block";

		setTimeout(function() {
			gameCountdown.innerHTML="Starting in "+2;
			setTimeout(function() {
				gameCountdown.innerHTML="Starting in "+1
				setTimeout(function () {level1Easy()}, 1000);
			}, 1000);
		}, 1000);

	}

	function level1Easy() {

			console.log("Level 1 Easy")

			gameContainer.style.transition="0s";
			gameContainer.style.width="1900px";
			gameContainer.style.height="900px";
			gameContainer.style.display="grid";
			gameContainer.style.gridTemplateColumns="repeat(5, 20%)";
			gameContainer.style.gridTemplateRows="repeat(5, 20%)";

			fourK.style.display="block";
			difficultyDisplay.style.display="block";
			difficultyDisplay.innerHTML="Difficulty: Easy</br>";
			nameDisplay.style.display="block";	
			levelName.style.display="block";
			puzzleDiv.style.display="block";
			puzzlePieceDiv.style.display="block";
			levelUitleg.style.display="block";
			gameCountdown.style.display="none";

			if (EnterName.value==""||EnterName.value=="Enter username") {
				nameDisplay.innerHTML="Guest"
			}

			else {
				nameDisplay.innerHTML="Username: "+EnterName.value;
			}
			
			puzzleDiv.appendChild(puzzleBlankPiece1);
			puzzleDiv.appendChild(puzzleBlankPiece2);
			puzzleDiv.appendChild(puzzleBlankPiece3);
			puzzleDiv.appendChild(puzzleBlankPiece4);
			puzzleDiv.appendChild(puzzleBlankPiece5);
			puzzleDiv.appendChild(puzzleBlankPiece6);
			puzzleDiv.appendChild(puzzleBlankPiece7);
			puzzleDiv.appendChild(puzzleBlankPiece8);
			puzzleDiv.appendChild(puzzleBlankPiece9);

			puzzlePieceDiv.appendChild(puzzleEasyPiece1);
			puzzlePieceDiv.appendChild(puzzleEasyPiece2);
			puzzlePieceDiv.appendChild(puzzleEasyPiece3);
			puzzlePieceDiv.appendChild(puzzleEasyPiece4);
			puzzlePieceDiv.appendChild(puzzleEasyPiece5);
			puzzlePieceDiv.appendChild(puzzleEasyPiece6);
			puzzlePieceDiv.appendChild(puzzleEasyPiece7);
			puzzlePieceDiv.appendChild(puzzleEasyPiece8);
			puzzlePieceDiv.appendChild(puzzleEasyPiece9);

	}

	function level1Medium() {


		
			console.log("Level 1 Medium");

			gameContainer.style.transition="0s";
			gameContainer.style.width="1900px";
			gameContainer.style.height="900px";
			gameContainer.style.display="grid";
			gameContainer.style.gridTemplateColumns="repeat(5, 20%)";
			gameContainer.style.gridTemplateRows="repeat(5, 20%)";

			fourK.style.display="block";
			difficultyDisplay.style.display="block";
			difficultyDisplay.innerHTML="Difficulty: Medium</br>";
			nameDisplay.style.display="block";	
			levelName.style.display="block";
			puzzleDiv.style.display="block";
			puzzlePieceDiv.style.display="block";
			levelUitleg.style.display="block";

			gameCountdown.style.display="none";

			nameDisplay.innerHTML="Username: "+EnterName.value;

			if (EnterName.value==""||EnterName.value=="Enter username") {
				nameDisplay.innerHTML="Guest"
			}

			else {
				nameDisplay.innerHTML="Username: "+EnterName.value;
			}

	}

	function level1Hard() {
		
			console.log("Level 1 Hard");

			gameContainer.style.transition="0s";
			gameContainer.style.width="1900px";
			gameContainer.style.height="900px";
			gameContainer.style.display="grid";
			gameContainer.style.gridTemplateColumns="repeat(5, 20%)";
			gameContainer.style.gridTemplateRows="repeat(5, 20%)";

			fourK.style.display="block";
			difficultyDisplay.style.display="block";
			difficultyDisplay.innerHTML="Difficulty: Hard</br>";
			nameDisplay.style.display="block";	
			levelName.style.display="block";
			puzzlePieceDiv.style.display="block";
			levelUitleg.style.display="block";

			gameCountdown.style.display="none";

			nameDisplay.innerHTML="Username: "+EnterName.value;

			if (EnterName.value==""||EnterName.value=="Enter username") {
				nameDisplay.innerHTML="Guest"
			}

			else {
				nameDisplay.innerHTML="Username: "+EnterName.value;
			}

	}

//Functions



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

	gameContainer.appendChild(gameCountdown);

	gameContainer.appendChild(difficultyDisplay);

	gameContainer.appendChild(puzzleDiv);

	gameContainer.appendChild(puzzleDiv);

	gameContainer.appendChild(levelName);

	gameContainer.appendChild(levelUitleg);

	gameContainer.appendChild(puzzlePieceDiv);

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

	gameCountdown.appendChild(gameCountdownText);

	levelName.appendChild(puzzleLevelText);

	levelUitleg.appendChild(puzzleUitleg);

//appendingNeededElements