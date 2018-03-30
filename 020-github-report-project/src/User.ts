import { Repo } from "./Repo";

export class User{
    login: string;
    fullName: string;
    repoCount: number;
    followerCount:number;
    repos:Repo[];
}