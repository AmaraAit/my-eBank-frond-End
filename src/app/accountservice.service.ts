import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountserviceService {
  private baseUrl='http://localhost:8888/ACCOUNT-SERVICE/accounts'
  constructor(private http: HttpClient) { }

  getAccountById(id:number):Observable<Object>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
