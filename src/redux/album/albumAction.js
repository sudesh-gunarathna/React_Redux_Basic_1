import axios from "axios";
import {
  FETCH_ALBUM_ERROR,
  FETCH_ALBUM_LOADING,
  FETCH_ALBUM_SUCCESS,
} from "./albumActionType";

export function fetchAlbum() {
  function fetchAlbumLoading(isLoading) {
    return {
      type: FETCH_ALBUM_LOADING,
      payload: isLoading,
    };
  }
  function fetchAlbumSuccess(data) {
    return {
      type: FETCH_ALBUM_SUCCESS,
      payload: data,
    };
  }
  function fetchAlbumError(erro) {
    return {
      type: FETCH_ALBUM_ERROR,
      payload: erro,
    };
  }

  return async function (dispatch, getState) {
    dispatch(fetchAlbumLoading(true));
    try {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/albums"
      );
      //throw new Error("Test Error")

      dispatch(fetchAlbumSuccess(result.data));
     
    } catch (err) {
        dispatch(fetchAlbumError(err))

    }
    setTimeout(() => {
         dispatch(fetchAlbumLoading(false))
    }, [2000]);
   
  };
}
