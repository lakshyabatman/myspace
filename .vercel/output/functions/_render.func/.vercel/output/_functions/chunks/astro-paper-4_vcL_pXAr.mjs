import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro_M3CLt_ij.mjs';
import { g as getImage } from './pages/generic_5uISYJo3.mjs';
import 'clsx';

const Astro__ZMYCkY = new Proxy({"src":"/_astro/AstroPaper-v4.E8pWr1CH.png","width":1920,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lakshya/Desktop/projects/superior-spiral/src/assets/images/AstroPaper-v4.png";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "@assets/images/AstroPaper-v4.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "@assets/images/AstroPaper-v4.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;

													imageSources[matchKey] = await getImage({src: Astro__ZMYCkY, ...props});
													occurrenceCounter++;
											}
									}
					return imageSources;
			};

			async function updateImageReferences(html) {
				return images(html).then((imageSources) => {
						return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
								const decodedImagePath = JSON.parse(imagePath.replace(/&#x22;/g, '"'));
		
								// Use the 'index' property for each image occurrence
								const srcKey = decodedImagePath.src + '_' + decodedImagePath.index;
		
								if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) {
										imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
								}
		
								const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;
		
								return spreadAttributes({
										src: imageSources[srcKey].src,
										...attributesWithoutIndex,
								});
						});
				});
		}
		

		// NOTE: This causes a top-level await to appear in the user's code, which can break very easily due to a Rollup
	  // bug and certain adapters not supporting it correctly. See: https://github.com/rollup/rollup/issues/4708
	  // Tread carefully!
			const html = await updateImageReferences("<p>Hello everyone! Wishing you a happy New Year 🎉 and all the best for 2024! We’re excited to announce the release of AstroPaper v4, a significant update that introduces a range of new features, improvements, and bug fixes to elevate your blogging experience. A big thank you to all the contributors for their valuable input and efforts in making version 4 possible!</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;@assets/images/AstroPaper-v4.png&#x22;,&#x22;alt&#x22;:&#x22;AstroPaper v4&#x22;,&#x22;index&#x22;:0}\"></p>\n<h2 id=\"table-of-contents\">Table of contents</h2>\n<p></p><details><summary>Open Table of contents</summary><p></p>\n<ul>\n<li><a href=\"#major-changes\">Major Changes</a>\n<ul>\n<li><a href=\"#upgrade-to-astro-v4-202\">Upgrade to Astro v4 #202</a></li>\n<li><a href=\"#replace-postslug-with-astro-content-slug-197\">Replace <code>postSlug</code> with Astro Content <code>slug</code> #197</a></li>\n</ul>\n</li>\n<li><a href=\"#new-features\">New Features</a>\n<ul>\n<li><a href=\"#add-code-snippets-for-content-creation-206\">Add code-snippets for content creation #206</a></li>\n<li><a href=\"#add-modified-datetime-in-blog-posts-195\">Add Modified Datetime in Blog Posts #195</a></li>\n<li><a href=\"#implement-back-to-top-button-188\">Implement Back-to-Top Button #188</a></li>\n<li><a href=\"#add-pagination-in-tag-posts-201\">Add Pagination in Tag Posts #201</a></li>\n<li><a href=\"#dynamically-generate-robotstxt-130\">Dynamically Generate robots.txt #130</a></li>\n<li><a href=\"#add-docker-compose-file-174\">Add Docker-Compose File #174</a></li>\n</ul>\n</li>\n<li><a href=\"#refactoring--bug-fixes\">Refactoring &#x26; Bug Fixes</a>\n<ul>\n<li><a href=\"#replace-slugified-title-with-unslugified-tag-name-198\">Replace Slugified Title with Unslugified Tag Name #198</a></li>\n<li><a href=\"#implement-100svh-for-min-height-79d569d\">Implement 100svh for Min-Height (79d569d)</a></li>\n<li><a href=\"#update-site-url-as-single-source-of-truth-143\">Update Site URL as Single Source of Truth #143</a></li>\n<li><a href=\"#solve-invisible-text-code-block-issue-in-light-mode-163\">Solve Invisible Text Code Block Issue in Light Mode #163</a></li>\n<li><a href=\"#decode-unicode-tag-characters-in-breadcrumb-175\">Decode Unicode Tag Characters in Breadcrumb #175</a></li>\n<li><a href=\"#update-locale-config-to-cover-overall-locales-cd02b04\">Update LOCALE Config to Cover Overall Locales (cd02b04)</a></li>\n</ul>\n</li>\n<li><a href=\"#outtro\">Outtro</a></li>\n</ul>\n<p></p></details><p></p>\n<h2 id=\"major-changes\">Major Changes</h2>\n<h3 id=\"upgrade-to-astro-v4-202\">Upgrade to Astro v4 <a href=\"https://github.com/satnaing/astro-paper/pull/202\">#202</a></h3>\n<p>AstroPaper now leverages the power and capabilities of Astro v4. However, it’s a subtle upgrade and won’t break most Astro users.</p>\n<p><img src=\"https://astro.build/_astro/header-astro-4.GLp8HjfV.webp\" alt=\"Astro v4\"></p>\n<h3 id=\"replace-postslug-with-astro-content-slug-197\">Replace <code>postSlug</code> with Astro Content <code>slug</code> <a href=\"https://github.com/satnaing/astro-paper/pull/197\">#197</a></h3>\n<p>The <code>postSlug</code> in the blog content schema is no longer available in AstroPaper v4. Initially Astro doesn’t have a <code>slug</code> mechanism and thus we have to figure it out on our own. Since Astro v3, it supports content collection and slug features. Now, we believe it’s time to adopt Astro’s out-of-the-box <code>slug</code> feature.</p>\n<p><strong><em>file: src/content/blog/astro-paper-4.md</em></strong></p>\n<pre class=\"astro-code one-dark-pro\" style=\"background-color:#282c34;color:#abb2bf; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#61AFEF\">---</span></span>\n<span class=\"line\"><span style=\"color:#61AFEF\">author:</span><span style=\"color:#98C379\"> Sat</span><span style=\"color:#98C379\"> Naing</span></span>\n<span class=\"line\"><span style=\"color:#61AFEF\">pubDatetime:</span><span style=\"color:#D19A66\"> 2024</span><span style=\"color:#98C379\">-01-01T04:35:33.428Z</span></span>\n<span class=\"line\"><span style=\"color:#61AFEF\">title:</span><span style=\"color:#98C379\"> AstroPaper</span><span style=\"color:#D19A66\"> 4.0</span></span>\n<span class=\"line\"><span style=\"color:#61AFEF\">slug:</span><span style=\"color:#98C379\"> \"astro-paper-v4\"</span><span style=\"color:#7F848E;font-style:italic\"> # if slug is not specified, it will be 'astro-paper-4' (file name).</span></span>\n<span class=\"line\"><span style=\"color:#7F848E;font-style:italic\"># slug: \"\" ❌ cannot be an empty string</span></span>\n<span class=\"line\"><span style=\"color:#61AFEF\">---</span></span></code></pre>\n<p>The behavior of the <code>slug</code> is slightly different now. In the previous versions of AstroPaper, if the <code>postSlug</code> is not specified in a blog post (markdown file), the title of that blog post would be slugified and used as the <code>slug</code>. However, in AstroPaper v4, if the <code>slug</code> field is not specified, the markdown file name will be used as the <code>slug</code>. One thing to keep in mind is that the <code>slug</code> field can be omitted, but it cannot be an empty string (slug: \"\" ❌).</p>\n<p>If you’re upgrading AstroPaper from v3 to v4, make sure to replace <code>postSlug</code> in your <code>src/content/blog/*.md</code> files with <code>slug</code>.</p>\n<h2 id=\"new-features\">New Features</h2>\n<h3 id=\"add-code-snippets-for-content-creation-206\">Add code-snippets for content creation <a href=\"https://github.com/satnaing/astro-paper/pull/206\">#206</a></h3>\n<p>AstroPaper now includes VSCode snippets for new blog posts, eliminating the need for manual copy/pasting of the frontmatter and content structure (table of contents, heading, excerpt, etc.).</p>\n<p>Read more about VSCode Snippets <a href=\"https://code.visualstudio.com/docs/editor/userdefinedsnippets#:~:text=In%20Visual%20Studio%20Code%2C%20snippets,Snippet%20in%20the%20Command%20Palette\">here</a>.</p>\n<video autoplay muted controls plays-inline=\"true\" class=\"border border-skin-line\">\n  <source src=\"https://github.com/satnaing/astro-paper/assets/53733092/136f1903-bade-40a2-b6bb-285a3c726350\" type=\"video/mp4\">\n</video>\n<h3 id=\"add-modified-datetime-in-blog-posts-195\">Add Modified Datetime in Blog Posts <a href=\"https://github.com/satnaing/astro-paper/pull/195\">#195</a></h3>\n<p>Keep readers informed about the latest updates by displaying the modified datetime in blog posts. This not only instills user trust in the freshness of the articles but also contributes to improved SEO for the blog.</p>\n<p><img src=\"https://github.com/satnaing/astro-paper/assets/53733092/cc89585e-148e-444d-9da1-0d496e867175\" alt=\"Last Modified Date feature in AstroPaper\"></p>\n<p>You can add a <code>modDatetime</code> to your blog post if you’ve made modifications. Now, the sorting behavior of the posts is slightly different. All posts are sorted by both <code>pubDatetime</code> and <code>modDatetime</code>. If a post has both a <code>pubDatetime</code> and <code>modDatetime</code>, its sorting position will be determined by the <code>modDatetime</code>. If not, only <code>pubDatetime</code> will be considered to determine the post’s sorting order.</p>\n<h3 id=\"implement-back-to-top-button-188\">Implement Back-to-Top Button <a href=\"https://github.com/satnaing/astro-paper/pull/188\">#188</a></h3>\n<p>Enhance user navigation on your blog detail post with the newly implemented back-to-top button.</p>\n<p><img src=\"https://github.com/satnaing/astro-paper/assets/53733092/79854957-7877-4f19-936e-ad994b772074\" alt=\"Back to top button in AstroPaper\"></p>\n<h3 id=\"add-pagination-in-tag-posts-201\">Add Pagination in Tag Posts <a href=\"https://github.com/satnaing/astro-paper/pull/201\">#201</a></h3>\n<p>Improve content organization and navigation with the addition of pagination in tag posts, making it easier for users to explore related content. This ensures that if a tag has many posts, readers won’t be overwhelmed by all the tag-related posts.</p>\n<video autoplay loop muted plays-inline=\"true\" class=\"border border-skin-line\">\n  <source src=\"https://github.com/satnaing/astro-paper/assets/53733092/9bad87f5-dcf5-4b79-b67a-d6c7244cd616\" type=\"video/mp4\">\n</video>\n<h3 id=\"dynamically-generate-robotstxt-130\">Dynamically Generate robots.txt <a href=\"https://github.com/satnaing/astro-paper/pull/130\">#130</a></h3>\n<p>AstroPaper v4 now dynamically generates the robots.txt file, giving you more control over search engine indexing and web crawling. Besides, sitemap URL will also be added inside <code>robot.txt</code> file.</p>\n<h3 id=\"add-docker-compose-file-174\">Add Docker-Compose File <a href=\"https://github.com/satnaing/astro-paper/pull/174\">#174</a></h3>\n<p>Managing your AstroPaper environment is now easier than ever with the addition of a Docker-Compose file, simplifying deployment and configuration.</p>\n<h2 id=\"refactoring--bug-fixes\">Refactoring &#x26; Bug Fixes</h2>\n<h3 id=\"replace-slugified-title-with-unslugified-tag-name-198\">Replace Slugified Title with Unslugified Tag Name <a href=\"https://github.com/satnaing/astro-paper/pull/198\">#198</a></h3>\n<p>To improve clarity, user experience and SEO, titles (<code>Tag: some-tag</code>) in tag page are no longer slugified (<code>Tag: Some Tag</code>).</p>\n<p><img src=\"https://github.com/satnaing/astro-paper/assets/53733092/2fe90d6e-ec52-467b-9c44-95009b3ae0b7\" alt=\"Unslugified Tag Names\"></p>\n<h3 id=\"implement-100svh-for-min-height-79d569d\">Implement 100svh for Min-Height (<a href=\"https://github.com/satnaing/astro-paper/commit/79d569d053036f2113519f41b0d257523d035b76\">79d569d</a>)</h3>\n<p>We’ve updated the min-height on the body to use 100svh, offering a better UX for mobile users.</p>\n<h3 id=\"update-site-url-as-single-source-of-truth-143\">Update Site URL as Single Source of Truth <a href=\"https://github.com/satnaing/astro-paper/pull/143\">#143</a></h3>\n<p>The site URL is now a single source of truth, streamlining configuration and avoiding inconsistencies. Read more at this <a href=\"https://github.com/satnaing/astro-paper/pull/143\">PR</a> and its related issue(s).</p>\n<h3 id=\"solve-invisible-text-code-block-issue-in-light-mode-163\">Solve Invisible Text Code Block Issue in Light Mode <a href=\"https://github.com/satnaing/astro-paper/pull/163\">#163</a></h3>\n<p>We’ve fixed the invisible text code block issue in light mode.</p>\n<h3 id=\"decode-unicode-tag-characters-in-breadcrumb-175\">Decode Unicode Tag Characters in Breadcrumb <a href=\"https://github.com/satnaing/astro-paper/pull/175\">#175</a></h3>\n<p>The last part of Tag in the breadcrumb is now decoded, making non-English Unicode characters display better.</p>\n<h3 id=\"update-locale-config-to-cover-overall-locales-cd02b04\">Update LOCALE Config to Cover Overall Locales (<a href=\"https://github.com/satnaing/astro-paper/commit/cd02b047d2b5e3b4a2940c0ff30568cdebcec0b8\">cd02b04</a>)</h3>\n<p>The LOCALE configuration has been updated to cover a broader range of locales, catering to a more diverse audience.</p>\n<h2 id=\"outtro\">Outtro</h2>\n<p>We believe these updates will significantly elevate your AstroPaper experience. Thank you to everyone who contributed, solved issues, and gave stars to AstroPaper. We look forward to seeing the amazing content you create with AstroPaper v4!</p>\n<p>Happy Blogging!</p>\n<p><a href=\"https://satnaing.dev\">Sat Naing</a> <br>\nCreator of AstroPaper</p>");
	

				const frontmatter = {"author":"Sat Naing","pubDatetime":"2024-01-04T09:30:41.816Z","title":"AstroPaper 4.0","slug":"astro-paper-v4","featured":true,"ogImage":"../../assets/images/AstroPaper-v4.png","tags":["release"],"description":"AstroPaper v4: ensuring a smoother and more feature-rich blogging experience."};
				const file = "/Users/lakshya/Desktop/projects/superior-spiral/src/content/blog/astro-paper-4.md";
				const url = undefined;
				function rawContent() {
					return "\nHello everyone! Wishing you a happy New Year 🎉 and all the best for 2024! We're excited to announce the release of AstroPaper v4, a significant update that introduces a range of new features, improvements, and bug fixes to elevate your blogging experience. A big thank you to all the contributors for their valuable input and efforts in making version 4 possible!\n\n![AstroPaper v4](@assets/images/AstroPaper-v4.png)\n\n## Table of contents\n\n## Major Changes\n\n### Upgrade to Astro v4 [#202](https://github.com/satnaing/astro-paper/pull/202)\n\nAstroPaper now leverages the power and capabilities of Astro v4. However, it’s a subtle upgrade and won’t break most Astro users.\n\n![Astro v4](https://astro.build/_astro/header-astro-4.GLp8HjfV.webp)\n\n### Replace `postSlug` with Astro Content `slug` [#197](https://github.com/satnaing/astro-paper/pull/197)\n\nThe `postSlug` in the blog content schema is no longer available in AstroPaper v4. Initially Astro doesn't have a `slug` mechanism and thus we have to figure it out on our own. Since Astro v3, it supports content collection and slug features. Now, we believe it's time to adopt Astro's out-of-the-box `slug` feature.\n\n**_file: src/content/blog/astro-paper-4.md_**\n\n```bash\n---\nauthor: Sat Naing\npubDatetime: 2024-01-01T04:35:33.428Z\ntitle: AstroPaper 4.0\nslug: \"astro-paper-v4\" # if slug is not specified, it will be 'astro-paper-4' (file name).\n# slug: \"\" ❌ cannot be an empty string\n---\n```\n\nThe behavior of the `slug` is slightly different now. In the previous versions of AstroPaper, if the `postSlug` is not specified in a blog post (markdown file), the title of that blog post would be slugified and used as the `slug`. However, in AstroPaper v4, if the `slug` field is not specified, the markdown file name will be used as the `slug`. One thing to keep in mind is that the `slug` field can be omitted, but it cannot be an empty string (slug: \"\" ❌).\n\nIf you're upgrading AstroPaper from v3 to v4, make sure to replace `postSlug` in your `src/content/blog/*.md` files with `slug`.\n\n## New Features\n\n### Add code-snippets for content creation [#206](https://github.com/satnaing/astro-paper/pull/206)\n\nAstroPaper now includes VSCode snippets for new blog posts, eliminating the need for manual copy/pasting of the frontmatter and content structure (table of contents, heading, excerpt, etc.).\n\nRead more about VSCode Snippets [here](https://code.visualstudio.com/docs/editor/userdefinedsnippets#:~:text=In%20Visual%20Studio%20Code%2C%20snippets,Snippet%20in%20the%20Command%20Palette).\n\n<video autoplay muted=\"muted\" controls plays-inline=\"true\" class=\"border border-skin-line\">\n  <source src=\"https://github.com/satnaing/astro-paper/assets/53733092/136f1903-bade-40a2-b6bb-285a3c726350\" type=\"video/mp4\">\n</video>\n\n### Add Modified Datetime in Blog Posts [#195](https://github.com/satnaing/astro-paper/pull/195)\n\nKeep readers informed about the latest updates by displaying the modified datetime in blog posts. This not only instills user trust in the freshness of the articles but also contributes to improved SEO for the blog.\n\n![Last Modified Date feature in AstroPaper](https://github.com/satnaing/astro-paper/assets/53733092/cc89585e-148e-444d-9da1-0d496e867175)\n\nYou can add a `modDatetime` to your blog post if you've made modifications. Now, the sorting behavior of the posts is slightly different. All posts are sorted by both `pubDatetime` and `modDatetime`. If a post has both a `pubDatetime` and `modDatetime`, its sorting position will be determined by the `modDatetime`. If not, only `pubDatetime` will be considered to determine the post's sorting order.\n\n### Implement Back-to-Top Button [#188](https://github.com/satnaing/astro-paper/pull/188)\n\nEnhance user navigation on your blog detail post with the newly implemented back-to-top button.\n\n![Back to top button in AstroPaper](https://github.com/satnaing/astro-paper/assets/53733092/79854957-7877-4f19-936e-ad994b772074)\n\n### Add Pagination in Tag Posts [#201](https://github.com/satnaing/astro-paper/pull/201)\n\nImprove content organization and navigation with the addition of pagination in tag posts, making it easier for users to explore related content. This ensures that if a tag has many posts, readers won't be overwhelmed by all the tag-related posts.\n\n<video autoplay loop=\"loop\" muted=\"muted\" plays-inline=\"true\" class=\"border border-skin-line\">\n  <source src=\"https://github.com/satnaing/astro-paper/assets/53733092/9bad87f5-dcf5-4b79-b67a-d6c7244cd616\" type=\"video/mp4\">\n</video>\n\n### Dynamically Generate robots.txt [#130](https://github.com/satnaing/astro-paper/pull/130)\n\nAstroPaper v4 now dynamically generates the robots.txt file, giving you more control over search engine indexing and web crawling. Besides, sitemap URL will also be added inside `robot.txt` file.\n\n### Add Docker-Compose File [#174](https://github.com/satnaing/astro-paper/pull/174)\n\nManaging your AstroPaper environment is now easier than ever with the addition of a Docker-Compose file, simplifying deployment and configuration.\n\n## Refactoring & Bug Fixes\n\n### Replace Slugified Title with Unslugified Tag Name [#198](https://github.com/satnaing/astro-paper/pull/198)\n\nTo improve clarity, user experience and SEO, titles (`Tag: some-tag`) in tag page are no longer slugified (`Tag: Some Tag`).\n\n![Unslugified Tag Names](https://github.com/satnaing/astro-paper/assets/53733092/2fe90d6e-ec52-467b-9c44-95009b3ae0b7)\n\n### Implement 100svh for Min-Height ([79d569d](https://github.com/satnaing/astro-paper/commit/79d569d053036f2113519f41b0d257523d035b76))\n\nWe've updated the min-height on the body to use 100svh, offering a better UX for mobile users.\n\n### Update Site URL as Single Source of Truth [#143](https://github.com/satnaing/astro-paper/pull/143)\n\nThe site URL is now a single source of truth, streamlining configuration and avoiding inconsistencies. Read more at this [PR](https://github.com/satnaing/astro-paper/pull/143) and its related issue(s).\n\n### Solve Invisible Text Code Block Issue in Light Mode [#163](https://github.com/satnaing/astro-paper/pull/163)\n\nWe've fixed the invisible text code block issue in light mode.\n\n### Decode Unicode Tag Characters in Breadcrumb [#175](https://github.com/satnaing/astro-paper/pull/175)\n\nThe last part of Tag in the breadcrumb is now decoded, making non-English Unicode characters display better.\n\n### Update LOCALE Config to Cover Overall Locales ([cd02b04](https://github.com/satnaing/astro-paper/commit/cd02b047d2b5e3b4a2940c0ff30568cdebcec0b8))\n\nThe LOCALE configuration has been updated to cover a broader range of locales, catering to a more diverse audience.\n\n## Outtro\n\nWe believe these updates will significantly elevate your AstroPaper experience. Thank you to everyone who contributed, solved issues, and gave stars to AstroPaper. We look forward to seeing the amazing content you create with AstroPaper v4!\n\nHappy Blogging!\n\n[Sat Naing](https://satnaing.dev) <br/>\nCreator of AstroPaper\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"table-of-contents","text":"Table of contents"},{"depth":2,"slug":"major-changes","text":"Major Changes"},{"depth":3,"slug":"upgrade-to-astro-v4-202","text":"Upgrade to Astro v4 #202"},{"depth":3,"slug":"replace-postslug-with-astro-content-slug-197","text":"Replace postSlug with Astro Content slug #197"},{"depth":2,"slug":"new-features","text":"New Features"},{"depth":3,"slug":"add-code-snippets-for-content-creation-206","text":"Add code-snippets for content creation #206"},{"depth":3,"slug":"add-modified-datetime-in-blog-posts-195","text":"Add Modified Datetime in Blog Posts #195"},{"depth":3,"slug":"implement-back-to-top-button-188","text":"Implement Back-to-Top Button #188"},{"depth":3,"slug":"add-pagination-in-tag-posts-201","text":"Add Pagination in Tag Posts #201"},{"depth":3,"slug":"dynamically-generate-robotstxt-130","text":"Dynamically Generate robots.txt #130"},{"depth":3,"slug":"add-docker-compose-file-174","text":"Add Docker-Compose File #174"},{"depth":2,"slug":"refactoring--bug-fixes","text":"Refactoring & Bug Fixes"},{"depth":3,"slug":"replace-slugified-title-with-unslugified-tag-name-198","text":"Replace Slugified Title with Unslugified Tag Name #198"},{"depth":3,"slug":"implement-100svh-for-min-height-79d569d","text":"Implement 100svh for Min-Height (79d569d)"},{"depth":3,"slug":"update-site-url-as-single-source-of-truth-143","text":"Update Site URL as Single Source of Truth #143"},{"depth":3,"slug":"solve-invisible-text-code-block-issue-in-light-mode-163","text":"Solve Invisible Text Code Block Issue in Light Mode #163"},{"depth":3,"slug":"decode-unicode-tag-characters-in-breadcrumb-175","text":"Decode Unicode Tag Characters in Breadcrumb #175"},{"depth":3,"slug":"update-locale-config-to-cover-overall-locales-cd02b04","text":"Update LOCALE Config to Cover Overall Locales (cd02b04)"},{"depth":2,"slug":"outtro","text":"Outtro"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
