import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  showFilters = false; // للتحكم في عرض الحقول

  filters = {
    category: '',
    price_min: null,
    price_max: null
  };

  products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Smartphone', price: 800 },
    { name: 'Tablet', price: 600 }
  ];
  toggleFilters() {
    this.showFilters = !this.showFilters;
  }
  applyFilters() {
    this.products = this.products.filter(product => {
      const isCategoryMatch = this.filters.category
        ? product.name.toLowerCase().includes(this.filters.category.toLowerCase())
        : true;
      const isMinPriceMatch = this.filters.price_min !== null
        ? product.price >= this.filters.price_min
        : true;
      const isMaxPriceMatch = this.filters.price_max !== null
        ? product.price <= this.filters.price_max
        : true;

      return isCategoryMatch && isMinPriceMatch && isMaxPriceMatch;
    });
  }
}
