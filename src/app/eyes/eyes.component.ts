import { Component } from '@angular/core';

@Component ({
    selector: 'eyes',
    templateUrl: './eyes.component.html',
    styleUrls: ['../button_style_down.css', '../leftPadding.css', '../avatarOptions.css']
})

export class EyesComponent {
    eyeColor : string = 'brown';
    eyeRemove () {
        var elem = document.querySelector("#relativeContainer .eyes");
        if(elem !== null){
            elem.parentNode.removeChild(elem);
        }
    }
    buttonEyes1 () {    
        this.eyeRemove();
        var relativeContainer = document.getElementById("relativeContainer"); 
        relativeContainer.innerHTML += document.getElementById("buttonEyes1").innerHTML;
        var elemNew = document.querySelector("#relativeContainer .eyes");
        if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -2px; left: 0px; margin-top: 0;"); }
    }
    buttonEyes2 () {    
        this.eyeRemove();
        var relativeContainer = document.getElementById("relativeContainer"); 
        relativeContainer.innerHTML += document.getElementById("buttonEyes2").innerHTML;
        var elemNew = document.querySelector("#relativeContainer .eyes");
        if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -7px; left: 0px; margin-top: 0;"); }
    }
    buttonEyes3 () {    
        this.eyeRemove();
        var relativeContainer = document.getElementById("relativeContainer"); 
        relativeContainer.innerHTML += document.getElementById("buttonEyes3").innerHTML;
        var elemNew = document.querySelector("#relativeContainer .eyes");
        if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -2px; left: 0px; margin-top: 0;"); }
    }
    buttonEyes4 () {    
        this.eyeRemove();
        var relativeContainer = document.getElementById("relativeContainer"); 
        relativeContainer.innerHTML += document.getElementById("buttonEyes4").innerHTML;
        var elemNew = document.querySelector("#relativeContainer .eyes");
        if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -2px; left: 0px; margin-top: 0;"); }
    }
    buttonEyes5 () {    
        this.eyeRemove();
        var relativeContainer = document.getElementById("relativeContainer"); 
        relativeContainer.innerHTML += document.getElementById("buttonEyes5").innerHTML;
        var elemNew = document.querySelector("#relativeContainer .eyes");
        if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: 2px; left: 0px; margin-top: 0;"); }
    }
    buttonEyes6 () {    
        this.eyeRemove();
        var relativeContainer = document.getElementById("relativeContainer"); 
        relativeContainer.innerHTML += document.getElementById("buttonEyes6").innerHTML;
        var elemNew = document.querySelector("#relativeContainer .eyes");
        if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -2px; left: 0px; margin-top: 0;"); }
    }
    negativeTwo () {
        var elemNew = document.querySelector("#relativeContainer .eyes");
        if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -2px; left: 0px; margin-top: 0;"); }
    }
    buttonEyes7 () {    
        this.eyeRemove();
        var relativeContainer = document.getElementById("relativeContainer"); 
        relativeContainer.innerHTML += document.getElementById("buttonEyes7").innerHTML;
        this.negativeTwo();
    }
    buttonEyes8 () {    
        this.eyeRemove();
        var relativeContainer = document.getElementById("relativeContainer"); 
        relativeContainer.innerHTML += document.getElementById("buttonEyes8").innerHTML;
        this.negativeTwo();
    }
    buttonEyes9 () {    
        this.eyeRemove();
        var relativeContainer = document.getElementById("relativeContainer"); 
        relativeContainer.innerHTML += document.getElementById("buttonEyes9").innerHTML;
        this.negativeTwo();
    }
    buttonEyes10 () {    
        this.eyeRemove();
        var relativeContainer = document.getElementById("relativeContainer"); 
        relativeContainer.innerHTML += document.getElementById("buttonEyes10").innerHTML;
        this.negativeTwo();
    }
    buttonEyes11 () {    
        this.eyeRemove();
        var relativeContainer = document.getElementById("relativeContainer"); 
        relativeContainer.innerHTML += document.getElementById("buttonEyes11").innerHTML;
        this.negativeTwo();
    }
}