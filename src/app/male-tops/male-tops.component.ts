import { Component } from '@angular/core';

@Component ({
    selector: 'male-tops',
    templateUrl: './male-tops.html',
    styleUrls: ['../button_style_down.css', '../item.css', '../avatarOptions.css', '../leftPadding.css']
})

export class MaleTopsComponent {
    topColor : string = "black";
    sleeveColor : string = "orange";
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
    shirt1() {
        this.removeTops();
        var relativeContainer = document.getElementById("relativeContainer");
        var pantsButton = document.getElementById("shirt1");
        relativeContainer.innerHTML += pantsButton.innerHTML;
        this.buttonTopsStyle(); 
        } 
    shirt10() {
    this.removeTops();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("shirt10");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonTopsStyle(); 
        } 
    shirt11() {
    this.removeTops();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("shirt11");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonTopsStyle(); 
        } 
    shirt12() {
    this.removeTops();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("shirt12");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonTopsStyle(); 
        } 
    shirt13() {
    this.removeTops();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("shirt13");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonTopsStyle(); 
        } 
    shirt2() {
    this.removeTops();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("shirt2");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonTopsStyle(); 
        } 
    shirt3() {
    this.removeTops();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("shirt3");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonTopsStyle(); 
        } 
    shirt4() {
    this.removeTops();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("shirt4");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonTopsStyle(); 
        } 
    shirt5() {
    this.removeTops();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("shirt5");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonTopsStyle(); 
        } 
    shirt6() {
    this.removeTops();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("shirt6");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonTopsStyle(); 
        } 
    shirt7() {
    this.removeTops();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("shirt7");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonTopsStyle(); 
        } 
    shirt8() {
    this.removeTops();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("shirt8");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonTopsStyle(); 
        } 
    shirt9() {
    this.removeTops();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("shirt9");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonTopsStyle(); 
        }         
}