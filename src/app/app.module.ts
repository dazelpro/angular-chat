import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from "@angular/fire/firestore";   //import baris ini
import { environment } from 'src/environments/environment';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ChatComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),    //import baris ini
        AngularFirestoreModule  //import baris ini
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
