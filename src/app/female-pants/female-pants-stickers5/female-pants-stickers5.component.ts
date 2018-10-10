import { Component } from '@angular/core';

@Component({
    selector: 'female-pants-stickers-five',
    templateUrl: 'female-pants-stickers5.html',
    styleUrls: ['../../button_style_down.css', '../../item.css', '../../avatarOptions.css', '../../leftPadding.css']
})

export class FemalePantsStickers5Component {
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
    female_pants5_sticker1() {
        this.removePants();
        var relativeContainer = document.getElementById("relativeContainer");
        var pantsButton = document.getElementById("female_pants5_sticker1");
        relativeContainer.innerHTML += pantsButton.innerHTML;
        this.buttonPantsStyle(); 
    } 
    female_pants5_sticker2() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_pants5_sticker2");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    female_pants5_sticker3() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_pants5_sticker3");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    female_pants5_sticker4() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_pants5_sticker4");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    female_pants5_sticker5() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_pants5_sticker5");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    female_pants5_sticker6() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_pants5_sticker6");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    female_pants5_sticker7() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_pants5_sticker7");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    female_pants5_sticker8() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_pants5_sticker8");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    female_pants5_sticker9() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_pants5_sticker9");
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