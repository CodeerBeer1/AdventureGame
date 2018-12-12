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
	difficultyDisplay.setAttribute("class", "gameClass");

	var puzzleDiv=document.createElement("div");
	puzzleDiv.setAttribute("id", "puzzleDiv");
	puzzleDiv.setAttribute("class", "gameClass");

	var EnterName=document.createElement("input");
	EnterName.setAttribute("id", "EnterName");
	EnterName.setAttribute("value", "Enter username");
	EnterName.setAttribute("onclick", "EnterName.value=null");

	var gameCountdown=document.createElement("p");
	gameCountdown.setAttribute("id", "gameCountdown");

	var timerUitleg=document.createElement("p");
	timerUitleg.setAttribute("id", "timerUitleg");

	var nameDisplay=document.createElement("p");
	nameDisplay.setAttribute("id", "nameDisplay");
	nameDisplay.setAttribute("class", "gameClass");

	var points=document.createElement("p");
	points.setAttribute("id", "points");
	points.setAttribute("class", "gameClass");

	var youLostModal=document.createElement("div");
	youLostModal.setAttribute("id", "youLostModal");

	var youLostModalText=document.createElement("p");
	youLostModalText.setAttribute("id", "youLostModalText");

	var retryButton=document.createElement("button");
	retryButton.setAttribute("id", "retryButton");
	retryButton.setAttribute("onclick", "retry()");

	var levelName=document.createElement("p");
	levelName.setAttribute("id", "levelName");
	levelName.setAttribute("class", "gameClass");

	var levelUitleg=document.createElement("p");
	levelUitleg.setAttribute("id", "levelUitleg");
	levelUitleg.setAttribute("class", "gameClass");

	var timerGame=document.createElement("div");
	timerGame.setAttribute("id", "timerGame");
	timerGame.setAttribute("class", "gameClass");

	var timerGameBalk=document.createElement("div");
	timerGameBalk.setAttribute("id", "timerGameBalk");

	var inGameNextButton=document.createElement("button");
	inGameNextButton.setAttribute("id", "inGameNextButton")
	inGameNextButton.setAttribute("onclick", "level2Easy()");
	inGameNextButton.setAttribute("class", "gameClass");

		//PuzzleEasy

		//PuzzleEasy

		//PuzzleMedium


		//PuzzleMedium

		//PuzzleHard



		//PuzzleHard

	var puzzlePieceDiv=document.createElement("div");
	puzzlePieceDiv.setAttribute("id", "puzzlePieceDiv");

	var hr=document.createElement("hr");

		//MouseSpammer

			var mouseSpamButton=document.createElement("button");
			mouseSpamButton.setAttribute("id", "mouseSpamButton");


		//MouseSpammer

//CreatingNeededElements



//GameVars

	var timerGameBalkSize=490;
	
	var pointsCount=100;

	var spamCounter = 0;

	var easyPuzzlePieces=[
		"img/puzzlepiece1.png",
		"img/puzzlepiece2.jpg",
		"img/puzzlepiece3.jpg",
		"img/puzzlepiece4.jpg",
		"img/puzzlepiece5.jpg",
		"img/puzzlepiece6.jpg",
		"img/puzzlepiece7.jpg",
		"img/puzzlepiece8.jpg",
		"img/puzzlepiece9.jpg"
	]

	var mediumPuzzlePieces=[
		"img/mediumpiece1.jpg",
		"img/mediumpiece2.jpg",
		"img/mediumpiece3.jpg",
		"img/mediumpiece4.jpg",
		"img/mediumpiece5.jpg",
		"img/mediumpiece6.jpg",
		"img/mediumpiece7.jpg",
		"img/mediumpiece8.jpg",	
		"img/mediumpiece9.jpg",
		"img/mediumpiece10.jpg",
		"img/mediumpiece11.jpg",
		"img/mediumPiece12.jpg",
		"img/mediumPiece13.jpg",
		"img/mediumPiece14.jpg",
		"img/mediumPiece15.jpg",
		"img/mediumPiece16.jpg",
		"img/mediumPiece17.jpg",
		"img/mediumPiece18.jpg",
		"img/mediumPiece19.jpg",
		"img/mediumPiece20.jpg",
		"img/mediumPiece21.jpg",
		"img/mediumPiece22.jpg",
		"img/mediumPiece23.jpg",
		"img/mediumPiece24.jpg",
		"img/mediumPiece25.jpg"
	]

	var puzzleSelect

//GameVars



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
	var modalManualTextNode=document.createTextNode("In de verhaal moet je een spel spelen. Je kan kiezen tussen Easy, Medium en Hard difficulty. Bij iedere difficulty heb je andere tijden en moeilijkheden om de level te halen. Je krijgt ook punten die afhankelijk zijn van de difficulty, en je krijgt bij elke difficulty in de begin 100 punten. (Geoptimaliseerd voor Google Chrome)");
	var sceneOneText=document.createTextNode("Er was is een Henk. Hij was dik, lang en verlegen. Hij wou even naar buiten om boodschappen te doen, hij kwam onderweg zijn buurman Koen tegen en zei hoi tegen hem.");
	var sceneTwoText=document.createTextNode("Henk liep naar de supermarkt. Voor de supermarkt waren veel berenvallen voor geen reden. Henk was slechtziend dus zag het niet. Hij stapte op een val en zijn voet was afgehakt door de stekelige tanden van de val. Henk en zijn voet vielen allebij in een put naast hem.");
	var sceneThreeText=document.createTextNode("In de put stond stoel met een pc met NVIDIA GeForce RTX 2080 Ti, Intel Core i9 8000, een maxxter muis en een keyboard, maar het had wel gare speakers. En het had een 4K display 140Hz HDR etc.");
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
	var gameCountdownText=document.createTextNode("Starting in "+5);
	var timerUitlegText=document.createTextNode("The red bar indicates how much blood is left in your body. Finish all the levels before you die!")
	var puzzleLevelText=document.createTextNode("Puzzle");
	var puzzleUitleg=document.createTextNode("Click on a puzzle piece that you want to choose and place it somewhere in the puzzle container by clicking it.")
	var inGameNextButtonText=document.createTextNode("Next level");
	var mouseSpammerUitleg=document.createTextNode("Click as many times as you can on this button in 10 seconds.");
	var spamCounterText=document.createTextNode(spamCounter);
	var pointsText=document.createTextNode("Points: "+pointsCount);
	var youLostModalTextNode=document.createTextNode("You Died");

//TextNodes



//Functions

	function retry(argument) {
		
		youLostModal.style.display="none";
		var gameClass=document.querySelectorAll("#gameContainer .gameClass").style.display="none";
		gameIntro();
	}
	
	function youLost(argument) {
		gameContainer.style.overflow="hidden";
		gameContainer.style.width="1920px";
		youLostModal.style.display="block";
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
		timerUitleg.style.display="block";

		setTimeout(function() {
			gameCountdown.innerHTML="Starting in "+4;
			setTimeout(function() {
				gameCountdown.innerHTML="Starting in "+3;
				setTimeout(function() {
					gameCountdown.innerHTML="Starting in "+2;
					setTimeout(function() {
						gameCountdown.innerHTML="Starting in "+1;
						setTimeout(function() {
							level1Easy();
					}, 1000);
				}, 1000);
			}, 1000);
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
				setTimeout(function () {level1Hard()}, 1000);
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
			timerUitleg.style.display="none";
			points.style.display="block";
			inGameNextButton.style.display="block";
			timerGame.style.display="block";

			if (EnterName.value==""||EnterName.value=="Enter username") {
				nameDisplay.innerHTML="Guest"
			}

			else {
				nameDisplay.innerHTML="Username: "+EnterName.value;
			}
			
			for (i=0;i<easyPuzzlePieces.length;i++) {
				var easyPiece=document.createElement("img");
				easyPiece.setAttribute("id", "easyPiece");
				easyPiece.setAttribute("src", easyPuzzlePieces[i]);

				easyPiece.onclick = function() {
					puzzleSelect=this.src;
				}
				puzzlePieceDiv.appendChild(easyPiece);
			}			

			for (q=0;q<easyPuzzlePieces.length;q++) {
				var easyBlanks=document.createElement("div");
				easyBlanks.setAttribute("id", "easyBlanks"+q);
				easyBlanks.setAttribute("class", "easyBlanks");
				easyBlanks.onclick = function () {
					this.style.backgroundImage="url("+puzzleSelect+")";
				}
				puzzleDiv.appendChild(easyBlanks);
			}
			
			
			
			
				var startTimerGame=setInterval(
				function() {
					timerGameBalkSize=timerGameBalkSize-0.10;
					timerGameBalk.style.width=timerGameBalkSize+'px';
					
					if (timerGameBalkSize==0) {
						youLost()
					}
				}
			,1);
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
			points.style.display="block";

			gameCountdown.style.display="none";

			nameDisplay.innerHTML="Username: "+EnterName.value;

			if (EnterName.value==""||EnterName.value=="Enter username") {
				nameDisplay.innerHTML="Guest"
			}

			else {
				nameDisplay.innerHTML="Username: "+EnterName.value;
			}

			for (i=0;i<mediumPuzzlePieces.length;i++) {
				var mediumPiece=document.createElement("img");
				mediumPiece.setAttribute("id", "easyPiece");
				mediumPiece.setAttribute("src", mediumPuzzlePieces[i]);

				mediumPiece.onclick = function() {
					puzzleSelect=this.src;
				}
				puzzlePieceDiv.appendChild(mediumPiece);
			}		

			for (q=0;q<mediumPuzzlePieces.length;q++) {
				var mediumBlanks=document.createElement("div");
				mediumBlanks.setAttribute("id", "mediumBlanks"+q);
				mediumBlanks.setAttribute("class", "mediumBlanks");
				mediumBlanks.onclick = function () {
					this.style.backgroundImage="url("+puzzleSelect+")";
				}
				puzzleDiv.appendChild(mediumBlanks);
			}
			gameContainer.appendChild(inGameNextButton);
			inGameNextButton.appendChild(inGameNextButtonText);
			inGameNextButton.style.display="block";

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
			points.style.display="block";

			gameCountdown.style.display="none";

			nameDisplay.innerHTML="Username: "+EnterName.value;

			if (EnterName.value==""||EnterName.value=="Enter username") {
				nameDisplay.innerHTML="Guest"
			}

			else {
				nameDisplay.innerHTML="Username: "+EnterName.value;
			}

	}

	function level2Easy() {
		
			console.log("Level 2 Easy");

			if (easyBlanks0.src==="img/puzzlepiece1.png") {
				points.innerHTML=pointsCount+50;
			}

			levelName.innerHTML="Mousespammer";
			levelUitleg.innerHTML=mouseSpammerUitleg.textContent;
			puzzleDiv.style.display="none";
			puzzlePieceDiv.style.display="none";

			mouseSpamButton.style.display="block";


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

	gameContainer.appendChild(timerUitleg);

	gameContainer.appendChild(difficultyDisplay);

	gameContainer.appendChild(points)

	gameContainer.appendChild(puzzleDiv);

	gameContainer.appendChild(levelName);

	gameContainer.appendChild(levelUitleg);

	gameContainer.appendChild(puzzlePieceDiv);

	gameContainer.appendChild(mouseSpamButton);

	gameContainer.appendChild(timerGame);

	gameContainer.appendChild(youLostModal);

	gameContainer.appendChild(inGameNextButton);

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

	timerUitleg.appendChild(timerUitlegText)

	levelName.appendChild(puzzleLevelText);

	points.appendChild(pointsText);

	levelUitleg.appendChild(puzzleUitleg);

	timerGame.appendChild(timerGameBalk);

	mouseSpamButton.appendChild(spamCounterText);

	inGameNextButton.appendChild(inGameNextButtonText);

	youLostModal.appendChild(youLostModalText);

	youLostModal.appendChild(retryButton)

	youLostModalText.appendChild(youLostModalTextNode)

//appendingNeededElements