import { Component } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-page-content',
  imports: [ContentComponent, BreadcrumbComponent, FooterComponent],
  templateUrl: './page-content.component.html',
  styleUrl: './page-content.component.css'
})
export class PageContentComponent {

}
