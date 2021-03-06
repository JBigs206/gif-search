import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './views/main/main.component';


const routes: Routes = [
	{
		path: '', 
		redirectTo: 'views/main', 
		pathMatch: 'full'
	},
	{
		path: 'views/main', 
		component: MainComponent 
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
