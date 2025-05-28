/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';
import { Helpers } from 'app/main/helpers/Helpers';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'aquasentry',
        title: 'AQUA SENTRY',
        type: 'group',
        icon: 'mat_solid:water_drop', // Icône plus adaptée pour Aqua Sentry (eau)
        children: [
            {
                id: 'aquasentry.dashboard',
                title: 'Tableau de Bord',
                type: 'basic',
                icon: 'mat_solid:dashboard',
                link: '/aqua-sentry/dashboard',
                hidden: () => !Helpers.hasRole('ADMINISTRATEUR'),
            },
            {
                id: 'aquasentry.signalement',
                title: 'Gestion des Signalements',
                type: 'collapsable',
                icon: 'mat_solid:report_problem', // Icône adaptée pour signalements
                hidden: () => !Helpers.hasRoles(['ADMINISTRATEUR', 'USER']),
                children: [
                    {
                        id: 'aquasentry.signalement.list',
                        title: 'Liste des fuites',
                        type: 'basic',
                        link: '/apps/signalements',
                        icon: 'mat_solid:leak_add', // Icône pour fuites
                    },
                    {
                        id: 'aquasentry.configurations.gravites',
                        title: 'Gravités de fuite',
                        type: 'basic',
                        link: '/apps/gravites',
                        icon: 'mat_solid:warning', // Icône pour gravité
                    },
                    {
                        id: 'aquasentry.configurations.statuts',
                        title: 'Statuts',
                        type: 'basic',
                        link: '/apps/statuts',
                        icon: 'mat_solid:assignment', // Icône pour statuts
                    },
                ],
            },
            {
                id: 'aquasentry.administrations',
                title: 'Administration',
                type: 'collapsable',
                icon: 'mat_solid:admin_panel_settings', // Icône pour administration
                hidden: () => !Helpers.hasRoles(['ADMINISTRATEUR', 'USER']),
                children: [
                    {
                        id: 'aquasentry.administration.utilisateurs',
                        title: 'Utilisateurs',
                        type: 'basic',
                        link: '/apps/users',
                        icon: 'mat_solid:people', // Icône pour utilisateurs
                        hidden: () => !Helpers.hasRoles(['ADMINISTRATEUR', 'USER']),
                    },
                ],
            },
            {
                id: 'aquasentry.configurations',
                title: 'Configuration',
                type: 'collapsable',
                icon: 'mat_solid:settings', // Icône pour configuration
                hidden: () => !Helpers.hasRoles(['ADMINISTRATEUR', 'USER']),
                children: [
                    {
                        id: 'aquasentry.configurations.communes',
                        title: 'Communes',
                        type: 'basic',
                        link: '/apps/communes',
                        icon: 'mat_solid:location_city', // Icône pour communes
                    },
                    {
                        id: 'aquasentry.configurations.quartiers',
                        title: 'Quartiers',
                        type: 'basic',
                        link: '/apps/quartiers',
                        icon: 'mat_solid:map', // Icône pour quartiers
                    },
                ],
            },
        ]
    }
];

export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'aquasentry',
        title: 'AQUA SENTRY',
        type: 'group',
        icon: 'mat_solid:water_drop',
        children: [
            {
                id: 'aquasentry.dashboard',
                title: 'Tableau de Bord',
                type: 'basic',
                icon: 'mat_solid:dashboard',
                link: '/aqua-sentry/dashboard',
                hidden: () => !Helpers.hasRole('ADMINISTRATEUR'),
            },
            {
                id: 'aquasentry.signalement',
                title: 'Gestion des Signalements',
                type: 'collapsable',
                icon: 'mat_solid:report_problem',
                hidden: () => !Helpers.hasRoles(['ADMINISTRATEUR', 'USER']),
                children: [
                    {
                        id: 'aquasentry.signalement.list',
                        title: 'Liste des fuites',
                        type: 'basic',
                        link: '/apps/signalements',
                        icon: 'mat_solid:leak_add',
                    },
                    {
                        id: 'aquasentry.configurations.gravites',
                        title: 'Gravités de fuite',
                        type: 'basic',
                        link: '/apps/gravites',
                        icon: 'mat_solid:warning',
                    },
                    {
                        id: 'aquasentry.configurations.statuts',
                        title: 'Statuts',
                        type: 'basic',
                        link: '/apps/statuts',
                        icon: 'mat_solid:assignment',
                    },
                ],
            },
            {
                id: 'aquasentry.administrations',
                title: 'Administration',
                type: 'collapsable',
                icon: 'mat_solid:admin_panel_settings',
                hidden: () => !Helpers.hasRoles(['ADMINISTRATEUR', 'USER']),
                children: [
                    {
                        id: 'aquasentry.administration.utilisateurs',
                        title: 'Utilisateurs',
                        type: 'basic',
                        link: '/apps/users',
                        icon: 'mat_solid:people',
                        hidden: () => !Helpers.hasRoles(['ADMINISTRATEUR', 'USER']),
                    },
                ],
            },
            {
                id: 'aquasentry.configurations',
                title: 'Configuration',
                type: 'collapsable',
                icon: 'mat_solid:settings',
                hidden: () => !Helpers.hasRoles(['ADMINISTRATEUR', 'USER']),
                children: [
                    {
                        id: 'aquasentry.configurations.communes',
                        title: 'Communes',
                        type: 'basic',
                        link: '/apps/communes',
                        icon: 'mat_solid:location_city',
                    },
                    {
                        id: 'aquasentry.configurations.quartiers',
                        title: 'Quartiers',
                        type: 'basic',
                        link: '/apps/quartiers',
                        icon: 'mat_solid:map',
                    },
                ],
            },
        ]
    }
];

export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'aquasentry',
        title: 'AQUA SENTRY',
        type: 'group',
        icon: 'mat_solid:water_drop',
        children: [
            {
                id: 'aquasentry.dashboard',
                title: 'Tableau de Bord',
                type: 'basic',
                icon: 'mat_solid:dashboard',
                link: '/aqua-sentry/dashboard',
                hidden: () => !Helpers.hasRole('ADMINISTRATEUR'),
            },
            {
                id: 'aquasentry.signalement',
                title: 'Gestion des Signalements',
                type: 'collapsable',
                icon: 'mat_solid:report_problem',
                hidden: () => !Helpers.hasRoles(['ADMINISTRATEUR', 'USER']),
                children: [
                    {
                        id: 'aquasentry.signalement.list',
                        title: 'Liste des fuites',
                        type: 'basic',
                        link: '/apps/signalements',
                        icon: 'mat_solid:leak_add',
                    },
                    {
                        id: 'aquasentry.configurations.gravites',
                        title: 'Gravités de fuite',
                        type: 'basic',
                        link: '/apps/gravites',
                        icon: 'mat_solid:warning',
                    },
                    {
                        id: 'aquasentry.configurations.statuts',
                        title: 'Statuts',
                        type: 'basic',
                        link: '/apps/statuts',
                        icon: 'mat_solid:assignment',
                    },
                ],
            },
            {
                id: 'aquasentry.administrations',
                title: 'Administration',
                type: 'collapsable',
                icon: 'mat_solid:admin_panel_settings',
                hidden: () => !Helpers.hasRoles(['ADMINISTRATEUR', 'USER']),
                children: [
                    {
                        id: 'aquasentry.administration.utilisateurs',
                        title: 'Utilisateurs',
                        type: 'basic',
                        link: '/apps/users',
                        icon: 'mat_solid:people',
                        hidden: () => !Helpers.hasRoles(['ADMINISTRATEUR', 'USER']),
                    },
                ],
            },
            {
                id: 'aquasentry.configurations',
                title: 'Configuration',
                type: 'collapsable',
                icon: 'mat_solid:settings',
                hidden: () => !Helpers.hasRoles(['ADMINISTRATEUR', 'USER']),
                children: [
                    {
                        id: 'aquasentry.configurations.communes',
                        title: 'Communes',
                        type: 'basic',
                        link: '/apps/communes',
                        icon: 'mat_solid:location_city',
                    },
                    {
                        id: 'aquasentry.configurations.quartiers',
                        title: 'Quartiers',
                        type: 'basic',
                        link: '/apps/quartiers',
                        icon: 'mat_solid:map',
                    },
                ],
            },
        ]
    }
];

export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'aquasentry',
        title: 'AQUA SENTRY',
        type: 'group',
        icon: 'mat_solid:water_drop',
        children: [
            {
                id: 'aquasentry.dashboard',
                title: 'Tableau de Bord',
                type: 'basic',
                icon: 'mat_solid:dashboard',
                link: '/aqua-sentry/dashboard',
                hidden: () => !Helpers.hasRole('ADMINISTRATEUR'),
            },
            {
                id: 'aquasentry.signalement',
                title: 'Gestion des Signalements',
                type: 'collapsable',
                icon: 'mat_solid:report_problem',
                hidden: () => !Helpers.hasRoles(['ADMINISTRATEUR', 'USER']),
                children: [
                    {
                        id: 'aquasentry.signalement.list',
                        title: 'Liste des fuites',
                        type: 'basic',
                        link: '/apps/signalements',
                        icon: 'mat_solid:leak_add',
                    },
                    {
                        id: 'aquasentry.configurations.gravites',
                        title: 'Gravités de fuite',
                        type: 'basic',
                        link: '/apps/gravites',
                        icon: 'mat_solid:warning',
                    },
                    {
                        id: 'aquasentry.configurations.statuts',
                        title: 'Statuts',
                        type: 'basic',
                        link: '/apps/statuts',
                        icon: 'mat_solid:assignment',
                    },
                ],
            },
            {
                id: 'aquasentry.administrations',
                title: 'Administration',
                type: 'collapsable',
                icon: 'mat_solid:admin_panel_settings',
                hidden: () => !Helpers.hasRoles(['ADMINISTRATEUR', 'USER']),
                children: [
                    {
                        id: 'aquasentry.administration.utilisateurs',
                        title: 'Utilisateurs',
                        type: 'basic',
                        link: '/apps/users',
                        icon: 'mat_solid:people',
                        hidden: () => !Helpers.hasRoles(['ADMINISTRATEUR', 'USER']),
                    },
                ],
            },
            {
                id: 'aquasentry.configurations',
                title: 'Configuration',
                type: 'collapsable',
                icon: 'mat_solid:settings',
                hidden: () => !Helpers.hasRoles(['ADMINISTRATEUR', 'USER']),
                children: [
                    {
                        id: 'aquasentry.configurations.communes',
                        title: 'Communes',
                        type: 'basic',
                        link: '/apps/communes',
                        icon: 'mat_solid:location_city',
                    },
                    {
                        id: 'aquasentry.configurations.quartiers',
                        title: 'Quartiers',
                        type: 'basic',
                        link: '/apps/quartiers',
                        icon: 'mat_solid:map',
                    },
                ],
            },
        ]
    }
];
