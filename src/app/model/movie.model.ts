import { Director } from "./director.model";
import { Actor } from "./actor.model";
import { Comment } from "./comment.model";

export interface Movie {
    id?: number;
    name: string;
    rate: number;
    directors: Director[];
    actors: Actor[];
    comments: Comment[];
}