import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersService } from '../orders.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FindLocationsInterface } from '../interfaces/findLocations.interface';
import { FindClientsInterface } from '../interfaces/findClients.interface';
import { FindProductsInterface } from '../interfaces/findProducts.interface';
import { isUndefined } from 'lodash';

interface ProductSelected {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent implements OnInit {
  formGroup!: FormGroup;
  clientsList!: FindClientsInterface[];
  locationsList!: FindLocationsInterface[];
  productsList!: FindProductsInterface[];
  productsSelected: ProductSelected[] = [];

  constructor(private readonly orderService: OrdersService) {}
  ngOnInit(): void {
    this.createFormGroup();
    this.getData();
  }

  createFormGroup() {
    this.formGroup = new FormGroup({
      clientId: new FormControl('', Validators.required),
      locationId: new FormControl('', Validators.required),
      hour: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      comments: new FormControl('', Validators.required),
      productId: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
    });
  }

  getData() {
    this.orderService.findClients().subscribe((response) => {
      console.debug(response);
      this.clientsList = response;
    });

    this.orderService.findLocations().subscribe((response) => {
      console.debug(response);
      this.locationsList = response;
    });

    this.orderService.findProducts().subscribe((response) => {
      console.debug(response);
      this.productsList = response;
    });
  }

  addProduct(productId: number) {
    console.debug('formGroup', this.formGroup.value);
    // debuf if product exists
    if (!this.productsSelected.some((p) => p.id === productId)) {
      const productFinded = this.productsList.find((p) => p.id === +productId);
      console.debug('productFinded', productFinded);
      if (productFinded) {
        const productSelected: ProductSelected = {
          id: productFinded.id,
          name: productFinded.name,
          price: this.formGroup.get('price')?.value,
          quantity: this.formGroup.get('quantity')?.value,
        };
        console.debug('productSelected', productSelected);
        this.productsSelected.push(productSelected);
      }
    }
  }

  removeProduct(productId: number) {
    const productIndex = this.productsSelected.findIndex(
      (p) => p.id === productId
    );
    if (productIndex !== -1) {
      this.productsSelected.splice(productIndex, 1);
    }
  }

  saveOrder() {
    console.debug('this.formGroup', this.formGroup.value);
    console.log('Save order');
  }
}
