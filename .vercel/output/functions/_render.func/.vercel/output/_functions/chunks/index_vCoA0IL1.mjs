export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/index_rog-S_oz.mjs').then(n => n.b);

export { page };
