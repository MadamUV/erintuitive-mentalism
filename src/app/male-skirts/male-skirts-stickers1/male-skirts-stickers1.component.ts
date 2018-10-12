import { Component } from '@angular/core';

@Component ({
    selector: 'male-skirts-stickers-one',
    templateUrl: './male-skirts-stickers1.html',
    styleUrls: ['../../button_style_down.css', '../../item.css', '../../avatarOptions.css']
})

export class MaleSkirtsStickers1Component {
    removeSkirts () {
        var elem = document.querySelector("#relativeContainer .bottomOverlay");
        if( elem != null ) { elem.parentNode.removeChild(elem); }
    }
    buttonSkirtsStyle () {        
        var elemNew = document.querySelector("#relativeContainer .bottomOverlay");
        if(elemNew !== null){
            elemNew.setAttribute("style", "position: absolute; top: 0; left: 0;");
            elemNew.setAttribute("height", "380px");
            elemNew.setAttribute("viewBox", "202.715 584.407 86.593 380.048");
        }
    }
    skirt1_sticker1() {
        this.removeSkirts();
        var relativeContainer = document.getElementById("relativeContainer");
        var pantsButton = document.getElementById("skirt1_sticker1");
        relativeContainer.innerHTML += pantsButton.innerHTML;
        this.buttonSkirtsStyle(); 
        } 
    skirt1_sticker2() {
    this.removeSkirts();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("skirt1_sticker2");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonSkirtsStyle(); 
        } 
    skirt1_sticker3() {
    this.removeSkirts();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("skirt1_sticker3");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonSkirtsStyle(); 
        } 
    skirt1_sticker4() {
    this.removeSkirts();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("skirt1_sticker4");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonSkirtsStyle(); 
        }         
}