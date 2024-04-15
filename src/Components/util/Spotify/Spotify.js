let accessToken;
const clientID = '714850addb8f45d7a78c43724530c18c';
const redirectUrl = 'http://localhost:5173/'

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }

        const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
        const expiryTime = window.location.href.match(/expires_in=([^&]*)/);

        if (tokenInURL && expiryTime) {
            accessToken = tokenInURL[1];
            const expiresIn = Number(expiryTime[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`
            window.location = redirect;
        }
    },

    search(term) {
        accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            method: 'GET',
            headers: { Authorization: `Bearer ${accessToken}` }
        })
            .then(response => {
                return response.json();
            })
            .then(jsonResponse => {
                if (!jsonResponse) {
                    console.error('Response error');
                }
                console.log(jsonResponse);
                return jsonResponse.tracks.items.map(t => ({
                    id: t.id,
                    name: t.name,
                    artist: t.album.artists[0].name,
                    album: t.album.name,
                    uri: t.uri,
                }));
            });
    },

    savePlaylist(name, trackUris) {
        if (!name || !trackUris) {
            return;
        }

        const aToken = Spotify.getAccessToken();
        const header = { Authorization: `Bearer ${aToken}` };
        let userId;

        return fetch(`https://api.spotify.com/v1/me`, { headers: header })
            .then(response => response.json())
            .then((jsonResponse) => {
                userId = jsonResponse.id;
                let playlistId;
                return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                    headers: header,
                    method: 'POST',
                    body: JSON.stringify({name: name})
                }).then((response) => response.json()
                ).then((jsonResponse) => {
                    playlistId = jsonResponse.id;
                    return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
                        headers: header,
                        method: 'POST',
                        body: JSON.stringify({ uris: trackUris }),
                    });
                });
            });
    }
};

export default Spotify;