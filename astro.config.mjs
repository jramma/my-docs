// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	output: "static",
	site: "https://docs.casset.cat",

	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/jramma' }],
			sidebar: [
				{
					label: 'Guides',
					items: [{ autogenerate: { directory: 'guides' } }],
				},
				{
					label: 'Linux',
					items: [{ autogenerate: { directory: 'linux' } }],
				},
				{
					label : 'Index',
					link:'/indice/'
				}
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

	vite: {
		plugins: [tailwindcss()]
	}
});