namespace EventInspector {
    window.addEventListener("load", handleLoad);

    /*Funktion handleLoad*/
    function handleLoad(): void {

        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
    }

    /*Funktion setInfoBox*/
    function setInfoBox(_event: MouseEvent): void {
        let x: number = _event.clientX;
        let y: number = _event.clientY;
        let mousePosition: string = "X: " + x + "px " + "Y: " + y + "px ";

        let objectTarget: EventTarget = <EventTarget>_event.target;
        let spanPosition: HTMLSpanElement = <HTMLSpanElement>document.querySelector("#span");

        spanPosition.innerHTML = mousePosition + objectTarget;
        spanPosition.style.left = x + "px";
        spanPosition.style.top = y + "px";
    }

    /*Funktion logInfo*/
    function logInfo(_event: Event): void {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event.composedPath());
    }   
}