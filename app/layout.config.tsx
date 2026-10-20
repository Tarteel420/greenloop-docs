import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: 'Greenloop Docs',
  },
  links: [
    { text: 'Getting Started', url: '/docs/getting-started', active: 'nested-url' },
    { text: 'User Management', url: '/docs/user-management', active: 'nested-url' },
    { text: 'System & Resources', url: '/docs/system-resources', active: 'nested-url' },
    { text: 'Catalog', url: '/docs/catalog', active: 'nested-url' },
    { text: 'Customer Management', url: '/docs/customer-management', active: 'nested-url' },
    { text: 'Pricing & Billing', url: '/docs/pricing-billing', active: 'nested-url' },
    { text: 'Operations', url: '/docs/operations', active: 'nested-url' },
    { text: 'Resources', url: '/docs/resources', active: 'nested-url' },
  ],
};