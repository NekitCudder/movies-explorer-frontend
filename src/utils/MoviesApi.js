class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(console.log('статус ' + res.status));
  }

  getCards() {
    return fetch(`${this._baseUrl}`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    })
      .then(this._checkStatus);
  }
}

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default moviesApi;