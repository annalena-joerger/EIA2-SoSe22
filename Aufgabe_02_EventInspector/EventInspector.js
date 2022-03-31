var EventInspector;
(function (EventInspector) {
    window.addEventListener("load", handleLoad);
    /*Funktion handleLoad*/
    function handleLoad() {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
    }
    /*Funktion setInfoBox*/
    function setInfoBox(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        let mousePosition = "X: " + x + "px " + "Y: " + y + "px ";
        let objectTarget = _event.target;
        let spanPosition = document.querySelector("#span");
        spanPosition.innerHTML = mousePosition + objectTarget;
        spanPosition.style.left = x + "px";
        spanPosition.style.top = y + "px";
    }
    /*Funktion logInfo*/
    function logInfo(_event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event.composedPath());
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=EventInspector.js.map