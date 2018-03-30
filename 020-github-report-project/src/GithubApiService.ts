import * as request from 'request';

export class GithubApiService{
    getUserInfo(userName: string){
        request.get("https://api.github.com/users/"+userName, (response)=>{
            console.log(response);
        });
    }

    getRepos(){

    }

}