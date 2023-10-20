import React from 'react';
import styles from './SearchResults.module.css'; // Import the CSS module for SearchResults
import TrackList from '../TrackList/TrackList';

class SearchResults extends React.Component {
    // Add a new method to filter search results
    filterDuplicateSongs(searchResults, playlist) {
        if (!playlist || !Array.isArray(playlist)) {
          return searchResults;
        }
    
        return searchResults.filter(searchResult => {
          return !playlist.some(playlistTrack => playlistTrack.id === searchResult.id);
        });
    }

    render () {
         // Filter the search results using the filterDuplicateSongs method
    const filteredSearchResults = this.filterDuplicateSongs(this.props.searchResults, this.props.playlist);
        return (
            <div className={styles.SearchResults}>
                  <h2>Results</h2>
                    <TrackList tracks={filteredSearchResults}
                    onAdd={this.props.onAdd}
                    isRemoval={false}/>
            </div>
        )
    }
}

export default SearchResults;