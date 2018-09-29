import { Component } from '@angular/core';
import { delay } from '../../node_modules/@types/q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './item.css']
})
export class AppComponent {
  title = 'Erintuitive\'s drawing interpretation app!';
  item = "body";
  showHairs () {
    setTimeout(function(){
      document.getElementById("hairstuff").style.display = "block";
    }, 300);
    this.item = "hair";
  }
}