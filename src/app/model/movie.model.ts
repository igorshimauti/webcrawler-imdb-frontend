import { Director } from "./director.model";
import { Actor } from "./actor.model";

export interface Movie {
    id?: number;
    name: string;
    rate: number;
    directors: Director[];
    actors: Actor[];
}