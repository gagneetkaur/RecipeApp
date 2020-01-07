import { Component,OnInit, EventEmitter } from '@angular/core';
import {Output} from '@angular/Core';

@Component({
templateUrl: './header.component.html',
selector: 'app-header',
styleUrls: ['./header.component.scss']
})

export class HeaderComponent{
    @Output() featureSelected = new EventEmitter<string>();
    OnSelect(feature: string){
        this.featureSelected.emit(feature);
    }
}