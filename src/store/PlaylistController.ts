import {playlistType} from '../typing/playlist.type';
import {Subject} from 'rxjs';
class PlaylistController {
  private _currentPlaylist: playlistType;
  private _currentPlaylistSubject: Subject<playlistType> = new Subject<
    playlistType
  >();
  constructor() {
    this._currentPlaylist = {
      name: 'Playlists',
      createdCount: 16,
      type: 'created playlist',
    };
  }
  get currentPlaylistSubject(): Subject<playlistType> {
    return this._currentPlaylistSubject;
  }

  get currentPlaylist(): playlistType {
    return this._currentPlaylist;
  }

  set currentPlaylist(value: playlistType) {
    this._currentPlaylist = value;
    this.currentPlaylistSubject.next(value);
  }
}

export const playlistController = new PlaylistController()
