import { Route, Routes, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ErrorRoute from '../ErrorRoute/ErrorRoute';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import { useEffect, useState } from 'react';
import { errorMessage } from '../../utils/constans';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem('isLogin') !== null
      ? localStorage.getItem('isLogin') === 'true' ? true : false
      : false
  );

  useEffect(() => {
    if (isLogin) {
      setIsLoading(true);
      Promise.all([
        moviesApi.getCards(),
        mainApi.getSavedMovies(),
        mainApi.getUserInfo(),
      ])
        .then((data) => {
          setMovies(data[0]);
          setSavedMovies(data[1]);
          setCurrentUser(data[2]);
        })
        .catch(() =>
          console.log('ошибка загрузки данных'))
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [isLogin]);

  function handleLogin(data, button, message) {
    mainApi.login(data)
      .then(() => {
        setIsLogin(true);
        navigate('/movies');
        localStorage.setItem('isLogin', true)
      })
      .catch(() => {
        button(false);
        message(errorMessage.errorWrongInput)
      })
  }

  function handleRegister(data, button, message) {
    mainApi.register(data)
      .then(() => {
        handleLogin(data)
      })
      .catch(() => {
        button(false);
        message(errorMessage.errorRigister);
      })
  }

  function handleLogOut() {
    mainApi.logOut()
      .then(() => {
        localStorage.clear()
        setIsLogin(false);
      })
      .catch(() => navigate('/signin'))
  }

  function handleEditUser(data, button, message, isSuccess) {
    mainApi.editUserInfo(data)
      .then((newInfo) => {
        message(errorMessage.successUpdateUser);
        isSuccess(true);
        setCurrentUser(newInfo);
      })
      .catch(() => {
        button(false);
        message(errorMessage.errorUpdateUser);
      })
  }

  function handleSavedMovie(data) {
    mainApi.createMovie(data)
      .then((movie) => {
        setSavedMovies((movies) => {
          return [...movies, movie]
        });
      })
      .catch(() => navigate('/errorpage'));
  }

  function handleDeleteMovie(items) {
    const movie = savedMovies.find((movie) => movie.movieId === items.id)
    mainApi.deleteMovie(movie)
      .then((movie) => {
        setSavedMovies((movies) => {
          console.log(movie)
          return movies.filter((film) => film._id !== movie._id);

        });
      })
      .catch(() => navigate('/errorpage'));
  }

  function handleDeleteLikedMovie(items) {
    mainApi.deleteMovie(items)
      .then((movie) => {
        setSavedMovies((newMovies) => {
          console.log(newMovies.data);
          return newMovies.filter((film) => film._id !== movie._id);
        });
      })
      .catch(() => navigate('/errorpage'))
      .finally(() => console.log(savedMovies.data))
  }


  return (
    <CurrentUserContext.Provider value={currentUser} >
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route
          path="/movies"
          element={
            <ProtectedRoute isLogin={isLogin}>
              <Movies
                movies={movies}
                onLikeClick={handleSavedMovie}
                onDeleteClick={handleDeleteMovie}
                isLoader={isLoading}
                savedMovies={savedMovies}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute isLogin={isLogin}>
              <SavedMovies
                savedMovies={savedMovies}
                onDeleteClick={handleDeleteLikedMovie}
                isLoader={isLoading}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute isLogin={isLogin}>
              <Profile
                onChange={handleEditUser}
                onSignOut={handleLogOut}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedRoute isLogin={!isLogin}>
              <Register
                onSubmit={handleRegister}
              />
            </ProtectedRoute>}
        />
        <Route
          path="/signin"
          element={
            <ProtectedRoute isLogin={!isLogin}>
              <Login
                onSubmit={handleLogin}
              />
            </ProtectedRoute>}
        />
        <Route path="*" element={<ErrorRoute />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
