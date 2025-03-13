import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from '../datatable/datatable.component';

@Component({
  selector: 'app-page-content',
  imports: [ContentComponent, DashboardComponent, DataTableComponent, BreadcrumbComponent, FooterComponent, CommonModule],
  templateUrl: './page-content.component.html',
  styleUrl: './page-content.component.css'
})
export class PageContentComponent {
  @Input() isOpenDashboard: boolean = false;
  @Input() selectedContent: any;
  @Input() hideAll = false;
  @Output() showAll = new EventEmitter<void>();
  @Input() isOpenDataTable = false;

  onShowAll() {
    this.showAll.emit();
  }
}