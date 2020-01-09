import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProcess,
  getProcessId,
  putProcessId,
  deleteProcessId
} from "./process.thunk";

export function useGetProcess() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.processReducer.stories);
  const dispatchGetProcess = useCallback(() => {
    dispatch(getProcess());
  }, [dispatch]);

  useEffect(() => {
    dispatchGetProcess();
  }, [dispatchGetProcess]);

  return [state, dispatchGetProcess];
}

export function useGetProcessId(id) {
  const dispatch = useDispatch();
  const state = useSelector(state => {
    return state.processReducer.stories.find(
      story => Number(story.id) === Number(id)
    );
  });

  const dispatchGetProcessId = useCallback(() => {
    dispatch(getProcessId(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatchGetProcessId();
  }, [dispatchGetProcessId]);

  return [state, dispatchGetProcessId];
}

export function usePutProcessId(id) {
  const dispatch = useDispatch();
  const state = useSelector(state =>
    state.processReducer.stories.find(story => story.id === id)
  );

  function dispatchPutProcessId(data, state = id) {
    dispatch(putProcessId(state, data));
  }

  return [state, dispatchPutProcessId];
}

export function useDeleteProcessId(id) {
  const dispatch = useDispatch();
  const state = useSelector(state =>
    state.processReducer.stories.find(story => story.id === id)
  );

  function dispatchDeleteProcessId(state = id) {
    dispatch(deleteProcessId(state));
  }

  return [state, dispatchDeleteProcessId];
}
