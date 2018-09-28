import { Component } from '@angular/core';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.css']
})
export class ItemComponent {
  n = 0;
  itemsArray = ['body', 'hairs'];
}