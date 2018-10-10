import { Component } from '@angular/core';

@Component ({
    selector: 'female-skirts',
    templateUrl: './female-skirts.component.html',
    styleUrls: ['../button_style_down.css', '../item.css', '../avatarOptions.css', '../leftPadding.css']
})

export class FemaleSkirtsComponent {
    skirtColor : string = "black";
    removeSkirt () {
        var elem = document.querySelector("#relativeContainer .pants");
        if( elem != null ) { elem.parentNode.removeChild(elem); }
    }
    buttonSkirtStyle () {        
        var elemNew = document.querySelector("#relativeContainer .pants");
        if(elemNew !== null){
            elemNew.setAttribute("style", "position: absolute; top: 0; left: 0;");
            elemNew.setAttribute("height", "380");
            elemNew.setAttribute("width", "86");
            elemNew.setAttribute("viewBox", "202.715 584.407 86.593 380.048");
        }
    }
    female_skirt1() {
        this.removeSkirt();
        var relativeContainer = document.getElementById("relativeContainer");
        var pantsButton = document.getElementById("female_skirt1");
        relativeContainer.innerHTML += pantsButton.innerHTML;
        this.buttonSkirtStyle(); 
    } 
    female_skirt2() {
        this.removeSkirt();
        var relativeContainer = document.getElementById("relativeContainer");
        var pantsButton = document.getElementById("female_skirt2");
        relativeContainer.innerHTML += pantsButton.innerHTML;
        this.buttonSkirtStyle(); 
    } 
        
}