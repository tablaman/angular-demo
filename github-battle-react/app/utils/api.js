import axios from 'axios';

// In the event you get Permission Denied errors, you will need to obtain the relevant credentials.
const id = "tablaman";
const sec = "YOUR_SECRET_ID";
const params = `?client_id=${id}&client_secret=${sec}`;


function getProfile (username) {
  return axios.get(`https://api.github.com/users/${username}${params}`)
    .then(({data}) => data);
}

function getRepos (username) {
  return axios
    .get(`https://api.github.com/users/${username}/repos${params}&per_page=100`)
    .then(user => {
      return user.data;
    });
}

function getStarCount (repos) {
  // NB, repos.data doesn't exist in the data returning...
  if (!repos.data) return 1000;
  else {
    return repos.data.reduce((count, { stargazers_count }) => {
      return count + stargazers_count;
    }, 0);
  }
}

function calculateScore ({followers}, repos) {
  return followers * 3 + getStarCount(repos);
}

function getUserData (player) {
  // axios.all() will take a bunch of promises and when all have run, 
  // will then call the final function.
  // Note, using refactoring, we're now using Promise.all
  // This means we need to have 'babel-polyfill' addon in webpack
  
  return Promise.all ([
    getProfile(player),
    getRepos(player)
  ]).then(data => {
    const profile = data[0];
    const repos = data[0];
    // console.log(`profile and repo> ${profile}, ${repos}`);
    return { profile: profile, score: calculateScore(profile, repos)}
  });

}

function sortPlayers (players) {
  return players.sort ((a,b) => {
    return b.score - a.score;
  });
}


function handleError (error) {
  console.warn(error);
  return null;
  
}
module.exports = {
  battle: function(players) {
    return axios.all(players.map(getUserData))
    .then(sortPlayers)
    .catch(handleError)
  },
  fetchPopularRepos: function(language) {
    var encodedURI = window.encodeURI(
      "https://api.github.com/search/repositories?q=stars:>1+language:" +
        language +
        "&sort=stars&order=desc&type=Repositories"
    );

    return axios.get(encodedURI).then(function(response) {
      return response.data.items;
    });
  }
};