import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatButtonModule, MatExpansionModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  @Input() selectedTitle: any;
  @Input() selectedUnit: any;
  @Input() selectedPractice: any;
  @Input() selectedObjective: any;
  @Input() selectedDescription: any;
  @Input() isOpenDashboard: boolean = false;
  
  @Output() isOpenDataTable = new EventEmitter<boolean>();
  openDataTable() {
    this.isOpenDataTable.emit(true);
  }
  closeDataTable() {
    this.isOpenDataTable.emit(false);
  }
}