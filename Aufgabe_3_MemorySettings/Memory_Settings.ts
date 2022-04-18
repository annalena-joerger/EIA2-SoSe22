namespace L03 {

    window.addEventListener("load", startMemory);
    
    let numberOfPairs: number;
    let cards: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"];
    let cardArray: HTMLElement[] = [];
    let activeCards: number = 0;
    let activeCardsArray: HTMLElement[] = [];
    let checkRestCards: HTMLElement[] = [];

    function startMemory(): void {
        let startMemoryGame: HTMLElement = <HTMLElement>document.querySelector(".start");
        startMemoryGame.addEventListener("click", preparePlayingField);
    }
   
    let cardSize: number;
    let formData: FormData;
    let fontColor: FormDataEntryValue | null;
    let fontStyle: FormDataEntryValue | null;
    let backGroundColor: FormDataEntryValue | null; 
    let cardColor: FormDataEntryValue | null;

    function createMemoryCard(_cards: string): void {
        let card: HTMLElement = document.createElement("div");

        card.innerHTML = "<p>" + _cards + "</p>";
        card.classList.add("card");
        card.classList.add("hidden");

        cardArray.push(card);
        checkRestCards.push(card);
        card.addEventListener("click", handleLoad);

        card.style.width = cardSize + "px";
        card.style.height = cardSize + "px";

        if (backGroundColor) { 
            card.style.backgroundColor = backGroundColor.toString();
        }
        if (cardColor) { 
            card.style.background = cardColor.toString();
        }
        if (fontColor) { 
            card.style.color = fontColor.toString();
        }
        if (fontStyle) { 
            card.style.fontFamily = fontStyle.toString();
        }
    }

    function handleLoad (_event: Event): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        if (target.classList.contains("card")) {
            activeCards++;
            if (!(activeCards > 2) && target.classList.contains("hidden") && target != activeCardsArray[0]) {
                if (target.classList.contains("hidden")) {
                    target.classList.remove("hidden");
                    target.classList.add("open");
                    activeCardsArray.push(target);
                }
            } else {
                activeCards--;
            }
            if (activeCards == 2) {
                setTimeout(compareCard1ToCard2, 1000);
            }
        }
    }

    function compareCard1ToCard2 (): void {
        if (activeCardsArray[0].innerHTML == activeCardsArray[1].innerHTML) {
            for (let i: number = 0; i < 2; i++) {
                activeCardsArray[i].classList.remove("open");
                activeCardsArray[i].classList.add("done");
            }
            checkRestCards.splice(0, 2);
        } else {
            for (let i: number = 0; i < activeCardsArray.length; i++) {
                activeCardsArray[i].classList.remove("open");
                activeCardsArray[i].classList.add("hidden");
            }
        }
        activeCardsArray = [];
        activeCards = 0;
        checkIfYouWon();
    }

    function checkIfYouWon(): void {
        if (checkRestCards.length == 0) {
            alert("Congratulations, you won the Memory-Game!");
        }
    }

    function mix (_array: any[]): any[] {
        for (var i: number = _array.length - 1; i > 0; i--) {
            var j: number = Math.floor(Math.random() * (i + 1));
            var temp: number = _array[i];
            _array[i] = _array[j];
            _array[j] = temp;
        }
        return _array;
    }

    function preparePlayingField (_event: Event): void {

        let fieldset: HTMLFormElement = <HTMLFormElement>document.querySelector(".playingfieldSettings");
        if (fieldset.classList.contains("visible")) {
            fieldset.classList.remove("visible");
            fieldset.classList.add("is-hidden");
        }
        formData = new FormData(document.forms[0]); 
        console.log(formData);
        
        cardSize = Number(formData.get("Slider"));
        backGroundColor = formData.get("ColorBackground"); 
        cardColor = formData.get("CColor"); 
        fontColor = formData.get("FColor"); 
        fontStyle = formData.get("Radiogroup"); 

        let pairOfCards: FormDataEntryValue | null = formData.get("Stepper"); 
        if (pairOfCards) {
        numberOfPairs = Number(pairOfCards);
        }
        else {
            numberOfPairs = 5;
        }

        for (let i: number = 0; i < numberOfPairs; i++) {
            createMemoryCard(cards[i]);
            createMemoryCard(cards[i]);
        }

        mix(cardArray);

        for (let i: number = 0; i < cardArray.length; i++) {
            let userGameStart: HTMLDivElement = <HTMLDivElement>document.getElementById("userGameStart");
            userGameStart.appendChild(cardArray[i]);
        }
    }

}