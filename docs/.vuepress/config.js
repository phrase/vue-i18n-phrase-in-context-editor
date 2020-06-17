module.exports = {
    title: 'Vue I18n Phrase In-Context Editor',
    description: 'Integrate Phrase In-Context Editor into your Vue I18n app with ease!',
    base: '/vue-i18n-phrase-in-context-editor/',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'API', link: '/api/' },
            { text: 'Examples', link: '/examples/' },
            { text: 'Contact Us', link: 'https://phrase.com/contact' }
        ],
        sidebar: {
            '/guide/': [
                '',
                'getting-started',
                '../api/',
                '../examples/'
            ],
            '/api/': [
                '../guide/',
                '../guide/getting-started',
                '',
                '../examples/'
            ],
            '/examples/': [
                '../guide/',
                '../guide/getting-started',
                '../api/',
                ''
            ]
        },
        searchPlaceholder: 'Search in docs...',
        repo: 'phrase/vue-i18n-phrase-in-context-editor',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: 'Help us improve this page on GitHub',
        smoothScroll: true,
        displayAllHeaders: true,
        image: '/phrase-logo.jpg',
        domain: 'https://phrase.github.io/vue-i18n-phrase-in-context-editor'
    },
    plugins: [
        '@vuepress/last-updated',
        [
            'vuepress-plugin-clean-urls',
            {
                normalSuffix: '/',
                indexSuffix: '/',
                notFoundPath: '/404.html',
            },
        ],
        [
            'seo',
            {
                title: ($page, $site) => $page.path === '/' ? $site.title : $page.title,
                description: ($page, $site) => $page.frontmatter.description || $site.description,
                type: $page => $page.path === '/' ? 'website' : 'article',
                image: ($page, $site) => {
                    const image = $page.frontmatter.image || $site.themeConfig.image;
                    return image && ((!image.startsWith('http') && $site.themeConfig.domain || '') + image)
                }
            },
        ]
    ],
}
