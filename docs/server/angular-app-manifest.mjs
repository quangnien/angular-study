
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-study/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-study"
  },
  {
    "renderMode": 1,
    "route": "/angular-study/detail/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 630, hash: '0cb08e4955bafc595b7f8b02242e596f3a8edcb664a3ff0fe60d59787dbef399', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 971, hash: '1d4e2f950f8bb0a6b10a95be647bc7171d011fc9475fb9527a2c077c0ddf85d0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 17070, hash: 'e23782bdff97ac3f4171a201504ca00af3edd554f00ba2c7803e2c0a68fbfa87', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-FJJATCYJ.css': {size: 3637, hash: '/Wz8N6Rc7HY', text: () => import('./assets-chunks/styles-FJJATCYJ_css.mjs').then(m => m.default)}
  },
};
