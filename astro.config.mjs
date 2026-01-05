// @ts-check

import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import {defineConfig} from 'astro/config'

// https://astro.build/config
export default defineConfig({
    output: 'static', // default value, Static Site Generation
    trailingSlash: 'always', // Manage trailing slashes in URLs for SEO and serve HTML from Cloudfront. We will discuss this later.
    site: 'https://example.com',
    integrations: [
        mdx(),
        sitemap({
            changefreq: 'weekly',
            priority: 1,
            lastmod: new Date(), //
            xslURL: '/sitemap/css/main-sitemap.xsl', // Optional. Custom XSL stylesheet for better readability
            i18n: {
                defaultLocale: 'es', // All urls that don't contain `es` or `fr` after `https://example.com/` will be treated as default locale, i.e. `en`
                locales: {
                    es: 'es-ES', // The `defaultLocale` value must present in `locales` keys
                    en: 'en-US',
                },
            },
        }),
    ],
})
