import { FormationComponent } from './pages/formation/formation.component';
import { FormationsComponent } from './pages/formations/formations.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path : 'app',
    component : HomeComponent
  },
  {
    path : 'contact',
    component : ContactComponent
  },
  {
    path : 'formations',
    component : FormationsComponent
  },
  {
    path : 'formation/:id',
    component : FormationComponent
  },
  {
    path : 'formation',
    component : FormationComponent
  },
  {
    path : '**',
    redirectTo : 'app'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
