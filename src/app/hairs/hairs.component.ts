import { Component } from '@angular/core';


@Component({
  selector: 'hairs',
  templateUrl: './hairs.component.html',
  styleUrls: ['./hairs.css', '../button_style_down.css', '../avatarOptions.css']
})
export class HairsComponent {
  insertMan() {
    var man = document.getElementById("manly").innerHTML;
    document.getElementById("relativeContainer").innerHTML = man;
    document.getElementById("choices").innerHTML = '<mouths></mouths>';
  }
  buttonHairRemove() {
    var elem = document.querySelector("#relativeContainer .hair");
    if(elem !== null){
      elem.parentNode.removeChild(elem);
    }
    elem = document.querySelector("#relativeContainer .hairBack");
    if(elem !== null){
      elem.parentNode.removeChild(elem);
    }
  }
  buttonHair1(){
    var hair = document.getElementById("hair1").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair1").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -34px; left: -8px; margin-top: 0;"); }
  }
  buttonHair2(){
    var hair = document.getElementById("hair2").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair2").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -12px; left: -24; margin-top: 0;"); }
  }
  buttonHair3(){
    var hair = document.getElementById("hair3").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair3").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -5px; left: -5px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair4(){
    var hair = document.getElementById("hair4").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair4").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -3px; left: -4px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair5(){
    var hair = document.getElementById("hair5").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair5").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -28px; left: -5px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair6(){
    var hair = document.getElementById("hair6").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair6").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -4px; left: -5px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair7(){
    var hair = document.getElementById("hair7").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair7").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: 0; left: -6px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair8(){
    var hair = document.getElementById("hair8").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair8").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -2px; left: 7.5px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair9(){
    var hair = document.getElementById("hair9").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair9").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -37px; left: 24px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair10(){
    var hair = document.getElementById("hair10").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair10").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -1px; left: 6px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair11(){
    var hair = document.getElementById("hair11").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair11").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -8px; left: -2px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair12(){
    var hair = document.getElementById("hair12").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair12").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -7.2px; left: 7px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair13(){
    var hair = document.getElementById("hair13").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair13").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -13px; left: -29px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair14(){
    var hair = document.getElementById("hair14").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair14").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -24px; left: 1px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair15(){
    var hair = document.getElementById("hair15").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair15").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -16px; left: -3px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair16(){
    var hair = document.getElementById("hair16").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair16").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -37px; left: -1px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair17(){
    var hair = document.getElementById("hair17").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair17").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -27px; left: -1px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair18(){
    var hair = document.getElementById("hair18").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair18").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -11px; left: 8px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair19(){
    var hair = document.getElementById("hair19").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair19").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -14px; left: -15px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair20(){
    var hair = document.getElementById("hair20").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair20").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -29px; left: -11px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair21(){
    var hair = document.getElementById("hair21").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair21").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -20px; left: 7px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair22(){
    var hair = document.getElementById("hair22").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair22").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -15px; left: -30px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair23(){
    var hair = document.getElementById("hair23").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair23").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -12px; left: -3px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair24(){
    var hair = document.getElementById("hair24").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair24").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -28px; left: 4px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair25(){
    var hair = document.getElementById("hair25").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair25").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -27px; left: 9px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair26(){
    this.buttonHairRemove();
    var hair = document.querySelector("#hair26 .hair");
    var hairBack = document.querySelector("#hair26 .hairBack");
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += hair;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -4px; left: 2.73px; margin-top: 0; z-index: 4;"); }
    relativeContainer.innerHTML += hairBack;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -4px; left: 3px; margin-top: 0; z-index: -4;"); }
  }
  buttonHair27(){
    var hair = document.getElementById("hair27").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair27").innerHTML;    
    var elemNew = document.querySelector("#relativeContainer .hair"); 
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -7px; left: -8px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair28(){
    var hair = document.getElementById("hair28").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair28").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair"); 
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -11px; left: 1px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair29(){
    var hair = document.getElementById("hair29").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair29").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair"); 
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -23px; left: 4px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair30(){
    var hair = document.getElementById("hair30").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair30").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair"); 
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -14px; left: -13px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair31(){
    var hair = document.getElementById("hair31").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair31").innerHTML;
    if(document.querySelector("#relativeContainer .hair") !== null){
      var elemNew = document.querySelector("#relativeContainer .hair"); 
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -22px; left: 4px; margin-top: 0; z-index: 4;"); }
    }
  }
  buttonHair32(){
    var hair = document.getElementById("hair32").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair32").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair"); 
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -14px; left: 4px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair33(){
    var hair = document.getElementById("hair33").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair33").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -11px; left: -29px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair34(){
    var hair = document.getElementById("hair34").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair34").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -14px; left: 4px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair35(){
    var hair = document.getElementById("hair35").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair35").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -14px; left: -2px; margin-top: 0; z-index: 4;"); }
  }
  buttonHair36() {
    var hair = document.getElementById("hair36").innerHTML;
    this.buttonHairRemove();
    var relativeContainer = document.getElementById("relativeContainer");
    relativeContainer.innerHTML += document.getElementById("hair36").innerHTML;
    var elemNew = document.querySelector("#relativeContainer .hair");
    if(elemNew !== null ) { elemNew.setAttribute("style", "position: absolute; top: -14px; left: 0; margin-top: 0; z-index: 4;"); }
  }
}