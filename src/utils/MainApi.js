class MainApi {
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

  register = (name, password, email) => {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password, email })
    })
      .then(this._checkStatus);
  };

  login = (password, email) => {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password, email })
    })
      .then(this._checkStatus);
  };

  logOut = () => {
    return fetch(`${this._baseUrl}/signout`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(this._checkStatus);
  };

  getUserInfo = () => {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    })
      .then(this._checkStatus);
  }

  editUserInfo = ({ name, email }) => {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers, body: JSON.stringify({ name, email }),
    })
      .then(this._checkStatus);
  }

  getSavedMovies = () => {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    })
      .then(this._checkStatus);
  }

  createMovie = ({ movie }) => {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: 'https://api.nomoreparties.co' + movie.image.url,
        trailerLink: movie.trailerLink,
        thumbnail: 'https://api.nomoreparties.co' + movie.image.formats.thumbnail.url,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      })
    })
  }
}


const mainApi = new MainApi({
  baseUrl: 'https://api.diploma.nekitcudder.nomoredomains.club',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default mainApi;