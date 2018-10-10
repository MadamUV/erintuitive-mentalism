import { Component } from '@angular/core';

@Component({
    selector: 'female-pants-stickers-three',
    templateUrl: 'female-pants-stickers3.html',
    styleUrls: ['../../button_style_down.css', '../../item.css', '../../avatarOptions.css', '../../leftPadding.css']
})

export class FemalePantsStickers3Component {
    removePants () {
        var elem = document.querySelector("#relativeContainer .bottomOverlay");
        if( elem != null ) { elem.parentNode.removeChild(elem); }
    }
    buttonPantsStyle () {        
        var elemNew = document.querySelector("#relativeContainer .bottomOverlay");
        if(elemNew !== null){
            elemNew.setAttribute("style", "position: absolute; top: 0; left: 0;");
            elemNew.setAttribute("height", "380px");
            elemNew.setAttribute("viewBox", "202.715 584.407 86.593 380.048");
        }
    }
    female_pants3_sticker1() {
        this.removePants();
        var relativeContainer = document.getElementById("relativeContainer");
        var pantsButton = document.getElementById("female_pants3_sticker1");
        relativeContainer.innerHTML += pantsButton.innerHTML;
        this.buttonPantsStyle(); 
        } 
    female_pants3_sticker10() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_pants3_sticker10");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    female_pants3_sticker11() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_pants3_sticker11");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    female_pants3_sticker12() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_pants3_sticker12");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    female_pants3_sticker2() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_pants3_sticker2");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    female_pants3_sticker3() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_pants3_sticker3");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    female_pants3_sticker4() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_pants3_sticker4");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    female_pants3_sticker5() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_pants3_sticker5");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    female_pants3_sticker6() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_pants3_sticker6");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    female_pants3_sticker7() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_pants3_sticker7");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    female_pants3_sticker8() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_pants3_sticker8");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    female_pants3_sticker9() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_pants3_sticker9");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    female_pants_all_sticker1() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_pants_all_sticker1");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    female_pants_all_sticker2() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_pants_all_sticker2");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
        
}