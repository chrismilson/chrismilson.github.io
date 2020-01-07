import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TyperComponent } from './typer/typer.component';
import { WallpaperComponent } from './wallpaper/wallpaper.component';

@NgModule({
  declarations: [
    AppComponent,
    TyperComponent,
    WallpaperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
