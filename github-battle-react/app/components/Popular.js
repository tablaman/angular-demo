import React from "react";
import PropTypes from "prop-types";
import api from "../utils/api";
import Loading from "./Loading";

function SelectLanguage(props) {
  const languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];
  return (
    <ul className="languages">
      {languages.map(language => {
        return (
          <li
            style={
              language === props.selectedLanguage ? { color: "#d0021b" } : null
            }
            onClick={props.onSelect.bind(null, language)}
            key={language}
          >
            {language}
          </li>
        );
      })}
    </ul>
  );
};

function RepoGrid (props) {
  return (
    <ul className="popular-list">
      {props.repos.map((repo,index) => {
        return (
          <li className="popular-item" key={repo.name}>
            <div className="popular-rank">#{index +1 }</div>
            <ul className="space-list-items">
              <li>
                <img src={repo.owner.avatar_url} alt={`Avatar for ${repo.owner.login}`} className="avatar"/>
              </li>
              <li>
                <a href={repo.html_url}></a>
              </li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired
}

// SelectLanguage.propTypes = {
//   selectedLanguage: PropTypes.string.isRequired,
//   onSelect: PropTypes.func.isRequired,
// }
class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: "All",
      repos: null
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }
  updateLanguage(lang) {
    console.log("hi", lang);

    // this.setState(function() {
    //     return { selectedLanguage: lang, repos: null };
    //   });
    this.setState(() => {
      return {
        selectedLanguage: lang,
        repos: null
      };
    });
    api.fetchPopularRepos(lang)
      .then(function(repos) {
        this.setState(function () {
          return {repos: repos}
        })
      }.bind(this));



    // api.fetchPopularRepos(lang)
    //   .then(repos => {
    //     this.setState(()=> {repos: repos})
    //   }.bind(this));
  }

  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />

        {!this.state.repos 
          ? <Loading text="Wow!..." speed={50} />
        : <RepoGrid repos={this.state.repos} />
        }
      </div>
    );
  }
}

export default Popular;
