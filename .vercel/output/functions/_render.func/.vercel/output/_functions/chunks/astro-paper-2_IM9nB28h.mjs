import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_M3CLt_ij.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Astro 2.0 has been released with some cool features, breaking changes, DX improvements, better error overlay and so on. AstroPaper takes advantage of those cool features, especially Content Collections API.</p>\n<!-- ![Introducing AstroPaper 2.0](https://user-images.githubusercontent.com/53733092/215683840-dc2502f5-8c5a-44f0-a26c-4e7180455056.png) -->\n<p><img src=\"https://user-images.githubusercontent.com/53733092/215771435-25408246-2309-4f8b-a781-1f3d93bdf0ec.png\" alt=\"Introducing AstroPaper 2.0\"></p>\n<h2 id=\"table-of-contents\">Table of contents</h2>\n<p></p><details><summary>Open Table of contents</summary><p></p>\n<ul>\n<li><a href=\"#features--changes\">Features &#x26; Changes</a>\n<ul>\n<li><a href=\"#type-safe-frontmatters-and-redefined-blog-schema\">Type-safe Frontmatters and Redefined Blog Schema</a></li>\n<li><a href=\"#new-home-for-blog-contents\">New Home for Blog contents</a></li>\n<li><a href=\"#new-fetch-api\">New Fetch API</a></li>\n<li><a href=\"#modified-search-logic-for-better-search-result\">Modified Search Logic for better Search Result</a></li>\n<li><a href=\"#renamed-frontmatter-properties\">Renamed Frontmatter Properties</a></li>\n<li><a href=\"#default-tag-for-blog-post\">Default Tag for blog post</a></li>\n<li><a href=\"#new-predefined-dark-color-scheme\">New Predefined Dark Color Scheme</a></li>\n<li><a href=\"#automatic-class-sorting\">Automatic Class Sorting</a></li>\n<li><a href=\"#updated-docs--readme\">Updated Docs &#x26; README</a></li>\n</ul>\n</li>\n<li><a href=\"#bug-fixes\">Bug Fixes</a></li>\n</ul>\n<p></p></details><p></p>\n<h2 id=\"features--changes\">Features &#x26; Changes</h2>\n<h3 id=\"type-safe-frontmatters-and-redefined-blog-schema\">Type-safe Frontmatters and Redefined Blog Schema</h3>\n<p>Frontmatter of AstroPaper 2.0 markdown contents are now type-safe thanks to Astro’s Content Collections. Blog schema is defined inside the <code>src/content/_schemas.ts</code> file.</p>\n<h3 id=\"new-home-for-blog-contents\">New Home for Blog contents</h3>\n<p>All the blog posts were moved from <code>src/contents</code> to <code>src/content/blog</code> directory.</p>\n<h3 id=\"new-fetch-api\">New Fetch API</h3>\n<p>Contents are now fetched with <code>getCollection</code> function. No relative path to the content needs to be specified anymore.</p>\n<pre class=\"astro-code one-dark-pro\" style=\"background-color:#282c34;color:#abb2bf; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#7F848E;font-style:italic\">// old content fetching method</span></span>\n<span class=\"line\"><span style=\"color:#56B6C2\">-</span><span style=\"color:#C678DD\"> const</span><span style=\"color:#E5C07B\"> postImportResult</span><span style=\"color:#56B6C2\"> =</span><span style=\"color:#C678DD\"> import</span><span style=\"color:#ABB2BF\">.</span><span style=\"color:#E06C75\">meta</span><span style=\"color:#ABB2BF\">.</span><span style=\"color:#61AFEF\">glob</span><span style=\"color:#ABB2BF\">&#x3C;</span><span style=\"color:#E5C07B\">MarkdownInstance</span><span style=\"color:#ABB2BF\">&#x3C;</span><span style=\"color:#E5C07B\">Frontmatter</span><span style=\"color:#ABB2BF\">>>(</span></span>\n<span class=\"line\"><span style=\"color:#98C379\">  \"../contents/**/**/*.md\"</span><span style=\"color:#ABB2BF\">,);</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#7F848E;font-style:italic\">// new content fetching method</span></span>\n<span class=\"line\"><span style=\"color:#56B6C2\">+</span><span style=\"color:#C678DD\"> const</span><span style=\"color:#E5C07B\"> postImportResult</span><span style=\"color:#56B6C2\"> =</span><span style=\"color:#C678DD\"> await</span><span style=\"color:#61AFEF\"> getCollection</span><span style=\"color:#ABB2BF\">(</span><span style=\"color:#98C379\">\"blog\"</span><span style=\"color:#ABB2BF\">);</span></span></code></pre>\n<h3 id=\"modified-search-logic-for-better-search-result\">Modified Search Logic for better Search Result</h3>\n<p>In the older version of AstroPaper, when someone search some article, the search criteria keys that will be searched are <code>title</code>, <code>description</code> and <code>headings</code> (heading means all the headings h1 ~ h6 of the blog post). In AstroPaper v2, only <code>title</code> and <code>description</code> will be searched as the user types.</p>\n<h3 id=\"renamed-frontmatter-properties\">Renamed Frontmatter Properties</h3>\n<p>The following frontmatter properties are renamed.</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Old Names</th><th>New Names</th></tr></thead><tbody><tr><td>datetime</td><td>pubDatetime</td></tr><tr><td>slug</td><td>postSlug</td></tr></tbody></table>\n<h3 id=\"default-tag-for-blog-post\">Default Tag for blog post</h3>\n<p>If a blog post doesn’t have any tag (in other words, frontmatter property <code>tags</code> is not specified), the default tag <code>others</code> will be used for that blog post. But you can set the default tag in the <code>/src/content/_schemas.ts</code> file.</p>\n<pre class=\"astro-code one-dark-pro\" style=\"background-color:#282c34;color:#abb2bf; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#7F848E;font-style:italic\">// src/contents/_schemas.ts</span></span>\n<span class=\"line\"><span style=\"color:#C678DD\">export</span><span style=\"color:#C678DD\"> const</span><span style=\"color:#E5C07B\"> blogSchema</span><span style=\"color:#56B6C2\"> =</span><span style=\"color:#E5C07B\"> z</span><span style=\"color:#ABB2BF\">.</span><span style=\"color:#61AFEF\">object</span><span style=\"color:#ABB2BF\">({</span></span>\n<span class=\"line\"><span style=\"color:#7F848E;font-style:italic\">  // ---</span></span>\n<span class=\"line\"><span style=\"color:#7F848E;font-style:italic\">  // replace \"others\" with whatever you want</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  tags</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#E5C07B\">z</span><span style=\"color:#ABB2BF\">.</span><span style=\"color:#61AFEF\">array</span><span style=\"color:#ABB2BF\">(</span><span style=\"color:#E5C07B\">z</span><span style=\"color:#ABB2BF\">.</span><span style=\"color:#61AFEF\">string</span><span style=\"color:#ABB2BF\">()).</span><span style=\"color:#61AFEF\">default</span><span style=\"color:#ABB2BF\">([</span><span style=\"color:#98C379\">\"others\"</span><span style=\"color:#ABB2BF\">]),</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  ogImage</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#E5C07B\">z</span><span style=\"color:#ABB2BF\">.</span><span style=\"color:#61AFEF\">string</span><span style=\"color:#ABB2BF\">().</span><span style=\"color:#61AFEF\">optional</span><span style=\"color:#ABB2BF\">(),</span></span>\n<span class=\"line\"><span style=\"color:#E06C75\">  description</span><span style=\"color:#ABB2BF\">: </span><span style=\"color:#E5C07B\">z</span><span style=\"color:#ABB2BF\">.</span><span style=\"color:#61AFEF\">string</span><span style=\"color:#ABB2BF\">(),</span></span>\n<span class=\"line\"><span style=\"color:#ABB2BF\">});</span></span></code></pre>\n<h3 id=\"new-predefined-dark-color-scheme\">New Predefined Dark Color Scheme</h3>\n<p>AstroPaper v2 has a new dark color scheme (high contrast &#x26; low contrast) which is based on Astro’s dark logo. Check out <a href=\"https://astro-paper.pages.dev/posts/predefined-color-schemes#astro-dark\">this link</a> for more info.</p>\n<p><img src=\"https://user-images.githubusercontent.com/53733092/215680520-59427bb0-f4cb-48c0-bccc-f182a428d72d.svg\" alt=\"New Predefined Dark Color Scheme\"></p>\n<h3 id=\"automatic-class-sorting\">Automatic Class Sorting</h3>\n<p>AstroPaper 2.0 includes automatic class sorting with <a href=\"https://tailwindcss.com/blog/automatic-class-sorting-with-prettier\">TailwindCSS Prettier plugin</a></p>\n<h3 id=\"updated-docs--readme\">Updated Docs &#x26; README</h3>\n<p>All the <a href=\"https://astro-paper.pages.dev/tags/docs/\">#docs</a> blog posts and <a href=\"https://github.com/satnaing/astro-paper#readme\">README</a> are updated for this AstroPaper v2.</p>\n<h2 id=\"bug-fixes\">Bug Fixes</h2>\n<ul>\n<li>fix broken tags in the Blog Post page</li>\n<li>in a tag page, the last part of the breadcrumb is now updated to lower-case for consistency</li>\n<li>exclude draft posts in a tag page</li>\n<li>fix ‘onChange value not updating issue’ after a page reload</li>\n</ul>";

				const frontmatter = {"author":"Sat Naing","pubDatetime":"2023-01-30T15:57:52.737Z","title":"AstroPaper 2.0","slug":"astro-paper-2","featured":false,"ogImage":"https://user-images.githubusercontent.com/53733092/215771435-25408246-2309-4f8b-a781-1f3d93bdf0ec.png","tags":["release"],"description":"AstroPaper with the enhancements of Astro v2. Type-safe markdown contents, bug fixes and better dev experience etc."};
				const file = "/Users/lakshya/Desktop/projects/superior-spiral/src/content/blog/astro-paper-2.md";
				const url = undefined;
				function rawContent() {
					return "\nAstro 2.0 has been released with some cool features, breaking changes, DX improvements, better error overlay and so on. AstroPaper takes advantage of those cool features, especially Content Collections API.\n\n<!-- ![Introducing AstroPaper 2.0](https://user-images.githubusercontent.com/53733092/215683840-dc2502f5-8c5a-44f0-a26c-4e7180455056.png) -->\n\n![Introducing AstroPaper 2.0](https://user-images.githubusercontent.com/53733092/215771435-25408246-2309-4f8b-a781-1f3d93bdf0ec.png)\n\n## Table of contents\n\n## Features & Changes\n\n### Type-safe Frontmatters and Redefined Blog Schema\n\nFrontmatter of AstroPaper 2.0 markdown contents are now type-safe thanks to Astro’s Content Collections. Blog schema is defined inside the `src/content/_schemas.ts` file.\n\n### New Home for Blog contents\n\nAll the blog posts were moved from `src/contents` to `src/content/blog` directory.\n\n### New Fetch API\n\nContents are now fetched with `getCollection` function. No relative path to the content needs to be specified anymore.\n\n```ts\n// old content fetching method\n- const postImportResult = import.meta.glob<MarkdownInstance<Frontmatter>>(\n  \"../contents/**/**/*.md\",);\n\n// new content fetching method\n+ const postImportResult = await getCollection(\"blog\");\n```\n\n### Modified Search Logic for better Search Result\n\nIn the older version of AstroPaper, when someone search some article, the search criteria keys that will be searched are `title`, `description` and `headings` (heading means all the headings h1 ~ h6 of the blog post). In AstroPaper v2, only `title` and `description` will be searched as the user types.\n\n### Renamed Frontmatter Properties\n\nThe following frontmatter properties are renamed.\n\n| Old Names | New Names   |\n| --------- | ----------- |\n| datetime  | pubDatetime |\n| slug      | postSlug    |\n\n### Default Tag for blog post\n\nIf a blog post doesn't have any tag (in other words, frontmatter property `tags` is not specified), the default tag `others` will be used for that blog post. But you can set the default tag in the `/src/content/_schemas.ts` file.\n\n```ts\n// src/contents/_schemas.ts\nexport const blogSchema = z.object({\n  // ---\n  // replace \"others\" with whatever you want\n  tags: z.array(z.string()).default([\"others\"]),\n  ogImage: z.string().optional(),\n  description: z.string(),\n});\n```\n\n### New Predefined Dark Color Scheme\n\nAstroPaper v2 has a new dark color scheme (high contrast & low contrast) which is based on Astro's dark logo. Check out [this link](https://astro-paper.pages.dev/posts/predefined-color-schemes#astro-dark) for more info.\n\n![New Predefined Dark Color Scheme](https://user-images.githubusercontent.com/53733092/215680520-59427bb0-f4cb-48c0-bccc-f182a428d72d.svg)\n\n### Automatic Class Sorting\n\nAstroPaper 2.0 includes automatic class sorting with [TailwindCSS Prettier plugin](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)\n\n### Updated Docs & README\n\nAll the [#docs](https://astro-paper.pages.dev/tags/docs/) blog posts and [README](https://github.com/satnaing/astro-paper#readme) are updated for this AstroPaper v2.\n\n## Bug Fixes\n\n- fix broken tags in the Blog Post page\n- in a tag page, the last part of the breadcrumb is now updated to lower-case for consistency\n- exclude draft posts in a tag page\n- fix 'onChange value not updating issue' after a page reload\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"table-of-contents","text":"Table of contents"},{"depth":2,"slug":"features--changes","text":"Features & Changes"},{"depth":3,"slug":"type-safe-frontmatters-and-redefined-blog-schema","text":"Type-safe Frontmatters and Redefined Blog Schema"},{"depth":3,"slug":"new-home-for-blog-contents","text":"New Home for Blog contents"},{"depth":3,"slug":"new-fetch-api","text":"New Fetch API"},{"depth":3,"slug":"modified-search-logic-for-better-search-result","text":"Modified Search Logic for better Search Result"},{"depth":3,"slug":"renamed-frontmatter-properties","text":"Renamed Frontmatter Properties"},{"depth":3,"slug":"default-tag-for-blog-post","text":"Default Tag for blog post"},{"depth":3,"slug":"new-predefined-dark-color-scheme","text":"New Predefined Dark Color Scheme"},{"depth":3,"slug":"automatic-class-sorting","text":"Automatic Class Sorting"},{"depth":3,"slug":"updated-docs--readme","text":"Updated Docs & README"},{"depth":2,"slug":"bug-fixes","text":"Bug Fixes"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
