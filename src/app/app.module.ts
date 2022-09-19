import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CvSectionComponent } from './cv-section/cv-section.component';
import { SkillsComponent } from './Section/skills/skills.component';
import { CertsComponent } from './Section/certs/certs.component';
import { ExtrasComponent } from './Section/extras/extras.component';
import { ContactComponent } from './Section/contact/contact.component';
import { HomeComponent } from './Section/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'certs', component: CertsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'extras', component: ExtrasComponent },
  { path: 'section/id', component: CvSectionComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    AppComponent,
    CvSectionComponent,
    SkillsComponent,
    CertsComponent,
    ExtrasComponent,
    ContactComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
