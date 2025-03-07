import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-content',
  imports: [ContentComponent, BreadcrumbComponent, FooterComponent, CommonModule],
  templateUrl: './page-content.component.html',
  styleUrl: './page-content.component.css'
})
export class PageContentComponent {
  @Input() selectedContent: any;
  @Input() hideAll = false;
  @Output() showAll = new EventEmitter<void>();
  onShowAll() {
    this.showAll.emit();
  }
}