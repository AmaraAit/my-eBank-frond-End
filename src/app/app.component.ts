import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { TransactionComponent } from './transaction/transaction.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccountComponent, TransactionComponent ,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-ebank-front-end';
}
