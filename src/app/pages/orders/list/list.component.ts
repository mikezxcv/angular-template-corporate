import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersService } from '../orders.service';
import { FindAllOrdersInterface } from '../interfaces/findAllOrders.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  orderList!: FindAllOrdersInterface[];
  dtOptions: DataTables.Settings = {
    pagingType: 'simple',
    pageLength: 5,
    ordering: false,
  };
  dataLoaded: boolean = false;

  constructor(private readonly ordersService: OrdersService) {}
  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.ordersService.findAllOrders().subscribe((response) => {
      console.debug(response);
      this.orderList = response;
      this.dataLoaded = true; // Marcamos que los datos han sido cargados
    });
  }
}
