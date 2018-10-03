import { Component } from '@angular/core';

@Component ({
    selector: 'mouths',
    templateUrl: './mouths.component.html',
    styleUrls: ['../avatarOptions.css', './mouths.css', '../button_style_down.css']
})

export class MouthsComponent {
    buttonMouthRemove () {
        var elem = document.querySelector("#relativeContainer .mouth");
        if(elem !== null){
            elem.parentNode.removeChild(elem);
        }
    }
    buttonMouthStyle () {        
        var elemNew = document.querySelector("#relativeContainer .mouth");
        elemNew.setAttribute("style", "position: absolute; top: 0; left: 0; margin-top: 0;");
    }
    buttonMouth1 () {
        this.buttonMouthRemove();
        var relativeContainer = document.getElementById("relativeContainer");
        relativeContainer.innerHTML += document.getElementById("mouth1").innerHTML;
        this.buttonMouthStyle ();
    }
    buttonMouth2 () {
        this.buttonMouthRemove();
        var relativeContainer = document.getElementById("relativeContainer");
        relativeContainer.innerHTML += document.getElementById("mouth2").innerHTML;
        this.buttonMouthStyle ();
    }
    buttonMouth3 () {
        this.buttonMouthRemove();
        var relativeContainer = document.getElementById("relativeContainer");
        relativeContainer.innerHTML += document.getElementById("mouth3").innerHTML;
        this.buttonMouthStyle ();
    }
    buttonMouth4 () {
        this.buttonMouthRemove();
        var relativeContainer = document.getElementById("relativeContainer");
        relativeContainer.innerHTML += document.getElementById("mouth4").innerHTML;
        this.buttonMouthStyle ();
    }
    buttonMouth5 () {
        this.buttonMouthRemove();
        var relativeContainer = document.getElementById("relativeContainer");
        relativeContainer.innerHTML += document.getElementById("mouth5").innerHTML;
        this.buttonMouthStyle ();
    }
    buttonMouth6 () {
        this.buttonMouthRemove();
        var relativeContainer = document.getElementById("relativeContainer");
        relativeContainer.innerHTML += document.getElementById("mouth6").innerHTML;
        this.buttonMouthStyle ();
    }
    buttonMouth7 () {
        this.buttonMouthRemove();
        var relativeContainer = document.getElementById("relativeContainer");
        relativeContainer.innerHTML += document.getElementById("mouth7").innerHTML;
        this.buttonMouthStyle ();
    }
    buttonMouth8 () {
        this.buttonMouthRemove();
        var relativeContainer = document.getElementById("relativeContainer");
        relativeContainer.innerHTML += document.getElementById("mouth8").innerHTML;
        this.buttonMouthStyle ();
    }
    buttonMouth9 () {
        this.buttonMouthRemove();
        var relativeContainer = document.getElementById("relativeContainer");
        relativeContainer.innerHTML += document.getElementById("mouth9").innerHTML;
        this.buttonMouthStyle ();
    }
    buttonMouth10 () {
        this.buttonMouthRemove();
        var relativeContainer = document.getElementById("relativeContainer");
        relativeContainer.innerHTML += document.getElementById("mouth10").innerHTML;
        this.buttonMouthStyle ();
    }
    buttonMouth11 () {
        this.buttonMouthRemove();
        var relativeContainer = document.getElementById("relativeContainer");
        relativeContainer.innerHTML += document.getElementById("mouth11").innerHTML;
        this.buttonMouthStyle ();
    }
    buttonMouth12 () {
        this.buttonMouthRemove();
        var relativeContainer = document.getElementById("relativeContainer");
        relativeContainer.innerHTML += document.getElementById("mouth12").innerHTML;
        this.buttonMouthStyle ();
    }
    buttonMouth13 () {
        this.buttonMouthRemove();
        var relativeContainer = document.getElementById("relativeContainer");
        relativeContainer.innerHTML += document.getElementById("mouth13").innerHTML;
        this.buttonMouthStyle ();
    }
    buttonMouth14 () {
        this.buttonMouthRemove();
        var relativeContainer = document.getElementById("relativeContainer");
        relativeContainer.innerHTML += document.getElementById("mouth14").innerHTML;
        this.buttonMouthStyle ();
    }
    buttonMouth15 () {
        this.buttonMouthRemove();
        var relativeContainer = document.getElementById("relativeContainer");
        relativeContainer.innerHTML += document.getElementById("mouth15").innerHTML;
        this.buttonMouthStyle ();
    }
}