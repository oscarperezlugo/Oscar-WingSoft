import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate  } from '@angular/router';

// import { DashboardComponent } from './dashboard/dashboard.component';
// import { HeroesComponent } from './heroes/heroes.component';
// import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { MatrizComponent } from './matriz/matriz.component';
import { IntercepcionComponent } from './intercepcion/intercepcion.component';
import { NumerosPrimosComponent } from './numeros-primos/numeros-primos.component';

import { LoginComponent } from "./login/login.component";
import {
  AuthGuardService as AuthGuard
} from './auth/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: "full"},
  // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  // { path: 'detail/:id', component: HeroDetailComponent, canActivate: [AuthGuard] },
  // { path: 'heroes', component: HeroesComponent, canActivate: [AuthGuard] },
  { path: 'matriz', component: MatrizComponent, canActivate: [AuthGuard] },
  { path: 'intercepcion', component: IntercepcionComponent, canActivate: [AuthGuard] },
  { path: 'primos', component: NumerosPrimosComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
