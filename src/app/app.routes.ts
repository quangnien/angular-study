import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detail/:id', component: DetailComponent, data: { renderMode: 'client' } },
];

// 👇 Bổ sung hàm này cho prerender
export function getPrerenderParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}