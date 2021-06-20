import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { RechercheComponent } from './recherche/recherche.component';
import { VendeurComponent } from './vendeur/vendeur.component';
import { SigninComponent } from './signin/signin.component';
import { CompteComponent } from './compte/compte.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'acceuil', component:AppComponent},
  { path: 'recherche', component: RechercheComponent },
  { path: 'vendeur', component:VendeurComponent},
  { path: 'signin', component: SigninComponent },
  { path: 'compte', component: CompteComponent},
] ;

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    RechercheComponent,
    VendeurComponent,
    SigninComponent,
    CompteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
