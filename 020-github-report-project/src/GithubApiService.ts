import * as request from 'request';
import { User } from './User';

export class GithubApiService{
    getUserInfo(userName: string){

        let options : any = { 
            headers:{   
                'User-Agent':'request' //Github API needs User-Agent Header
            },
            json: true  //Return the response body as JSON instead of String 
        };

        request.get("https://api.github.com/users/"+userName, options, 
            (error : any, response : any, body : any)=>{
                /*console.log(error);    
                console.log(response);*/
                //console.log(body);

                let user = new User(body);
                console.log(user);
            });
    }

    getRepos(){

    }

}