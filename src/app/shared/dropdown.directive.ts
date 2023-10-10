import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false; //css class which need to attach dynamically or detach

  @HostListener('click') toggleOpen() { //listen to a click event
    this.isOpen = !this.isOpen;
  }
}
