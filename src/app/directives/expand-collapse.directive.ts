import { Directive, OnInit, ElementRef, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[appExpandCollapse]'
})
export class ExpandCollapseDirective implements OnInit {

  @Input() expandCollapse:string;
  @HostListener('click') onClick() {
    console.log('This is expand collapse directive', this.expandCollapse);
  }

  constructor( private el: ElementRef ) {
   }

  ngOnInit() {
    console.log('This is expand collapse directive', this.expandCollapse);
  }

}
