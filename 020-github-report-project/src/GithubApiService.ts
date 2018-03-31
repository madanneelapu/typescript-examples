import * as request from 'request';
import { User } from './User';

const OPTIONS : any = { 
    headers:{   
        'User-Agent':'request' //Github API needs User-Agent Header
    },
    json: true  //Return the response body as JSON instead of String 
};

export class GithubApiService{

    //this is an async method, because it uses request.get which is an async method.
    //So we cannot return anything from it, but we need to send the user object
    //back to the caller. One way to handle this is to use callbacks.
    getUserInfo(userName: string, cb: (user: User) => any){

        request.get("https://api.github.com/users/"+userName, OPTIONS, 
            (error : any, response : any, body : any)=>{
                let user = new User(body);
                cb(user);
            });
    }

    getRepos(){

    }

}