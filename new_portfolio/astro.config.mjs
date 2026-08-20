// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://ezwalt.github.io',
	redirects: {
		'/about': '/me/about/',
		'/cv': '/me/cv/',
		'/blogs': '/writing/',
		'/blogs/first-post': '/writing/essays/first-post/',
	},
	integrations: [
		starlight({
			title: 'The Scaling Journey',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/eZWALT' },
			],
			sidebar: [
				{
					label: 'Writing',
					items: [
						{ label: 'Overview', link: '/writing/' },
						{
							label: 'Essays',
							items: [{ autogenerate: { directory: 'writing/essays' } }],
						},
						{
							label: 'Notes',
							items: [{ autogenerate: { directory: 'writing/notes' } }],
						},
					],
				},
				{
					label: 'LLMs',
					items: [
						{ label: 'Overview', link: '/llms/' },
						{ label: 'Troiani', link: '/llms/troiani/' },
						{
							label: 'Architecture',
							collapsed: true,
							items: [{ autogenerate: { directory: 'llms/architecture' } }],
						},
						{
							label: 'Scaling',
							collapsed: true,
							items: [{ autogenerate: { directory: 'llms/scaling' } }],
						},
						{
							label: 'Pre-training',
							collapsed: true,
							items: [{ autogenerate: { directory: 'llms/pre-training' } }],
						},
						{
							label: 'Mid-training',
							collapsed: true,
							items: [{ autogenerate: { directory: 'llms/mid-training' } }],
						},
						{
							label: 'Compression',
							collapsed: true,
							items: [{ autogenerate: { directory: 'llms/compression' } }],
						},
						{
							label: 'Retrieval & RAG',
							collapsed: true,
							items: [{ autogenerate: { directory: 'llms/retrieval' } }],
						},
					],
				},
				{
					label: 'World Models',
					items: [
						{ label: 'Overview', link: '/world-models/' },
						{ label: 'Foundations', link: '/world-models/foundations/' },
						{
							label: 'Prediction',
							collapsed: true,
							items: [{ autogenerate: { directory: 'world-models/prediction' } }],
						},
						{ label: 'Workloads', link: '/world-models/workloads/' },
						{ label: 'Evaluation', link: '/world-models/evaluation/' },
						{ label: 'Research notes', link: '/world-models/research-notes/' },
					],
				},
				{
					label: 'AI Infra',
					items: [
						{ label: 'Overview', link: '/ai-infra/' },
						{ label: 'Performance', link: '/ai-infra/performance/' },
						{ label: 'Training systems', link: '/ai-infra/training-systems/' },
						{ label: 'Inference systems', link: '/ai-infra/inference-systems/' },
						{ label: 'Cluster & platform', link: '/ai-infra/cluster-and-platform/' },
						{ label: 'Data plane', link: '/ai-infra/data-plane/' },
						{ label: 'Kernels & compilers', link: '/ai-infra/kernels-and-compilers/' },
						{ label: 'Deployment', link: '/ai-infra/deployment/' },
						{ label: 'World Model Platform', link: '/ai-infra/world-model-platform/' },
					],
				},
				{
					label: 'Me',
					items: [
						{ label: 'About', link: '/me/about/' },
						{ label: 'CV', link: '/me/cv/' },
						{ label: 'Work', link: '/me/work/' },
						{ label: 'Projects', link: '/me/projects/' },
						{ label: 'Old site', link: '/me/old-site/' },
					],
				},
			],
		}),
	],
});
