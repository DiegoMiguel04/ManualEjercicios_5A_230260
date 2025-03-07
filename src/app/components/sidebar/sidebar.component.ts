import { ChangeDetectionStrategy, Component, ViewChild, signal, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
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
  readonly panelOpenState = signal(false);
  isSidebarHidden = true;
  @ViewChild('drawer') drawer!: MatDrawer;
  toggleDrawer() {
    this.isSidebarHidden = !this.isSidebarHidden;
  }

  @Input() selectedTitle: any;
  @Input() selectedUnit: any;
  @Input() selectedPractice: any;
  @Input() selectedObjective: any;
  @Input() selectedDescription: any;
}