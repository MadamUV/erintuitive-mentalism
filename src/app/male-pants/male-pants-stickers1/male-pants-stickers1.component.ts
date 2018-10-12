import { Component } from '@angular/core';

@Component({
    selector: 'male-pants-stickers-one',
    templateUrl: 'male-pants-stickers1.html',
    styleUrls: ['../../button_style_down.css', '../../item.css', '../../avatarOptions.css', '../../leftPadding.css']
})

export class MalePantsStickers1Component {
    removePants () {
        var elem = document.querySelector("#relativeContainer .bottomOverlay");
        if( elem != null ) { elem.parentNode.removeChild(elem); }
    }
    buttonPantsStyle () {        
        var elemNew = document.querySelector("#relativeContainer .bottomOverlay");
        if(elemNew !== null){
            elemNew.setAttribute("style", "position: absolute; top: 0; left: 0;");
            elemNew.setAttribute("height", "380px");
            elemNew.setAttribute("viewBox", "202.715 584.407 86.593 380.048")
        } 
    }
    pants1_sticker1() {
        this.removePants();
        var relativeContainer = document.getElementById("relativeContainer");
        var pantsButton = document.getElementById("pants1_sticker1");
        relativeContainer.innerHTML += pantsButton.innerHTML;
        this.buttonPantsStyle(); 
        } 
    pants1_sticker10() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("pants1_sticker10");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    pants1_sticker11() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("pants1_sticker11");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    pants1_sticker12() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("pants1_sticker12");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    pants1_sticker13() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("pants1_sticker13");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    pants1_sticker14() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("pants1_sticker14");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    pants1_sticker15() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("pants1_sticker15");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    pants1_sticker16() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("pants1_sticker16");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    pants1_sticker20() {
        this.removePants();
        var relativeContainer = document.getElementById("relativeContainer");
        var pantsButton = document.getElementById("pants1_sticker20");
        relativeContainer.innerHTML += pantsButton.innerHTML;
        this.buttonPantsStyle(); 
    }
    pants1_sticker17() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("pants1_sticker17");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    pants1_sticker2() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("pants1_sticker2");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    pants1_sticker3() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("pants1_sticker3");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    pants1_sticker4() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("pants1_sticker4");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    pants1_sticker5() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("pants1_sticker5");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    pants1_sticker6() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("pants1_sticker6");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    pants1_sticker7() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("pants1_sticker7");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    pants1_sticker8() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("pants1_sticker8");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
    pants1_sticker9() {
    this.removePants();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("pants1_sticker9");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonPantsStyle(); 
        } 
        
}