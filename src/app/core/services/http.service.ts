import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  private getRequestOptions(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      }),
    };
  }

  get(url: string): Observable<any> {
    console.debug('htttpHeaders', `Bearer ${sessionStorage.getItem('token')}`);
    return this.http.get(url, this.getRequestOptions());
  }

  post(url: string, data: any): Observable<any> {
    return this.http.post(url, JSON.stringify(data), this.getRequestOptions());
  }

  put(url: string, data: any): Observable<any> {
    return this.http.put(url, JSON.stringify(data), this.getRequestOptions());
  }

  delete(url: string): Observable<any> {
    return this.http.delete(url, this.getRequestOptions());
  }
}
