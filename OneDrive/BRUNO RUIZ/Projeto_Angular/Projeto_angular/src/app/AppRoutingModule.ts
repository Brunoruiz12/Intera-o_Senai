import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.module';

const routes: Routes = [

{path:'inicio', component: InicioComponent},
{path:'login', component: LoginComponent},
{path:'', redirectTo:'/inicio',pathMatch:'full'}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
