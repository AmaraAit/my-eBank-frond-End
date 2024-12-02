import { Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [

     {
          path: 'acceuil',
          component: AccountComponent
      },
      {
          path: 'services',
          component: TransactionComponent
      },
      {
          path: 'login',
          component: LoginComponent
      }
  ];
