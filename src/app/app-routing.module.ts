import { PaiementComponent } from './pages/paiement/paiement.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { SearchComponent } from './pages/search/search.component';
import { ResultComponent } from './pages/result/result.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,

  },
  {
    path: "results",
    component: ResultComponent
  },
  {
    path: "search",
    component: SearchComponent
  },
  {
    path: "posts/:id",
    component: PostDetailsComponent
  },
  {
    path: "login-or-register",
    component: LoginRegisterComponent
  },
  {
    path: "paiement",
    component: PaiementComponent
  },
  { path: '',   redirectTo: '', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
