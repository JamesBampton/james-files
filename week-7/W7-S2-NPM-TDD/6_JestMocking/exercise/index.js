const { getUserRepos } = require("./github");

// TODO: Enter your GitHub username
const gitHubUser = "JamesBampton";

getUserRepos(gitHubUser).then((repos) => {
  console.log(repos);
});
