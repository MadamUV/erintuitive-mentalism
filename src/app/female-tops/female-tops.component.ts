import { Component } from '@angular/core';

@Component ({
    selector: 'female-tops',
    templateUrl: './female-tops.html',
    styleUrls: ['../button_style_down.css', '../item.css', '../avatarOptions.css', '../leftPadding.css']
})

export class FemaleTopsComponent {
    topColor : string = "black";
    sleeveColor : string = "lime";
    skirtColor : string = "fuchsia";
    removeTops () {
        var elem = document.querySelector("#relativeContainer .shirt");
        if( elem != null ) { elem.parentNode.removeChild(elem); }
    }
    buttonTopsStyle () {        
        var elemNew = document.querySelector("#relativeContainer .shirt");
        if(elemNew !== null){
            elemNew.setAttribute("style", "position: absolute; top: 0; left: 0;");
            elemNew.setAttribute("height", "380");
            elemNew.setAttribute("width", "86");
            elemNew.setAttribute("viewBox", "202.715 584.407 86.593 380.048");
        }
    }
    female_shirt1() {
        this.removeTops();
        var relativeContainer = document.getElementById("relativeContainer");
        var pantsButton = document.getElementById("female_shirt1");
        relativeContainer.innerHTML += pantsButton.innerHTML;
        this.buttonTopsStyle(); 
         } 
    female_shirt10() {
    this.removeTops();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_shirt10");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonTopsStyle(); 
        } 
    female_shirt11() {
    this.removeTops();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_shirt11");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonTopsStyle(); 
        } 
    female_shirt12() {
    this.removeTops();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_shirt12");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonTopsStyle(); 
        } 
    female_shirt13() {
    this.removeTops();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_shirt13");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonTopsStyle(); 
        } 
    female_shirt14() {
    this.removeTops();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_shirt14");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonTopsStyle(); 
        } 
    female_shirt15() {
    this.removeTops();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_shirt15");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonTopsStyle(); 
        } 
    female_shirt16() {
    this.removeTops();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_shirt16");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonTopsStyle(); 
        } 
    female_shirt2() {
    this.removeTops();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_shirt2");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonTopsStyle(); 
        } 
    female_shirt3() {
    this.removeTops();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_shirt3");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonTopsStyle(); 
        } 
    female_shirt4() {
    this.removeTops();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_shirt4");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonTopsStyle(); 
        } 
    female_shirt5() {
    this.removeTops();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_shirt5");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonTopsStyle(); 
        } 
    female_shirt6() {
    this.removeTops();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_shirt6");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonTopsStyle(); 
        } 
    female_shirt7() {
    this.removeTops();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_shirt7");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonTopsStyle(); 
        } 
    female_shirt8() {
    this.removeTops();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_shirt8");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonTopsStyle(); 
        } 
    female_shirt9() {
    this.removeTops();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_shirt9");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonTopsStyle(); 
        } 
    
}