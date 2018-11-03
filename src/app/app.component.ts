import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './item.css']
})
export class AppComponent {
  title = 'Erin\'s avatar app!';
  avatarName = '';
  avatarPassword : string;
  mainMessage : string = "I interpret your personality from your avatar, too!";
  //bools
  drawingBool : boolean = false;
  worldBool : boolean = false;
  startOver () {
    document.getElementById("relativeContainerContainer").innerHTML = "";
    document.getElementById("bodyness").style.display = "block";
  }
  showMouths () {
    if(document.getElementById("relativeContainer").innerHTML != ""){
      setTimeout(function(){
        document.getElementById("mouthstuff").style.display = "block";
        this.mainMessage = "";
        var mouthButton = document.getElementById("mouthButton");
        mouthButton.parentNode.removeChild(mouthButton);
      }, 300);
    }
  }
  showHairs () {
    setTimeout(function(){
      document.getElementById("hairstuff").style.display = "block";
      document.getElementById("mouthstuff").innerHTML = "";
    }, 300);
    var hairButton = document.getElementById("hairButton");
    hairButton.parentNode.removeChild(hairButton);
  }
  showEyes () {
    setTimeout(function(){
      document.getElementById("eyestuff").style.display = "block";
      document.getElementById("hairstuff").innerHTML = "";
    }, 300);
  }
  showPants () {
    document.getElementById("topButton").style.display = "block";
    if(document.querySelector("#relativeContainer .man") != null) {
      setTimeout(function(){
        document.getElementById("malePants").style.display = "block";
        document.getElementById("eyestuff").innerHTML = "";
      }, 300);
    } 
    else if(document.querySelector("#relativeContainer .woman") != null) {
      setTimeout(function(){
        document.getElementById("femalePants").style.display = "block";
        document.getElementById("eyestuff").innerHTML = "";
      }, 300);
    }
  }
  showSkirt () {
    document.getElementById("topButton").style.display = "block";
    if(document.querySelector("#relativeContainer .man") != null) {
        document.getElementById("maleSkirt").style.display = "block";
        document.getElementById("eyestuff").innerHTML = "";
    }
    else if(document.querySelector("#relativeContainer .woman") != null) {
        document.getElementById("femaleSkirt").style.display = "block";
        document.getElementById("eyestuff").innerHTML = "";
    }
  }
  showTops () {
    document.getElementById("buttonName").style.display = "block";
    document.getElementById("topButton").style.display = "none";
    if(document.querySelector("#relativeContainer .woman") != null) {
      document.getElementById("femaleTops").style.display = "block";
      document.getElementById("femaleSkirt").innerHTML = "";
      document.getElementById("femalePants").innerHTML = "";
    }
    else if(document.querySelector("#relativeContainer .man") != null) {
      document.getElementById("maleTops").style.display = "block";
      document.getElementById("maleSkirt").innerHTML = "";
      document.getElementById("malePants").innerHTML = "";
    }
    document.getElementById("pickName").style.display = "block";
  }
  postAvatarWithName() {
    document.getElementById("buttonName").style.display = "block";
    document.getElementById("maleTops").style.display = "none";
    document.getElementById("femaleTops").style.display = "none";
    //post name now
    var relativeContainer = document.getElementById("relativeContainerContainer");
		relativeContainer.innerHTML = `<div id="rightBlinkless"><div class="sprite" style="webkit-transform: scale(0.45); -ms-transform: scale(0.45); transform: scale(0.45);">${relativeContainer.innerHTML}</div></div>`;
    if (this.avatarName == "Erintuitive") { 
      if (this.avatarPassword == "173281"){
        document.getElementById("buttonName").style.display = "none";
        document.getElementById("page").style.display = "none";
        this.worldBool = true;
      }
    } else {
      document.getElementById("drawing").style.display = "block";
      document.getElementById("page").style.display = "none";
    }
  }
  pickIt () {
    document.getElementById("relativeContainer").innerHTML += document.getElementById("name").getAttribute("value");
  }
  showBottomOverlays() {
    document.getElementById("pickAColor").innerHTML = "";
    if(document.querySelector("#relativeContainer .woman") != null) {
      if(document.querySelector("#relativeContainer .pants1") != null) {
        document.getElementById("femalePantsStickers1").style.display = "block";
        document.getElementById("femalePants").innerHTML = "";
      }
      else if(document.querySelector("#relativeContainer .pants2") != null) {
        document.getElementById("femalePantsStickers2").style.display = "block";
        document.getElementById("femalePants").innerHTML = "";
      }
      else if(document.querySelector("#relativeContainer .pants3") != null) {
        document.getElementById("femalePantsStickers3").style.display = "block";
        document.getElementById("femalePants").innerHTML = "";
      }
      else if(document.querySelector("#relativeContainer .pants4") != null) {
        document.getElementById("femalePantsStickers4").style.display = "block";
        document.getElementById("femalePants").innerHTML = "";
      }
      else if(document.querySelector("#relativeContainer .pants5") != null) {
        document.getElementById("femalePantsStickers5").style.display = "block";
        document.getElementById("femalePants").innerHTML = "";
      }
    }
    else if(document.querySelector("#relativeContainer .man") != null) {
      if(document.querySelector("#relativeContainer .pants1") != null) {
        document.getElementById("malePantsStickers1").style.display = "block";
        document.getElementById("malePants").innerHTML = "";
      }
      else if(document.querySelector("#relativeContainer .pants2") != null) {
        document.getElementById("malePantsStickers2").style.display = "block";
        document.getElementById("malePants").innerHTML = "";
      }
      else if(document.querySelector("#relativeContainer .skirt1") != null) {
        document.getElementById("maleSkirtsStickers1").style.display = "block";
        document.getElementById("maleSkirt").innerHTML = "";
      }
    }
  } 
  saveDrawing () {
    document.getElementById("relativeContainerContainer").style.display = "none";
    this.worldBool = true;
  }
}