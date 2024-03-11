import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { GlobalComponent } from 'src/app/global-component';
import { FindAllOrdersInterface } from './interfaces/findAllOrders.interface';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private readonly httpService: HttpService) {}

  public findAllOrders(): Observable<FindAllOrdersInterface[]> {
    return this.httpService.get(
      GlobalComponent.FAKE_API_BEECEPTOR + '/api/carts'
    );
  }

  public findClients(): Observable<any> {
    //   return this.httpService.get(
    //     GlobalComponent.FAKE_API_BEECEPTOR + '/api/clients'
    //   );
    // }

    return Observable.create((observer: any) => {
      observer.next([
        {
          id: 1,
          name: 'John Doe',
          email: 'd',
        },
        {
          id: 2,
          name: 'Jane Doe',
          email: 'd',
        },
      ]);
    });
  }

  public findLocations(): Observable<any> {
    // return this.httpService.get(
    //   GlobalComponent.FAKE_API_BEECEPTOR + '/api/locations'
    // );
    return Observable.create((observer: any) => {
      observer.next([
        {
          id: 1,
          name: 'Location 1',
        },
        {
          id: 2,
          name: 'Location 2',
        },
      ]);
    });
  }

  public findProducts(): Observable<any> {
    return Observable.create((observer: any) => {
      observer.next([
        {
          id: 1,
          name: 'Product 1',
        },
        {
          id: 2,
          name: 'Product 2',
        },
      ]);
    });
  }
}
