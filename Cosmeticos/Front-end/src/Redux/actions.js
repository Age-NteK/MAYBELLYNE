import {
  // // ? USERS
  // REGISTER_USER,
  // LOGIN,
  // USER_PROFILE,
  // UPDATE_USER,
  // DELETE_USER,

  // ! PRODUCTS
  GET_ALL_PRODUCTS,
  GET_PRODUCTS_BY_NAME,
  GET_PRODUCTS_BY_ID,

  // ! VIDEOS
  GET_ALL_VIDEOS,
  GET_VIDEO_BY_ID,

  // ! TUTORIALS
  GET_ALL_TUTORIALS,
  GET_TUTORIAL_BY_ID,

  // ! FAVORITES
  // ADD_FAVORITE,
  // GET_ALL_FAVORITES,
  // DELETE_FAVORITE,

  // ! CLEAN
  CLEAN,
} from "./action-types";
import axios from "axios";

// ! ENDPOINTS
// const URL_USERS = "http://localhost:3001/users";
const URL_PRODUCTS = "http://localhost:3001/products";
const URL_VIDEOS = "http://localhost:3001/videos";
const URL_TUTORIALS = "http://localhost:3001/tutorials";

// const URL_FAVORITES = "http://localhost:3001/favorites";

// ! HANDLE ERROR
const handleError = (error) => {
  return error.message;
};

// // ! ------------------------------------------------------------------
// // ! USERS
// // ! ------------------------------------------------------------------

// // * CREATE USER
// // ? REGISTER
// export const registerUser = (formData) => async (dispatch) => {
//   try {
//     const { data } = await axios.post(`${URL_USERS}/register`, formData);
//     console.log(data);
//     if (data) {
//       dispatch({
//         type: REGISTER_USER,
//         payload: {
//           newUser: data.user,
//           userId: data.user.id_user,
//         },
//       });
//     }
//   } catch (error) {
//     handleError(error);
//   }
// };

// // * GET BY EMAIL Y PASSWORD
// // ? LOGIN
// export const loginSuccess = (payload) => ({
//   type: LOGIN,
//   payload: payload,
// });

// export const loginFailure = () => ({
//   type: LOGIN,
//   payload: { access: false },
// });

// export const getUserByEmail = (email, password) => async (dispatch) => {
//   try {
//     const { data } = await axios.post(`${URL_USERS}`, {
//       email,
//       password,
//     });

//     if (
//       data.user &&
//       data.user.email === email &&
//       data.user.password === password
//     ) {
//       // Autenticación exitosa: email y password coinciden con la base de datos
//       dispatch(loginSuccess({ userId: data.user.id_user, access: true }));
//     } else {
//       // Error de autenticación: email o password incorrectos
//       dispatch(loginFailure());
//     }
//   } catch (error) {
//     handleError(error);
//   }
// };

// // * GET USER BY ID
// // ? USER PROFILE
// export const getUserProfile = (id_user) => async (dispatch) => {
//   try {
//     const { data } = await axios.get(`${URL_USERS}/profile/${id_user}`);

//     console.log(data);

//     if (data) {
//       dispatch({
//         type: USER_PROFILE,
//         payload: data.user,
//       });
//     }
//   } catch (error) {
//     handleError(error);
//   }
// };

// // * UPDATE USER
// // ? UPDATE PROFILE
// export const updateUser = (id_user, updatedData) => async (dispatch) => {
//   try {
//     const { data } = await axios.put(`${URL_USERS}/${id_user}`, updatedData);
//     console.log(data);

//     if (data.length > 0) {
//       dispatch({
//         type: UPDATE_USER,
//         payload: data,
//       });
//     }
//   } catch (error) {
//     handleError(error);
//   }
// };

// // * DELETE USER
// // ? PROFILE USER
// export const deleteUser = (id_user) => async (dispatch) => {
//   try {
//     const { data } = await axios.delete(`${URL_USERS}/${id_user}`);
//     console.log(data);
//     if (data) {
//       dispatch({
//         type: DELETE_USER,
//         payload: data,
//       });
//     }
//   } catch (error) {
//     handleError(error);
//   }
// };

// ! ------------------------------------------------------------------
// ! PRODUCTS
// ! ------------------------------------------------------------------

export const getAllProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(URL_PRODUCTS);
    console.log(data);

    if (data) {
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: data,
      });
    }
  } catch (error) {
    handleError(error);
  }
};

export const getProductDetail = (id_product) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL_PRODUCTS}/${id_product}`);
    console.log(data);

    if (data) {
      dispatch({
        type: GET_PRODUCTS_BY_ID,
        payload: data,
      });
    }
  } catch (error) {
    handleError(error);
  }
};

export const getProductByName = (name) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL_PRODUCTS}?name=${name}`);
    console.log(data);

    if (data) {
      dispatch({
        type: GET_PRODUCTS_BY_NAME,
        payload: data,
      });
    }
  } catch (error) {
    handleError(error);
  }
};

// ! ------------------------------------------------------------------
// ! VIDEOS
// ! ------------------------------------------------------------------

export const getAllVideos = () => async (dispatch) => {
  try {
    const { data } = await axios.get(URL_VIDEOS);
    console.log(data);

    if (data) {
      dispatch({
        type: GET_ALL_VIDEOS,
        payload: data,
      });
    }
  } catch (error) {
    handleError(error);
  }
};

export const getVideoById = (id_video) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL_VIDEOS}/${id_video}`);
    console.log(data);

    if (data) {
      dispatch({
        type: GET_VIDEO_BY_ID,
        payload: data,
      });
    }
  } catch (error) {
    handleError(error);
  }
};

// ! ------------------------------------------------------------------
// ! TUTORIALS
// ! ------------------------------------------------------------------

export const getAllTutorials = () => async (dispatch) => {
  try {
    const { data } = await axios.get(URL_TUTORIALS);
    console.log(data);

    if (data) {
      dispatch({
        type: GET_ALL_TUTORIALS,
        payload: data,
      });
    }
  } catch (error) {
    handleError(error);
  }
};

export const getTutorialById = (id_tutorial) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL_TUTORIALS}/${id_tutorial}`);
    console.log(data);

    if (data) {
      dispatch({
        type: GET_TUTORIAL_BY_ID,
        payload: data,
      });
    }
  } catch (error) {
    handleError(error);
  }
};

// // ! ------------------------------------------------------------------
// // ! FAVORITES
// // ! ------------------------------------------------------------------

// // * GET ALL FAVORITES
// // ? MY FAVORITES HOME
// export const getAllFavorites = (userId) => async (dispatch) => {
//   try {
//     const { data } = await axios.get(`${URL_FAVORITES}/${userId}`);
//     console.log(data);

//     if (data) {
//       dispatch({
//         type: GET_ALL_FAVORITES,
//         payload: data,
//       });
//     }
//   } catch (error) {
//     handleError(error);
//   }
// };

// // * POST FAVORITE
// // ? ❤️
// export const addFavorite = (id_product, userId) => async (dispatch) => {
//   try {
//     // Obtener la lista de favoritos del usuario antes de agregar un nuevo favorito
//     const { data } = await axios.get(`${URL_FAVORITES}/${userId}`);
//     console.log("Lista de favoritos antes de agregar:", data);

//     // Realizar la solicitud para agregar el nuevo favorito
//     const response = await axios.post(
//       `${URL_FAVORITES}/${id_product}/${userId}`
//     );
//     console.log("Respuesta de agregar favorito:", response.data);

//     if (response.data) {
//       dispatch({
//         type: ADD_FAVORITE,
//         payload: response.data,
//       });
//     }
//   } catch (error) {
//     handleError(error);
//   }
// };

// // * DELETE FAVORITE
// // ? 🤍
// export const deleteFavorite = (id_product, userId) => async (dispatch) => {
//   try {
//     const { data } = await axios.get(`${URL_FAVORITES}/${userId}`);
//     console.log("Lista de favoritos antes de eliminar:", data);

//     const { data: deletedData } = await axios.delete(
//       `${URL_FAVORITES}/${id_product}/${userId}`
//     );
//     console.log(
//       "Información de la receta eliminada de favoritos:",
//       deletedData
//     );

//     if (deletedData) {
//       dispatch({
//         type: DELETE_FAVORITE,
//         payload: data,
//       });
//       console.log(`The Favorite was deleted successfully`);
//     }
//   } catch (error) {
//     handleError(error);
//   }
// };

export const clean = () => (dispatch) => {
  dispatch({
    type: CLEAN,
  });
};
