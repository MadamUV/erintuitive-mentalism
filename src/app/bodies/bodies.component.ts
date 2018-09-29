import { Component } from '@angular/core';


@Component({
  selector: 'bodies',
  templateUrl: './bodies.component.html',
  styleUrls: ['../button_style_down.css']
})
export class BodiesComponent {
  public insertMan() {
    var man = document.getElementById("manly").innerHTML;
    document.getElementById("relativeContainer").innerHTML = man;
  }
  public insertWoman() {
    var woman = document.getElementById("womanly").innerHTML;
    document.getElementById("relativeContainer").innerHTML = woman;
  }
}