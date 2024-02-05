import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { BannerComponent } from './components/banner/banner.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DetailProjectComponent } from './components/detail-project/detail-project.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyACiprKx1plT5T7jwIfiaieuOAwqYkPu6k",
  authDomain: "santiagorestrepofrontendui.firebaseapp.com",
  projectId: "santiagorestrepofrontendui",
  storageBucket: "santiagorestrepofrontendui.appspot.com",
  messagingSenderId: "175803325124",
  appId: "1:175803325124:web:3dce84d5a696ff000b4791"
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerComponent,
    SkillsComponent,
    ProjectsComponent,
    DetailProjectComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
