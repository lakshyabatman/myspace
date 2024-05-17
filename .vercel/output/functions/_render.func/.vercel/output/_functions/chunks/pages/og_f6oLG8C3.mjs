import { g as generateOgImageForSite } from './index_EEy3tdSI.mjs';

const GET = async () => new Response(await generateOgImageForSite(), {
  headers: { "Content-Type": "image/png" }
});

export { GET };
