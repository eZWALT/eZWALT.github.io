// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'The Scaling Journey',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com' }],
			sidebar: [
				{
					label: 'Scaling Laws',
					items: [{ autogenerate: { directory: 'scaling-laws' } }],
				},
				{
					label: 'Transformers',
					items: [{ autogenerate: { directory: 'transformers' } }],
				},
				{
					label: 'Compression',
					items: [{ autogenerate: { directory: 'compression' } }],
				},
				{
					label: 'Retrieval & RAG',
					items: [{ autogenerate: { directory: 'retrieval' } }],
				},
				{
					label: 'Pre-training',
					items: [{ autogenerate: { directory: 'pre-training' } }],
				},
				{
					label: 'Mid-training',
					items: [{ autogenerate: { directory: 'mid-training' } }],
				},
				{
					label: 'Post-training',
					items: [{ autogenerate: { directory: 'post-training' } }],
				},
			],
		}),
	],
});
