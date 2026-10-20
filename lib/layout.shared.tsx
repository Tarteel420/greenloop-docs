import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <img
            src="/logo.png"
            alt="Greenloop logo"
            width={62}
            height={62}
            style={{ borderRadius: '4px' }}
          />
          Greenloop Docs
        </>
      ),
    },
    links: [
      { text: 'Getting Started', url: '/docs/getting-started', active: 'nested-url' },
      { text: 'Users', url: '/docs/user-management', active: 'nested-url' },
      { text: 'System', url: '/docs/system-resources', active: 'nested-url' },
      { text: 'Catalog', url: '/docs/catalog', active: 'nested-url' },
      { text: 'Leads', url: '/docs/lead-management', active: 'nested-url' },
      { text: 'Customers', url: '/docs/customer-management', active: 'nested-url' },
      { text: 'Pricing', url: '/docs/pricing-billing', active: 'nested-url' },
      { text: 'Operations', url: '/docs/operations', active: 'nested-url' },
      { text: 'Reports', url: '/docs/reports', active: 'nested-url' },
      { text: 'Resources', url: '/docs/resources', active: 'nested-url' },
    ],
  };
}
