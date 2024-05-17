import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_M3CLt_ij.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h3 id=\"hello-world\">Hello World!</h3>\n<p>Printed on the console while I was trying to learn programming approx 6 years ago. My mind couldn’t how far I will reach from trying to be a hacker to sr. software engineer.</p>\n<p><strong>This blog is my unhinged space on internet. I want to write about coffee, tech, coding, my personal experiences, book summaries, self improvement, my thoughts, stars anything ;)</strong></p>\n<h3 id=\"why-i-chose-astrobuild\">Why I chose AstroBuild</h3>\n<p>Seemed a little cool and the was very easy to setup and get started.</p>";

				const frontmatter = {"title":"Welcome to the Beginning","author":"Lakshya Khera","pubDatetime":"2024-05-18T00:00:00.000Z","slug":"the-beginning","featured":true,"draft":false,"tags":["personal"],"description":"Just an introduction about this cute little space on internet."};
				const file = "/Users/lakshya/Desktop/projects/superior-spiral/src/content/blog/welcome-to-the-beginning.md";
				const url = undefined;
				function rawContent() {
					return "\n### Hello World!\n\nPrinted on the console while I was trying to learn programming approx 6 years ago. My mind couldn't how far I will reach from trying to be a hacker to sr. software engineer. \n\n**This blog is my unhinged space on internet. I want to write about coffee, tech, coding, my personal experiences, book summaries, self improvement, my thoughts, stars anything ;)**\n\n### Why I chose AstroBuild\nSeemed a little cool and the was very easy to setup and get started.  ";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"hello-world","text":"Hello World!"},{"depth":3,"slug":"why-i-chose-astrobuild","text":"Why I chose AstroBuild"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
