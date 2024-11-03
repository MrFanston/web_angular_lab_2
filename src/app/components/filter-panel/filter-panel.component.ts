import { Component, Output, EventEmitter } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatOption, MatSelect, MatSelectModule} from '@angular/material/select';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatButton, MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-filter-panel',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './filter-panel.component.html',
  styleUrl: './filter-panel.component.css'
})
export class FilterPanelComponent {
  // Объявляем объект для фильтров
  filterOptions = {
    destination: '',
    departureTime: '',
    maxDuration: '',
    maxPrice: '',
    sortBy: ''
  };

  // Определяем событие для передачи фильтров в родительский компонент
  @Output() applyFilters = new EventEmitter<any>();

  // Метод для применения фильтров
  onApplyFilters() {
    this.applyFilters.emit(this.filterOptions);
  }
}
