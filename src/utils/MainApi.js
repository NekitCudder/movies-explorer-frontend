class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(console.log('чекСтатус ' + res.status));
  }

  register = ({ name, password, email }) => {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({ name, password, email })
    })
      .then(this._checkStatus);
  };

  login = ({ password, email }) => {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({ password, email })
    })
      .then(this._checkStatus);
  };

  logOut = () => {
    return fetch(`${this._baseUrl}/signout`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
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
  };

  editUserInfo = ({ name, email }) => {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({ name, email }),
    })
      .then(this._checkStatus);
  };

  getSavedMovies = () => {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    })
      .then(this._checkStatus);
  };

  createMovie = ({
    id,
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
  }) => {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        movieId: id,
        country,
        director,
        duration,
        year,
        description,
        image: `https://api.nomoreparties.co${image.url}`,
        trailerLink,
        thumbnail: `https://api.nomoreparties.co${image.formats.thumbnail.url}`,
        nameRU,
        nameEN,
      }),
    })
      .then(this._checkStatus);
  };

  deleteMovie = ({_id}) => {
    return fetch(`${this._baseUrl}/movies/${_id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers,
    })
      .then(this._checkStatus);
  };
}


const mainApi = new MainApi({
  baseUrl: 'https://api.diploma.nekitcudder.nomoredomains.club',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default mainApi;