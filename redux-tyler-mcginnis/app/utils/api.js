// Using Fetch instead of axios
// Adding pollyfill using watwg-fetch
// fetch won't return `data` object, so need to remove it.

// import axios from 'axios';

// In the event you get Permission Denied errors, you will need to obtain the relevant credentials.
const id = "tablaman";
const sec = "YOUR_SECRET_ID";
const params = `?client_id=${id}&client_secret=${sec}`;


async function getProfile (username) {
  const response = await fetch(`https://api.github.com/users/${username}${params}`)
  return response.json();
}

async function getRepos (username) {
  const response = await fetch (`https://api.github.com/users/${username}/repos${params}&per_page=100`)

  return response.json();

}

function getStarCount (repos) {
  // NB, repos.data doesn't exist in the data returning...
  if (!repos.data) return 1000;
  else {
    return repos.reduce((count, { stargazers_count }) => {
      return count + stargazers_count;
    }, 0);
  }
}

function calculateScore ({followers}, repos) {
  return followers * 3 + getStarCount(repos);
}

async function getUserData (player) {
  const [ profile, repos ] = await Promise.all ([
    getProfile(player),
    getRepos(player)
  ])
  // axios.all() will take a bunch of promises and when all have run, 
  // will then call the final function.
  // Note, using refactoring, we're now using Promise.all
  // This means we need to have 'babel-polyfill' addon in webpack

  // using await
  return {
    profile,
    score: calculateScore(profile, repos)
  }
  
  // older code
  // return Promise.all ([
  //   getProfile(player),
  //   getRepos(player)
  // ]).then(data => {
  //   const profile = data[0];
  //   const repos = data[0];
  //   // console.log(`profile and repo> ${profile}, ${repos}`);
  //   return { profile: profile, score: calculateScore(profile, repos)}
  // });

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

export async function battle (players) {
  const results = await Promise.all(players.map(getUserData)).catch(handleError);

  return results === null
    ? results
    : sortPlayers(results);
}
export async function fetchPopularRepos (language) {

  var encodedURI = window.encodeURI(
    "https://api.github.com/search/repositories?q=stars:>1+language:" +
      language +
      "&sort=stars&order=desc&type=Repositories"
  );

  const response = await fetch(encodedURI)
    .catch(handleError);

  const repos = response.json();
  console.log(repos);
  
  return repos.items;
  
  // older way to do it without async/await
  // return fetch(encodedURI).then(function(response) {
  //   return response.data.items;
  // });
}

// old 
// module.exports = {
//   battle: function(players) {
//   },
//   fetchPopularRepos: function(language) {
//   }
// };