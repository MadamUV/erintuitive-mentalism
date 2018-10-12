import { Component } from '@angular/core';

@Component ({
    selector: 'male-skirt',
    templateUrl: './male-skirts.html',
    styleUrls: ['../button_style_down.css', '../item.css', '../avatarOptions.css']
})

export class MaleSkirtsComponent {
    skirtsColor : string = "black";
    removeSkirts () {
        var elem = document.querySelector("#relativeContainer .pants");
        if( elem != null ) { elem.parentNode.removeChild(elem); }
    }
    buttonSkirtsStyle () {        
        var elemNew = document.querySelector("#relativeContainer .pants");
        if(elemNew !== null){
            elemNew.setAttribute("style", "position: absolute; top: 0; left: 0;");
            elemNew.setAttribute("height", "380px");
            elemNew.setAttribute("viewBox", "202.715 584.407 86.593 380.048");
        }
    }
    skirt1() {
        this.removeSkirts();
        var relativeContainer = document.getElementById("relativeContainer");
        var pantsButton = document.getElementById("skirt1");
        relativeContainer.innerHTML += pantsButton.innerHTML;
        this.buttonSkirtsStyle(); 
        } 
    skirt2() {
    this.removeSkirts();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("skirt2");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonSkirtsStyle(); 
    }         
}