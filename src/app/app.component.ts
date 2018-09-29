import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './item.css']
})
export class AppComponent {
  title = 'Erintuitive\'s drawing interpretation app!';
  n=0;
  itemsArray = ['bodies', 'hairs'];
  public insertMan() {
    var man = document.getElementById("manly").innerHTML;
    document.getElementById("relativeContainer").innerHTML = man;
  }
  public insertWoman() {
    var woman = document.getElementById("womanly").innerHTML;
    document.getElementById("relativeContainer").innerHTML = woman;
  }
}