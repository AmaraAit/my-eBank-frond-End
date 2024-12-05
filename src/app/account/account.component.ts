import { Component, OnInit } from '@angular/core';
import { AccountserviceService } from '../accountservice.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [NgIf],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit{
  account : any ;
  constructor(private accoutservice:AccountserviceService){}
  ngOnInit(): void {
    this.fetchAccounts();
    console.log(this.account);
  }
  fetchAccounts():void {
    this.accoutservice.getAccountById(3).subscribe(data => (this.account = data));
  }


}
