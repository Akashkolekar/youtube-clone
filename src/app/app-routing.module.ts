import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { MusicComponent } from './music/music.component';
import { MoviesComponent } from './movies/movies.component';
import { GamingComponent } from './gaming/gaming.component';
import { NewsComponent } from './news/news.component';
import { FullprofileComponent } from './fullprofile/fullprofile.component';


const routes: Routes = [
  { path:'',redirectTo:'home',pathMatch:'full' },
  { path:'home',component:HomeComponent },
  { path:'music',component:MusicComponent },
  { path:'movies',component:MoviesComponent },
  { path:'gaming',component:GamingComponent },
  { path:'news',component:NewsComponent },
  { path:'side-menu',component:SidemenuComponent },
  { path:'profile',component:FullprofileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
