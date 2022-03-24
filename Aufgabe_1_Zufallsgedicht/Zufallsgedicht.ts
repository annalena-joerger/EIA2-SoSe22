namespace randomPoem {

/*Arrays für Subjekte, Prädikate und Objekte*/
let arraySubjects: string [] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
let arrayPredicates: string [] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
let arrayObjects: string [] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

for (let index: number = 5; index >= 0; index--) {
    let sentenceComplete: string = getVerse(arraySubjects, arrayPredicates, arrayObjects);
    console.log(sentenceComplete);
}

function getVerse(_arraySubjects: string[], _arrayPredicates: string[], _arrayObjects: string[]): string { 

    let _mix1: number = Math.floor(Math.random() * _arraySubjects.length);
    let _mix2: number = Math.floor(Math.random() * _arrayPredicates.length);
    let _mix3: number = Math.floor(Math.random() * _arrayObjects.length);

    let mixSentence: string = _arraySubjects[_mix1] + " " + _arrayPredicates[_mix2] + " " + _arrayObjects[_mix3];
        
    _arraySubjects.splice(_mix1, 1);       
    _arrayPredicates.splice(_mix2, 1);
    _arrayObjects.splice(_mix3, 1);

    return mixSentence;
}
}