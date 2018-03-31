import {GithubApiService} from './GithubApiService';
import { User } from './User';
import { Repo } from './Repo';

let svc = new GithubApiService();
svc.getUserInfo("madanneelapu",(user: User)=>{
    console.log(user);
});

svc.getRepos("madanneelapu",(repos: Repo[]) => {
    console.log(repos);
});