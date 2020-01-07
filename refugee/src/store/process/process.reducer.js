import {
  GET_PROCESS_START,
  GET_PROCESS_SUCCESS,
  GET_PROCESS_FAIL,
  GET_PROCESS_ID_START,
  GET_PROCESS_ID_SUCCESS,
  GET_PROCESS_ID_FAIL,
  PUT_PROCESS_ID_START,
  PUT_PROCESS_ID_SUCCESS,
  PUT_PROCESS_ID_FAIL,
  DELETE_PROCESS_ID_START,
  DELETE_PROCESS_ID_SUCCESS,
  DELETE_PROCESS_ID_FAIL
} from "./process.actions";

const initialState = {
  stories: [],
  // name: "",
  // location: "",
  // date: "",
  // textbody: "",
  isLoading: false,
  error: ""
};

export function processReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PROCESS_START:
      return { ...state, isLoading: true };
    case GET_PROCESS_SUCCESS:
      return { ...state, stories: [...payload], isLoading: false };
    case GET_PROCESS_FAIL:
      return { ...state, error: payload, isLoading: false };
    case GET_PROCESS_ID_START:
      return { ...state, isLoading: true };
    case GET_PROCESS_ID_SUCCESS:
      if (state.stories.findIndex(story => story.id === payload.id) > -1) {
        return { ...state, isLoading: false };
      }
      return {
        ...state,
        stories: [...state.stories, payload],
        isLoading: false
      };
    case GET_PROCESS_ID_FAIL:
      return { ...state, error: payload, isLoading: false };
    case PUT_PROCESS_ID_START:
      return { ...state, isLoading: true };
    case PUT_PROCESS_ID_SUCCESS:
      return {
        ...state,
        stories: [
          ...state.stories.filter(story => story.id !== payload.id),
          payload
        ],
        isLoading: false
      };
    case PUT_PROCESS_ID_FAIL:
      return { ...state, error: payload, isLoading: false };
    case DELETE_PROCESS_ID_START:
      return { ...state, isLoading: true };
    case DELETE_PROCESS_ID_SUCCESS:
      return {
        ...state,
        stories: state.stories.filter(story => story.id !== payload.id),
        isLoading: false
      };
    case DELETE_PROCESS_ID_FAIL:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
}
