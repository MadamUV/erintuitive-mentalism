import { Component } from '@angular/core';

@Component ({
    selector: 'male-pants',
    templateUrl: './male-pants.component.html',
    styleUrls: ['../button_style_down.css', '../item.css', '../avatarOptions.css']
})

export class MalePantsComponent {
    pantsColor : string = "black";
    removePants () {
        var elem = document.querySelector("#relativeContainer .pants");
        if( elem != null ) { elem.parentNode.removeChild(elem); }
    }
    buttonPantsStyle () {        
        var elemNew = document.querySelector("#relativeContainer .pants");
        if(elemNew !== null){
            elemNew.setAttribute("style", "position: absolute; top: 0; left: 0;");
            elemNew.setAttribute("height", "380px");
        }
    }
    buttonMalePants1 () {
        this.removePants();
        var relativeContainer = document.getElementById("relativeContainer");
        var pantsButton = document.getElementById("buttonMalePants1");
        relativeContainer.innerHTML += pantsButton.innerHTML;
        this.buttonPantsStyle();
    }
    buttonMalePants2 () {
        this.removePants();
        var relativeContainer = document.getElementById("relativeContainer");
        var pantsButton = document.getElementById("buttonMalePants2");
        relativeContainer.innerHTML += pantsButton.innerHTML;
        this.buttonPantsStyle();
    }
    buttonMalePants3 () {
        this.removePants();
        var relativeContainer = document.getElementById("relativeContainer");
        var pantsButton = document.getElementById("buttonMalePants3");
        relativeContainer.innerHTML += pantsButton.innerHTML;
        this.buttonPantsStyle();
    }
}