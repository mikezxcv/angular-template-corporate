import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { FindAllProducts } from './list/interfaces/findAllProducts.interface';
import { GlobalComponent } from 'src/app/global-component';

@Injectable({
  providedIn: 'root',
})
export class User7Service {
  constructor(private readonly httpService: HttpService) {}

  public findAllProducts(): Observable<FindAllProducts[]> {
    // return the body of the response
    return this.httpService.get(GlobalComponent.API + '/products?limit=5').pipe(
      // map the response to the body of the response
      map((response: any) => {
        console.debug('response', response);
        return response;
      })
    );
  }
}
