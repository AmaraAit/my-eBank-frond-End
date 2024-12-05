import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanserviceService {
  private apiUrl = 'http://localhost:8888/LOAN-SERVICE/loan';
  constructor(private http:HttpClient) { }
  getLoan():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }
  getLoanById(id:number):Observable<any>{
    return this.http.get<any>('${this.apiUrl}/${id}');
  }
  createLoan(loan: any):Observable<any>{
    return this.http.post<any>(this.apiUrl,loan);
  }
  updateLoan(id:number, loan:any):Observable<any>{
    return this.http.put<any>('${this.apiUrl}/${id}',loan);
  }
  deleteLoan(id:number):Observable<any>{
    return this.http.delete<any>('${this.apiUrl}/${id}');
  }
}
