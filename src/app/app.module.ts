import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TyperComponent } from './typer/typer.component';
import { WallpaperComponent } from './wallpaper/wallpaper.component';
import { SocialComponent } from './social/social.component';
import { LevenshteinComponent } from './levenshtein/levenshtein.component';

@NgModule({
  declarations: [
    AppComponent,
    TyperComponent,
    WallpaperComponent,
    SocialComponent,
    LevenshteinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
