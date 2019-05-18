import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// Angular
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Nebular modules
import { NgModule } from '@angular/core';
import { NbThemeModule, NbLayoutModule, NbInputModule, NbCardModule, NbListModule } from '@nebular/theme';
import { FormatMSPipe } from './pipes/format-ms.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormatMSPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbInputModule,
    NbListModule,
    NbCardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
