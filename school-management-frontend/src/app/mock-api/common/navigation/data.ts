/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';
import { Helpers } from 'app/main/helpers/Helpers';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'aquasentry',
        title: 'SCHOOL MANAGEMENT',
        type: 'group',
        icon: 'mat_solid:water_drop', // Icône plus adaptée pour Aqua Sentry (eau)
        children: [
            // {
            //     id: 'aquasentry.dashboard',
            //     title: 'Tableau de Bord',
            //     type: 'basic',
            //     icon: 'mat_solid:dashboard',
            //     link: '/school-management/dashboard',
            //     hidden: () => !Helpers.hasRole('ADMINISTRATEUR'),
            // },
            {
                id: 'aquasentry.signalement',
                title: 'Gestion des étudiants',
                type: 'collapsable',
                icon: 'mat_solid:report_problem', // Icône adaptée pour signalements
                hidden: () => !Helpers.hasRoles(['ADMINISTRATEUR', 'USER']),
                children: [
                    {
                        id: 'aquasentry.signalement.list',
                        title: 'Liste des étudiants',
                        type: 'basic',
                        link: '/apps/etudiants',
                        icon: 'mat_solid:leak_add', // Icône pour fuites
                    },
                    {
                        id: 'aquasentry.configurations.gravites',
                        title: 'Niveaux d\'études',
                        type: 'basic',
                        link: '/apps/niveaux',
                        icon: 'mat_solid:warning', // Icône pour gravité
                    },
                ],
            },
            {
                id: 'aquasentry.inscription',
                title: 'Gestion des inscriptions',
                type: 'collapsable',
                icon: 'mat_solid:report_problem', // Icône adaptée pour signalements
                hidden: () => !Helpers.hasRoles(['ADMINISTRATEUR', 'USER']),
                children: [
                    {
                        id: 'aquasentry.inscription.list',
                        title: 'Liste des inscriptions',
                        type: 'basic',
                        link: '/apps/inscription',
                        icon: 'mat_solid:leak_add', // Icône pour fuites
                    },
                    {
                        id: 'aquasentry.inscription.filieres',
                        title: 'Filières',
                        type: 'basic',
                        link: '/apps/filieres',
                        icon: 'mat_solid:warning', // Icône pour gravité
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
                link: '/school-management/dashboard',
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
                link: '/school-management/dashboard',
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
        title: 'SCHOOL MANAGEMENT',
        type: 'group',
        icon: 'mat_solid:water_drop',
        children: [

            {
                id: 'aquasentry.signalement',
                title: 'Gestion des étudiants',
                type: 'collapsable',
                icon: 'mat_solid:report_problem',
                hidden: () => !Helpers.hasRoles(['ADMINISTRATEUR', 'USER']),
                children: [
                    {
                        id: 'aquasentry.signalement.list',
                        title: 'Liste des étudiants',
                        type: 'basic',
                        link: '/apps/etudiants',
                        icon: 'mat_solid:leak_add',
                    },
                    {
                        id: 'aquasentry.configurations.gravites',
                        title: "Niveaux d'études",
                        type: 'basic',
                        link: '/apps/niveaux',
                        icon: 'mat_solid:warning',
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
                title: 'Gestion des inscriptions',
                type: 'collapsable',
                icon: 'mat_solid:settings',
                hidden: () => !Helpers.hasRoles(['ADMINISTRATEUR', 'USER']),
                children: [
                    {
                        id: 'aquasentry.configurations.communes',
                        title: 'Listes des inscriptions',
                        type: 'basic',
                        link: '/apps/inscriptions',
                        icon: 'mat_solid:location_city',
                    },
                    {
                        id: 'aquasentry.configurations.quartiers',
                        title: 'Filières',
                        type: 'basic',
                        link: '/apps/filieres',
                        icon: 'mat_solid:map',
                    },
                ],
            },
        ]
    }
];
