import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-page-template',
  templateUrl: './page-template.component.html',
  styleUrls: ['./page-template.component.scss'],
})
export class PageTemplateComponent implements OnInit, AfterViewInit {
  @ViewChild('title')
  titleRef!: ElementRef;
  @ViewChild('content')
  contentRef!: ElementRef;
  titleSticky = false;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {}

  updateHeader($e: any) {
    const scrollTop = $e.target.scrollTop;
    if (scrollTop > 200) {
      this.titleRef.nativeElement.classList.add('sticky-title');
      // const height = this.titleRef.nativeElement.clientHeight;
      const { paddingTop, paddingBottom, height } = window.getComputedStyle(
        this.titleRef.nativeElement
      );
      this.titleSticky = true;
      // const total_height =
      //   parseInt(height) + parseInt(paddingBottom) + parseInt(paddingTop);
      //   this.contentRef.nativeElement.style.marginTop = `${total_height}px`;
      } else {
        this.titleRef.nativeElement.classList.remove('sticky-title');
        // this.contentRef.nativeElement.style.marginTop = '';
        this.titleSticky = false;
    }
  }
}
