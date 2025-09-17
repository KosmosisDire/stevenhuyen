import { Routes } from '@angular/router';
import { HomePageComponent } from '../core/home-page/home-page.component';
import { MusicPageComponent } from '../core/music.page/music.page.component';

export const routes: Routes = [
    {path: 'home', component: HomePageComponent},
    {path: 'music', component: MusicPageComponent},
    { path: '', component: HomePageComponent },
    {path: '**', redirectTo: ''},
];
