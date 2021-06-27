import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const HomeModule = () => import('./features/home/home.module').then((m) => m.HomeModule)
const AccountModule = () => import('./features/account/account.module').then((m) => m.AccountModule)
const PhotosModule = () => import('./features/photos/photos.module').then((m) => m.PhotosModule)
const PostsModule = () => import ('./features/posts/posts.module').then((m) => m.PostsModule)
const CrudModule = () => import ('./features/crud/crud.module').then((m) => m.CrudModule)
const routes: Routes = [
  {
    path: 'home',
    loadChildren: HomeModule,
    data: { showHeader: true }
  },
  {
    path: 'account',
    loadChildren: AccountModule,
    data: { showHeader: true }
  },
  {
    path: 'photos',
    loadChildren: PhotosModule,
    data: { showHeader: true }
  },
  {
    path: 'post',
    loadChildren: PostsModule,
    data: { showHeader: true }
  },
  {
    path: 'crud',
    loadChildren: CrudModule,
    data: { showHeader: true }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
