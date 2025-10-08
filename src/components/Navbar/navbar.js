import jb from '../../../public/assets/images/jb.png'
import apiIntergration from '../../../public/assets/images/api-intergration.png'
import digitalMarketing from '../../../public/assets/images/digital-marketing.png'
import mobileApplication from '../../../public/assets/images/mobile-application.png'
import uiUx from '../../../public/assets/images/ui-ux.png'
export const megaMenu = [
  { name: 'Home', path: '/' },
  {
    name: 'Services',
    path: '/services',
    submenu: [
      {
        name: 'Web Development',
        path: '/services/web-development',
        icon: jb,
        description:
          'Modern, fast, and secure web development tailored to your business needs.',
        submenu: [
          {
            name: 'Frontend Development',
            path: '/services/web-development/frontend',
            description:
              'Build stunning and responsive UI with React, HTML, CSS, and JavaScript.',
          },
          {
            name: 'Backend Development',
            path: '/services/web-development/backend',
            description:
              'Scalable and secure backend using Node.js, Express, and MongoDB.',
          },
          {
            name: 'Full Stack Development',
            path: '/services/web-development/fullstack',
            description:
              'End-to-end web solutions combining frontend and backend technologies.',
          },
          {
            name: 'E-Commerce Development',
            path: '/services/web-development/ecommerce',
            description:
              'Custom, secure, and conversion-optimized eCommerce platforms.',
          },
          {
            name: 'CMS Development',
            path: '/services/web-development/cms',
            description:
              'Custom WordPress, Shopify, and headless CMS integration.',
          },
          {
            name: 'Frontend Development',
            path: '/services/web-development/frontend',
            description:
              'Build stunning and responsive UI with React, HTML, CSS, and JavaScript.',
          },
          {
            name: 'Backend Development',
            path: '/services/web-development/backend',
            description:
              'Scalable and secure backend using Node.js, Express, and MongoDB.',
          },
          {
            name: 'Full Stack Development',
            path: '/services/web-development/fullstack',
            description:
              'End-to-end web solutions combining frontend and backend technologies.',
          },
          {
            name: 'E-Commerce Development',
            path: '/services/web-development/ecommerce',
            description:
              'Custom, secure, and conversion-optimized eCommerce platforms.',
          },
          {
            name: 'CMS Development',
            path: '/services/web-development/cms',
            description:
              'Custom WordPress, Shopify, and headless CMS integration.',
          },
        ],
      },
      {
        name: 'Mobile Application Development',
        path: '/services/app-development',
        icon: mobileApplication,
        description:
          'Native and cross-platform mobile app development solutions.',
        submenu: [
          { name: 'iOS Development', path: '/services/app-development/ios' },
          {
            name: 'Android Development',
            path: '/services/app-development/android',
          },
          {
            name: 'Cross-Platform Apps',
            path: '/services/app-development/cross-platform',
          },
        ],
      },
      {
        name: 'ERP Solutions',
        path: '/services/erp',
        icon: apiIntergration,
        description:
          'Enterprise resource planning systems for business automation.',
      },
      {
        name: 'UI/UX Design',
        path: '/services/ui-ux',
        icon: uiUx,
        description:
          'User-centered designs with modern design systems and wireframes.',
      },
      {
        name: 'Digital Marketing',
        path: '/services/digital-marketing',
        icon: digitalMarketing,
        description:
          'Drive traffic, leads, and sales through effective online marketing.',
      },
    ],
  },
  {
    name: 'Products',
    path: '/products',
    submenu: [
      {
        name: 'Software',
        path: '/products/software',
        submenu: [
          {
            name: 'Productivity Tools',
            path: '/products/software/productivity',
          },
          { name: 'Security Solutions', path: '/products/software/security' },
        ],
      },
      { name: 'Templates', path: '/products/templates' },
      { name: 'Plugins', path: '/products/plugins' },
      { name: 'Themes', path: '/products/themes' },
    ],
  },
  {
    name: 'About',
    path: '/about',
    submenu: [
      { name: 'Our Team', path: '/about/team' },
      { name: 'Our Story', path: '/about/story' },
      { name: 'Careers', path: '/about/careers' },
      { name: 'Contact Us', path: '/about/contact' },
    ],
  },
];
