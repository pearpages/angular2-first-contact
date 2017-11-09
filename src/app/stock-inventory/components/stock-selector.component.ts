import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Product, Stock } from './../models/product.interface';

@Component({
  selector: 'no-stock-selector',
  template: `
  <div class="no-stock-selector" [formGroup]="parent">
    <div formGroupName="selector">
      <select formControlName="product_id">
        <option value="">Select stock</option>
        <option *ngFor="let product of products"
          [value]="product.id"
        >{{product.name}}
        </option>
      </select>
      <input type="number"
        step="10"
        min="10"
        max="1000"
        formControlName="quantity"
      >
      <button
        type="button"
        (click)="onAdd()"
        >Add stock</button>

      <button type="button" (click)="patch()">Patch</button>
      <button type="button" (click)="set()">Set</button>
    </div>
  </div>
  `,
  styles: [`
  `]
})

export class StockSelectorComponent {
  @Input() parent: FormGroup;
  @Input() products: Product[];
  @Output() added: EventEmitter<Stock> = new EventEmitter();

  onAdd() {
    this.added.emit(this.parent.get('selector').value);
    // When resetting we also reset the html classes
    this.parent.get('selector').reset({ // Reset <--
      product_id: '',
      quantity: 10
    });
  }

  patch() {
    this.parent.get('selector').patchValue({
      product_id: ''
    });
  }

  set() {
    this.parent.get('selector').setValue({
      product_id: '14',
      quantity: 100
    });
  }
}
