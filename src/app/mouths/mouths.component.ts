import { Component } from '@angular/core';

@Component ({
    selector: 'mouths',
    templateUrl: './mouths.component.html',
    styleUrls: []
})

export class MouthsComponent {
    buttonMouthRemove () {
        var elem = document.querySelector("#relativeContainer .mouth");
        if(elem !== null){
            elem.parentNode.removeChild(elem);
        }
    }
    buttonMouthStyle () {        
        var elemNew = document.querySelector("#relativeContainer .mouth");
        elemNew.setAttribute("style", "position: absolute; top: 0; left: 0; margin-top: 0;");
    }
    buttonMouth1 () {
        this.buttonMouthRemove();
        var relativeContainer = document.getElementById("relativeContainer");
        relativeContainer.innerHTML += document.getElementById("mouth1").innerHTML;
        this.buttonMouthStyle ();
    }
}