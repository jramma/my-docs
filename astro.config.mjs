// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import starlight from '@astrojs/starlight';


// https://astro.build/config
export default defineConfig({
	output: "static",
	site: "https://docs.casset.cat",
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/jramma' },
			{ icon: 'external', label: 'Portfolio', href: 'https://casset.cat' }
			],
			sidebar: [
				{
					label: 'Coding',
					items: [{ autogenerate: { directory: 'code' } }],
				},
				{
					label: 'Guides',
					items: [{ autogenerate: { directory: 'guides' } }],
				},
				{
					label: 'Linux',
					items: [
						{ autogenerate: { directory: 'linux' } },
					],
				}
			],
			head: [
				// Añadir description en el head
				{
					tag: 'meta',
					attrs: {
						name: 'description',
						content: 'Tu descripción por defecto',
					},
				},
			],
			customCss: [
				'./src/styles/global.css',
				'@fontsource/open-sans/400.css',
				'@fontsource/geist-mono/500.css',
			],
		}),
	],
	fonts: [{
		provider: fontProviders.fontsource(),
		name: "Open Sans",
		cssVariable: "--font-sans",
	}],
});