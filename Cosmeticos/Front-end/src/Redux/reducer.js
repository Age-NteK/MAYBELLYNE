import {
  // ! PRODUCTS
  GET_ALL_PRODUCTS,
  GET_PRODUCTS_BY_ID,
  GET_PRODUCTS_BY_NAME,

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

// ! ------------------------------------------------------------------
// ! INITIAL STATE
// ! ------------------------------------------------------------------

const initialState = {
  // ! PRODUCTS
  allProducts: [],
  productsCopy: [],
  productsName: [],
  productDetail: [],

  // ! VIDEOS
  allVideos: [],
  videoDetail: [],

  // ! TUTORIALS
  allTutorials: [],
  tutorialsCopy: [],
  tutorialDetail: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // ! ------------------------------------------------------------------
    // ! PRODUCTS
    // ! ------------------------------------------------------------------
    case GET_ALL_PRODUCTS:
      // console.log(payload);
      return {
        ...state,
        allProducts: payload,
        productsCopy: [...payload],
      };

    case GET_PRODUCTS_BY_ID:
      console.log(payload);
      return {
        ...state,
        productDetail: payload,
      };

    case GET_PRODUCTS_BY_NAME:
      console.log(payload);
      return {
        ...state,
        productName: payload,
      };

    // ! ------------------------------------------------------------------
    // ! VIDEOS
    // ! ------------------------------------------------------------------

    case GET_ALL_VIDEOS:
      console.log(payload);
      return {
        ...state,
        allVideos: payload,
      };

    case GET_VIDEO_BY_ID:
      console.log(payload);
      return {
        ...state,
        videoDetail: payload,
      };

    // ! ------------------------------------------------------------------
    // ! TUTORIALS
    // ! ------------------------------------------------------------------
    case GET_ALL_TUTORIALS:
      console.log(payload);
      return {
        ...state,
        allTutorials: payload,
        tutorialsCopy: [...payload],
      };

    case GET_TUTORIAL_BY_ID:
      console.log(payload);
      return {
        ...state,
        tutorialDetail: payload,
      };

    // ! ------------------------------------------------------------------
    // ! CLEAN
    // ! ------------------------------------------------------------------

    case CLEAN:
      return {
        ...state,
        productDetail: [],
        tutorialDetail: [],
      };

    default:
      return { ...state };
  }
};

export default reducer;
