import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { MusicComponent } from './music/music.component';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { PipePipe } from './pipe.pipe';
import { FormsModule } from '@angular/forms';
import { GamingComponent } from './gaming/gaming.component';
import { NewsComponent } from './news/news.component';
import { FullprofileComponent } from './fullprofile/fullprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SideBarComponent,
    SidemenuComponent,
    MusicComponent,
    MoviesComponent,
    PipePipe,
    GamingComponent,
    NewsComponent,
    FullprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
