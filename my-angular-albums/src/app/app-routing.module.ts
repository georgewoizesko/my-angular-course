import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from "./about/about.component";
import { AlbumListComponent } from "./albums/album-list/album-list.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { AlbumDetailsComponent } from "./albums/album-details/album-details.component";
import { AddAlbumComponent } from "./albums/add-album/add-album.component";
import { LoginComponent } from "./login-component/login.component";

const routes: Routes = [
  { path: "", redirectTo: "/about", pathMatch: "full" },
  { path: "albums/:id", component: AlbumDetailsComponent },
  { path: "about", component: AboutComponent },
  { path: "albums", component: AlbumListComponent },
  { path: "add-album", component: AddAlbumComponent },
  { path: "login", component: LoginComponent },
  { path: "**", component: NotFoundComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
