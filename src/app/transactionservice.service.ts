import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionserviceService {
  private baseUrl ='http://localhost:8888/TRANSACTION-SERVICE/transactions';
  constructor(private http:HttpClient) { }

  
}
