import { Component } from '@angular/core';


@Component({
  selector: 'bodies',
  templateUrl: './bodies.component.html',
  styleUrls: ['./bodies.css', '../button_style_down.css']
})
export class BodiesComponent {
  insertMan() {
    var man = document.getElementById("manly").innerHTML;
    document.getElementById("relativeContainer").innerHTML = man;
    document.getElementById("choices").innerHTML = '<mouths></mouths>';
  }
  insertWoman() {
    var woman = document.getElementById("womanly").innerHTML;
    document.getElementById("relativeContainer").innerHTML = woman;
    document.getElementById("choices").innerHTML = '<mouths></mouths>';
  }
  bodyColor : string = "tan";
}