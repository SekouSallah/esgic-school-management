import {AbstractPageEntity} from "./abstract-page-entity.model";

export interface Gravite {
    id: number;
    libelle: string;
    createdBy: string;
    createdAt: Date;
    lastModifiedBy: string;
    lastModifiedDate: Date;
}

export class GravitePage extends AbstractPageEntity<Gravite> {}
