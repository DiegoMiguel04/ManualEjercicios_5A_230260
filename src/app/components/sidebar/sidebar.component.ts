import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatButtonModule],
})
export class SidebarComponent {
  isSidebarHidden = false;

  @ViewChild('drawer') drawer!: MatDrawer;

  toggleDrawer() {
    this.isSidebarHidden = !this.isSidebarHidden;
  }
}
