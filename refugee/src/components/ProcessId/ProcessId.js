import React from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  useGetProcessId,
  useDeleteProcessId,
  usePutProcessId
} from "../../store";
import "./ProcessId.scss";

export default function ProcessId() {
  const { id } = useParams();
  const history = useHistory();
  const [processId] = useGetProcessId(id);
  const { name, location, date, approved, textbody } = processId;
  const [deletedState, dispatchDeleteProcessId] = useDeleteProcessId(id);
  const [updateddState, dispatchUpdateProcessId] = usePutProcessId(id);

  function toggleApprove() {
    const copy = {...processId, approved: !approved};
    dispatchUpdateProcessId(copy);
    history.push("/");
  }
  function handleDelete() {
    dispatchDeleteProcessId();
    history.push("/");
  }
  return (
    <div className="processId">
      <div>Name: {name}</div>
      <div>Location: {location}</div>
      <div>Data: {date}</div>
      <div>Status: {approved ? "Approved" : "Denied"}</div>
      <div>Story:</div>
      <div className="text">{textbody}</div>
      <div className="action">
        <button className="process-action" onClick={toggleApprove}>
          {!approved ? "Approve" : "Denied"}
        </button>
        <button className="process-action" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
