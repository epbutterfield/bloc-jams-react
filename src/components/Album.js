import React, { Component } from 'react';
import albumData from './../data/albums';
import style from './album.css';
import PlayerBar from './PlayerBar';

class Album extends Component {
    constructor(props) {
        super(props);
        
        const album = albumData.find( album => {
            return album.slug === this.props.match.params.slug
        });
        
        this.state = {
            album: album,
            currentSong: album.songs[0],
            isPlaying: false
        };
        
        this.audioElement = document.createElement('audio');
        this.audioElement.src = album.songs[0].audioSrc;
    }
    
    play() {
        this.audioElement.play();
        this.setState({ isPlaying: true });
    }
    
    pause() {
        this.audioElement.pause();
        this.setState({ isPlaying: false });
    }
    
    setSong(song) {
        this.audioElement.src = song.audioSrc;
        this.setState({ currentSong: song });
    }
    
    handleSongClick(song) {
        const isSameSong = this.state.currentSong === song;
        if (this.state.isPlaying && isSameSong) {
            this.pause();
        } else {
            if (!isSameSong) { this.setSong(song); }
            this.play();
        }
    }

   songClass(song) {
    if (this.state.currentSong === song && this.state.isPlaying) { 

        return 'song playing'; 
      
    }else{
        
        return 'song';
    }

  }
    

    //toggle between classes that are associated with elements
    
    
    render() {
        return (
          <section className="album">
            <section id="album-info">
              <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
              <div className="album-details">
                <h1 id="album-title">{this.state.album.title}</h1>
                <h2 className="artist">{this.state.album.artist}</h2>
                <div id="release-info">{this.state.album.releaseInfo}</div>
              </div>
            </section>
            
            
    <span class="icons">
         <ion-icon name="arrow-dropright-circle"></ion-icon>
         <ion-icon name="pause"></ion-icon>
</span>
             
              <table id="song-list">
                <colgroup>
                  <col id="song-number-column" />
                  <col id="song-title-column" />
                  <col id="song-duration-column" />
                </colgroup>  
                <tbody>
                  {this.state.album.songs.map( (song, index) => 
                    <tr className={this.songClass(song)} key={index} onClick={() => this.handleSongClick(song)} >
                      <td className="song-actions">
                        <button>
                          <span className="song-number">{index+1}</span>
                          <span className="ion-play"></span>
                          <span className="ion-pause"></span>
                        </button>
                      </td>
                      <td className="song-title">{song.title}</td>
                      <td className="song-duration">{song.duration}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            <PlayerBar />
          </section>
        );
    }
}

export default Album;