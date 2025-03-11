import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { PageContentComponent } from './components/page-content/page-content.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, CommonModule, PageContentComponent, NavbarComponent, SidebarComponent, MatIconModule, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ManualEjercicios_5A_230260';
  
  isSidebarHidden: boolean = false;
  toggleSidebar() {
     this.isSidebarHidden = !this.isSidebarHidden;
  }

  hideAll = false;
  onHideAll() {
    this.hideAll = true;
  }
  onShowAll() {
    this.hideAll = false;
  }

  isOpenDashboard = false;
  isOpenDataTable = false;
  switchDashboard(value: boolean) {
    this.isOpenDashboard = value;
  }
  switchDataTable(value: boolean) {
    this.isOpenDataTable = value;
  }

  selectedTitle: any = "Componentes en Angular";
  selectedUnit: any = "2";
  selectedPractice: any = "01";
  selectedObjective: any = "En esta actividad se pone en practica el como actualizar la plantilla y los estilos de un componente.";
  selectedDescription: any = "Los componentes son los elementos básicos para cualquier aplicación Angular. Cada componente esta conformado por tres partes: clase en TypeScript, plantilla HTML y estilos CSS";
  selectedContent: any = "p1";

  onValuesChange(values: any) {
    this.selectedTitle = values.title;
    this.selectedUnit = values.unit;
    this.selectedPractice = values.practice;
    this.selectedObjective = values.objective;
    this.selectedDescription = values.description;
    this.selectedContent = values.content;
  }
}