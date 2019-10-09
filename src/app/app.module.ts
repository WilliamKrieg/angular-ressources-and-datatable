import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { CardFormationComponent } from './components/card-formation/card-formation.component';
import { FormationsComponent } from './pages/formations/formations.component';
import { FormationComponent } from './pages/formation/formation.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogConfirmationComponent } from './dialogs/dialog-confirmation/dialog-confirmation.component';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  // On déclare les composants de notre module.
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    CardFormationComponent,
    FormationsComponent,
    FormationComponent,
    DialogConfirmationComponent
  ],
  // On importes les Modules externes à notre application, exemple : AngularMaterial
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
    MatProgressBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatDialogModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogConfirmationComponent]
})
export class AppModule {}
