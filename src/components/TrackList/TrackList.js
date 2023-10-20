import React from 'react';
import styles from './TrackList.module.css'; // Import the CSS module for TrackList
import Track from '../Track/Track'; // Import the Track component

class TrackList extends React.Component {
    render() {
        return (
          <div className={styles.TrackList}>
            {
              this.props.tracks && this.props.tracks.map(track => {
                return <Track
                  track={track}
                  key={track.id}
                  onAdd={this.props.onAdd}
                  onRemove={this.props.onRemove}
                  isRemoval={this.props.isRemoval}
                />
              })
            }
          </div>
        );
      }
}

export default TrackList;