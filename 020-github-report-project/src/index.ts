import { GithubApiService } from './GithubApiService';
import * as _ from "lodash";
import { User } from './User';
import { Repo } from './Repo';

let svc = new GithubApiService();
let cliArgs = process.argv; //Reading command line arguments. Returns an array.

if (cliArgs.length < 3) { //custom arguments would start from position 2.
    console.log("Please pass the username as an argument.");
} else {

    let username = cliArgs[2];

    svc.getUserInfo(username, (user: User) => {
        svc.getRepos(username, (repos: Repo[]) => {
            let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.size * -1]);
            let filteredRepos = _.take(sortedRepos, 3);
            user.repos = filteredRepos;
            console.log(user);
        });
    });

}