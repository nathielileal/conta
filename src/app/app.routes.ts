import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SomaComponent } from './pages/soma/soma.component';
import { MenuComponent } from './pages/menu/menu.component';

export const routes: Routes = [
    { path: 'menu', component: MenuComponent },
    { path: 'soma', component: SomaComponent },
    { path: '', redirectTo: '/menu', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
