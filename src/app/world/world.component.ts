import { Component, OnInit } from '@angular/core';
//import { LocalStorageService } from 'ngx-localstorage';

@Component ({
    selector: 'world',
    templateUrl: './world.html',
    styleUrls: ['../app.component.css', './world.scss']
})
export class WorldComponent {

}

/*export class StorageAccessComponent implements OnInit{
    constructor (public _storageService: LocalStorageService) {
    }

    ngOnInit(): void {
        this._storageService.asPromisable().set
    }
}*/