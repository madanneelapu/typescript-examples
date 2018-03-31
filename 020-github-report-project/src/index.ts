import {GithubApiService} from './GithubApiService';
import { User } from './User';

let svc = new GithubApiService();
svc.getUserInfo("madanneelapu",(user: User)=>{
    console.log(user);
});