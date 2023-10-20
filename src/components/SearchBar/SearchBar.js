import React from 'react';
import styles from './SearchBar.module.css'; // Import the CSS module for SearchBar

class SearchBar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }
    search () {
        this.props.onSearch(this.state.searchTerm );
    }

    handleTermChange (e) {
        this.setState({searchTerm: e.target.value});
        
    }

    render () {
        const placeholder = this.state.searchTerm ? this.state.searchTerm : "Enter A Song, Album, or Artist";
        return (
            <div className={styles.SearchBar}>
                <input placeholder={placeholder}
                onChange={this.handleTermChange} />
                <button className={styles.SearchButton} onClick={this.search}>SEARCH</button>
            </div>
        )
    }
}

export default SearchBar;