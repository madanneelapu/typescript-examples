import {GithubApiService} from './GithubApiService';
import { User } from './User';
import { Repo } from './Repo';

let svc = new GithubApiService();
svc.getUserInfo("madanneelapu",(user: User)=>{    
    svc.getRepos("madanneelapu",(repos: Repo[]) => {
        user.repos = repos;
        console.log(user);
    });
});

