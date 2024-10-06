export default defineAppConfig({
    logo: 'https://fav.farm/😎',

    url: 'https://scotthanson.de/',

    theme: 'mistral',

    // The name of the blog itself
    name: 'ScottHanson.DE',
    avatar: 'https://gravatar.com/avatar/910fa78695455feb1e28aecb4ce3debf?size=256&cache=1728119757242',
    // The description of the blog if any
    description:  'Saving it up for Friday night',

    analytics: {
        // provider: 'pirsch',
        // pirsch: {
        //     code: 'UMgcWhIpdgfYXWLqLmCesiKf6vpSZBfv'
        // }
    },

    socials: {
        twitter: 'https://twitter.com',
        mastodon: 'https://piaille.fr',
        youtube: 'https://youtube.com',
        linkedin: 'https://linkedin.com',
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        github: 'https://github.com',

        // possible values : 'facebook', 'twitter', 'linkedin', 'email', 'pinterest', 'reddit', 'pocket', 'whatsapp', 'telegram', 'skype'
        // see https://github.com/stefanobartoletti/nuxt-social-share
        sharing_networks: ['facebook', 'twitter', 'linkedin', 'email', 'pinterest', 'reddit', 'pocket', 'whatsapp', 'telegram', 'skype']
    },

    newsletter: {
        enabled: false,
        form_action: 'rssfeedpulse',
        provider: 'https://rssfeedpulse.com/api/campaign/996539cf-73e4-47b5-8d7c-2d7450174467/subscribe'
    },

    comments: {
        enabled: false,
        // hyvor_talk: {
        //     website_id: '10519', // Replace with your Hyvor Talk website ID (it won't work with this one)
        // },
    },

    table_of_contents: false,

    // the list of authors
    // the default author will be used for all posts if no author is specified
    // and the mistral theme use the default author for the main page
    authors: [
        {
            username: 'scotthansonde',
            default: true,
            name: 'Scott Hanson',
            description:
                "I'm here and you're not",
            avatar: 'https://gravatar.com/avatar/910fa78695455feb1e28aecb4ce3debf?size=256&cache=1728119757242',
            socials: {
                twitter: 'https://twitter.com/scotthansonde',
                twitter_username: 'scotthansonde',
                mastodon: 'https://norden.social/@scotthansonde',
                // youtube: 'https://youtube.com/@eventuallycoding',
                // linkedin: 'https://www.linkedin.com/in/hugolassiege/',
                // facebook: 'https://facebook.com',
                // instagram: 'https://instagram.com',
                github: 'https://github.com/scotthansonde',
            },
        },
    ],

    menu: () => [
        { name: 'Home', path: '/' },
        // { name: 'Documentation', path: '/about' },
        { name: 'Archives', path: '/archives' },
    ],

    robots: [
        {
            UserAgent: '*',
            Allow: ['/'],
        },
    ],
})
