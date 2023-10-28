import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // css class which need to attach dynamically or detach
  // menu is now close
  @HostBinding('class.open') isOpen = false;


  // listen to a click event
  // can also be closed by a click anywhere outside
  // target return the element where the event occured
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

  constructor(private elRef: ElementRef) {}
}
