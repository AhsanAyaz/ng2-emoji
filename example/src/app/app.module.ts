import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
// Import your library
import { Ng2EmojiModule } from 'ng2-emoji';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ExamplesComponent } from './examples/examples.component';
import { ChatComponent } from './examples/chat/chat.component';
import { HomeComponent } from './home/home.component';
import { ChatService } from './examples/chat/chat.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExamplesComponent,
    ChatComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // Include the awesome
    Ng2EmojiModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
