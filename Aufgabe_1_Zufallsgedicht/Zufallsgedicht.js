var randomPoem;
(function (randomPoem) {
    /*Arrays für Subjekte, Prädikate und Objekte*/
    let arraySubjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let arrayPredicates = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let arrayObjects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    for (let index = 5; index >= 0; index--) {
        let sentenceComplete = getVerse(arraySubjects, arrayPredicates, arrayObjects);
        console.log(sentenceComplete);
    }
    function getVerse(_arraySubjects, _arrayPredicates, _arrayObjects) {
        let _mix1 = Math.floor(Math.random() * _arraySubjects.length);
        let _mix2 = Math.floor(Math.random() * _arrayPredicates.length);
        let _mix3 = Math.floor(Math.random() * _arrayObjects.length);
        let mixSentence = _arraySubjects[_mix1] + " " + _arrayPredicates[_mix2] + " " + _arrayObjects[_mix3];
        _arraySubjects.splice(_mix1, 1);
        _arrayPredicates.splice(_mix2, 1);
        _arrayObjects.splice(_mix3, 1);
        return mixSentence;
    }
})(randomPoem || (randomPoem = {}));
//# sourceMappingURL=Zufallsgedicht.js.map