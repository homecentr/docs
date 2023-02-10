import { defineCollection, z } from 'astro:content';
import { SITE } from '../consts';

const title = z.string()
const description = z.string().default(SITE.description)
const menuIcon = z.string()
const menuOrder = z.number()
const enableComments = z.boolean().default(true)
const enableToC = z.boolean().default(true)
const relatedArticles = z.object({
		kbTags: z.array(z.string()).default([]),
		links: z.array(z.object({
			title: z.string(),
			href: z.string()	
		})).default([])
	}).default({
		kbTags: [],
		links: []
	})

const status = z.enum(['Live', 'Evaluated', 'Deprecated'])

const general = defineCollection({
	schema: z.object({
		title,
		description,
		menuIcon,
		menuOrder,
		enableComments,
		enableToC,
		relatedArticles
	}),
});

const selfhosted = defineCollection({
	schema: z.object({
		title,
		description,
		menuIcon,
		enableComments,
		enableToC,
		relatedArticles,
		status,
		runtimeEnvironment: z.enum(['Kubernetes', 'Bare Metal']),
		license: z.string(),
		sso: z.string(),
		authorization: z.string(),
		mfa: z.string(),
		exposure: z.string(),
		downtimeImpact: z.string(),
		failoverStrategy: z.string(),
		managedBy: z.enum(['ansible', 'argocd'])
	}),
});

const cloud = defineCollection({
	schema: z.object({
		title,
		description,
		menuIcon,
		enableComments,
		enableToC,
		relatedArticles,
		status,
		pricing: z.string(),
		sso: z.string(),
		authorization: z.string(),
		mfa: z.string(),
		downtimeImpact: z.string(),
		configuration: z.string()
	}),
});

const hardware = defineCollection({
	schema: z.object({
		title,
		description,
		menuIcon,
		enableComments,
		enableToC,
		relatedArticles
	}),
});

const kb = defineCollection({
	schema: z.object({
		title,
		description,
		enableComments,
		enableToC,
		tags: z.array(z.string())
	}),
});

export const collections = {
	general,
	cloud,
	selfhosted,
	hardware,
	kb
};
