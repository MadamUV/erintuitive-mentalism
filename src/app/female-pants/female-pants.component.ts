import { Component } from '@angular/core';

@Component ({
    selector: 'female-pants',
    templateUrl: './female-pants.component.html',
    styleUrls: ['../button_style_down.css', '../item.css', '../avatarOptions.css', '../leftPadding.css']
})

export class FemalePantsComponent {
    pantsColor : string = "black";
    removePants () {
        var elem = document.querySelector("#relativeContainer .pants");
        if( elem != null ) { elem.parentNode.removeChild(elem); }
    }
    buttonPantsStyle () {        
        var elemNew = document.querySelector("#relativeContainer .pants");
        if(elemNew !== null){
            elemNew.setAttribute("style", "position: absolute; top: 0; left: 0;");
            elemNew.setAttribute("height", "380");
            elemNew.setAttribute("width", "86");
        }
    }
    buttonFemalePants1() {
        this.removePants();
        var relativeContainer = document.getElementById("relativeContainer");
        var pantsButton = document.getElementById("buttonFemalePants1");
        relativeContainer.innerHTML += pantsButton.innerHTML;
        this.buttonPantsStyle();
    }
    buttonFemalePants2() {
        this.removePants();
        var relativeContainer = document.getElementById("relativeContainer");
        var pantsButton = document.getElementById("buttonFemalePants2");
        relativeContainer.innerHTML += pantsButton.innerHTML;
        this.buttonPantsStyle();
    }
    buttonFemalePants3() {
        this.removePants();
        var relativeContainer = document.getElementById("relativeContainer");
        var pantsButton = document.getElementById("buttonFemalePants3");
        relativeContainer.innerHTML += pantsButton.innerHTML;
        this.buttonPantsStyle();
    }
    buttonFemalePants4() {
        this.removePants();
        var relativeContainer = document.getElementById("relativeContainer");
        var pantsButton = document.getElementById("buttonFemalePants4");
        relativeContainer.innerHTML += pantsButton.innerHTML;
        this.buttonPantsStyle();
    }
    buttonFemalePants5() {
        this.removePants();
        var relativeContainer = document.getElementById("relativeContainer");
        var pantsButton = document.getElementById("buttonFemalePants5");
        relativeContainer.innerHTML += pantsButton.innerHTML;
        this.buttonPantsStyle();
    }
}