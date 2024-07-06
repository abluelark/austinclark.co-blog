export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
    texted: string;
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: "Austin Clark's Nook",
    subtitle: '...thoughts on current issues, talent development, and music.',
    description: 'a blog for Austin Clark',
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        /*         {
                    text: 'Projects',
                    href: '/projects'
                }, */
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'AI Statement',
            href: '/ai'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/austintclark/'
        },
    ],
    hero: {
        title: 'Hello and Welcome!',
        text: "This blog is a cozy, warm, and calm space where I share my insights on the world, talent development, and my love for music. If you somehow arrived to this nook without knowing me personally, please take a look at the <a href='https://austinclark.co/about/'>About</a> page to learn more.",
        texted: 'None of the content on this site is written, edited, formulated, or modified in any way by artificial intelligence.',
        actions: [
            {
                text: 'AI Statement',
                href: '/ai'
            }
        ]
    },

    postsPerPage: 4,
    projectsPerPage: 4
};

export default siteConfig;
