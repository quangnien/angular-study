import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // {
  //   path: '**',
  //   renderMode: RenderMode.Prerender
  // }
 {
    path: '', // chỉ prerender trang chủ
    renderMode: RenderMode.Prerender
  },
  {
    path: 'detail/:id',
    renderMode: RenderMode.Client // route động chỉ render phía client
  },
  {
    path: '**',
    renderMode: RenderMode.Client
  }
];
