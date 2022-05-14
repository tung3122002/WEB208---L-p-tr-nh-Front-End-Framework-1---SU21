import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablleComponent } from './componet/tablle/tablle.component';

const routes: Routes = [
  {path: 'products', component: TablleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
