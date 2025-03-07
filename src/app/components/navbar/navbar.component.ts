import { Component, EventEmitter, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, CommonModule, MatExpansionModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isModalOpen = false;
  openModal() {
    this.isModalOpen = true;
  }
  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }
  closeModal() {
    this.isModalOpen = false;
  }

  @Output() valuesChange = new EventEmitter<any>();
  onButtonClick(title:any, practice:any, unit:any, objective:any, description:any, content:any) {
    this.valuesChange.emit({
      title: title,
      practice: practice,
      unit: unit,
      objective:objective,
      description: description,
      content: content
    });
  }


  @Output() hideAll = new EventEmitter<void>();
  onHideAll() {
    this.hideAll.emit();
  }


  isDropdownOpen = false;
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
