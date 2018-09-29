import { Component } from '@angular/core';


@Component({
  selector: 'bodies',
  templateUrl: './bodies.component.html',
  styleUrls: ['../button_style_down.css']
})
export class BodiesComponent {
  goToHairs() {
    
  }
  insertMan() {
    var man = document.getElementById("manly").innerHTML;
    document.getElementById("relativeContainer").innerHTML = man;
    this.goToHairs();
  }
  insertWoman() {
    var woman = document.getElementById("womanly").innerHTML;
    document.getElementById("relativeContainer").innerHTML = woman;
    document.getElementById("choices").innerHTML = '<hairs></hairs>';
    this.goToHairs();
  }
}