import { Component } from '@angular/core';

@Component({
    selector: 'male-pants-stickers-two',
    templateUrl: 'male-pants-stickers2.html',
    styleUrls: ['../../button_style_down.css', '../../item.css', '../../avatarOptions.css', '../../leftPadding.css']
})

export class MalePantsStickers2Component {
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
    pants2_sticker1() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("pants2_sticker1");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    pants2_sticker10() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("pants2_sticker10");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    pants2_sticker11() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("pants2_sticker11");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    pants2_sticker12() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("pants2_sticker12");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    pants2_sticker2() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("pants2_sticker2");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    pants2_sticker3() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("pants2_sticker3");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    pants2_sticker4() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("pants2_sticker4");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    pants2_sticker5() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("pants2_sticker5");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    pants2_sticker6() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("pants2_sticker6");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    pants2_sticker7() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("pants2_sticker7");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    pants2_sticker8() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("pants2_sticker8");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    pants2_sticker9() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("pants2_sticker9");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    
}