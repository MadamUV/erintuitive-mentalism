import { Component } from '@angular/core';
import { delay } from '../../node_modules/@types/q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './item.css']
})
export class AppComponent {
  title = 'Erintuitive\'s drawing interpretation app!';
  mainMessage : string = "I interpret your personality from your avatar, too!";
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
  showBottomOverlays() {
    document.getElementById("pickAColor").innerHTML = "";
    if(document.querySelector("#relativeContainer .woman") != null) {
      if(document.querySelector("#relativeContainer .pants1") != null) {
        setTimeout(function(){
          document.getElementById("femalePantsStickers1").style.display = "block";
          document.getElementById("femalePants").innerHTML = "";
        }, 300);
      }
      else if(document.querySelector("#relativeContainer .pants2") != null) {
        setTimeout(function(){
          document.getElementById("femalePantsStickers2").style.display = "block";
          document.getElementById("femalePants").innerHTML = "";
        }, 300);
      }
    }
  }
}