import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private baseUrl='http://localhost:8888/USER-SERVICE/users';
  constructor(private http:HttpClient) { }

  getUser(id:number): Observable<any>{
    return this.http.get('${this.baseUrl}/${id}')
  }

  createUser(user:Object):Observable<Object>{
    return this.http.post('${this.baseUrl}',user);
  }

  updateUser(id:number, value: any):Observable<Object>{
    return this.http.put('${this.baseUrl}/${}id',value);
  }

  deleteUser(id:number):Observable<any>{
    return this.http.delete('${this.baseUrl}/${id}',{responseType:'text'});
  }

  getUserList():Observable<any>{
    return this.http.get('${this.baseUrl}');
  }
}
