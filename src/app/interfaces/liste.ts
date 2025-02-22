import { Chanson } from "./chanson";

export interface Liste {
    id: number;
    titre: string;
    sousTitre: string;
    image: string;
    description: string;
    type: string;
    verifie: boolean;
    datePublication: string;
    visibilite: boolean;
    nombreSauvegarde: number;
    chansons: Chanson[];
}