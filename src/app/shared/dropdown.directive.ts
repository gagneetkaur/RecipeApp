import { Directive, OnInit, HostBinding, HostListener, EventEmitter, NgModule } from '@angular/core'; 
@Directive({
    selector: '[appDropdown]'
})

export class DropDownDirective implements OnInit{
    @HostBinding('class.open') isOpen = false;
    constructor(){

    }
    
    ngOnInit(){
    }
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}
