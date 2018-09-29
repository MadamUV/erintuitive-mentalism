import { Component } from '@angular/core';
import { delay } from '../../node_modules/@types/q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './item.css']
})
export class AppComponent {
  title = 'Erintuitive\'s drawing interpretation app!';
  n=0;
  itemsArray = ['bodies', 'hairs'];
  insertHairs () {
    setTimeout(function(){
      document.getElementById("myChoices").innerHTML = "<hairs></hairs>";
    }, 1000);
  }
}