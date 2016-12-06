import React from 'react';
import Classnames from 'Classnames';
import apiConnect from '../services/ApiConnect';
import SearchResults from './SearchResults';
import css from '../../css/search.css';

class SearchBox extends React.Component {
  constructor() {
    super();
    this.query = this.query.bind(this);
    this.state = {
      searchResults: '',
    }
  }

  query(e) {
    apiConnect.Search(e.target.value).then(searchResults => {
      this.setState({
        searchResults,
      });
    });
  }

  render() {
    let searchBoxClasses = Classnames({
      'searchbox': true,
      'collapsed': this.props.collapsed,
    });

    return (
      <div className={searchBoxClasses}>
        <div className="container">
          <input className="searchbox--input" type="text" onChange={this.query}/>
          {this.state.searchResults && <SearchResults results={this.state.searchResults} />}
        </div>
      </div>
    );
  }
}

export default SearchBox
