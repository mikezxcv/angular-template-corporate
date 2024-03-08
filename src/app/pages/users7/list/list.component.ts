import { Component, OnInit } from '@angular/core';
import { User7Service } from '../user7.service';
import { FindAllProducts } from './interfaces/findAllProducts.interface';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  productsList!: FindAllProducts[];
  dtOptions: DataTables.Settings = {
    pagingType: 'simple',
    pageLength: 5,
    ordering: false,
  };

  constructor(private readonly user7Service: User7Service) {}

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: 'Users' },
      { label: 'List', active: true },
    ];
    this.getProducts();
  }

  getProducts(): void {
    this.user7Service.findAllProducts().subscribe((response) => {
      console.debug(response);
      this.productsList = response;
    });
  }
}
