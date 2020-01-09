import { useDispatch, useSelector } from "react-redux";
import { getToken, setToken } from "./token.actions";

export function useGetToken() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.tokenReducer.token);

  function dispatchGetToken() {
    return dispatch(getToken());
  }

  return [state, dispatchGetToken];
}

export function useSetToken(initialState) {
  const dispatch = useDispatch();
  const state = useSelector(state => state.tokenReducer.token);

  function dispatchSetToken(state = initialState) {
    dispatch(setToken(state));
  }

  return [state, dispatchSetToken];
}
