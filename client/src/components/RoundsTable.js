import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PopUpModal from "./PopUpModal";
import NotificationToast from './NotificationToast'
import { Button } from "react-bootstrap";
import { useState } from "react";

export default function RoundsTable(props) {
  const [deleteClicked, setDeleteClicked] = useState(false);
  const [deleteConfirmed, setDeleteConfirmed] = useState(false);
  const [roundsToDelete, setRoundToDelete] = useState(-1);

  const deleteRound = () => {
    //props.initiateDeleteRound(roundsToDelete);
    const message = `Round deleted successfully.`;
    return <NotificationToast message={message}></NotificationToast>
  };

  const deleteBtnHandler = () => {
    const confirmDelete = () => {
      setDeleteConfirmed(true);
      setDeleteClicked(false);
    };
    const cancelDelete = () => {
      setDeleteClicked(false);
    };
    const text = "Are you sure you want to delete round?";
    const choices = {
      "Yes, delete round": confirmDelete,
      "No, do not delete round": cancelDelete,
    };
    return <PopUpModal text={text} choices={choices}></PopUpModal>;
  };

  const renderTable = () => {
    const table = []
    for (let r = 0; r < props.rounds.length; ++r) {
      const thisRoundNum = props.rounds[r].roundNum;
      table.push(
        <tr key={thisRoundNum.toString()}>
          <td>{props.rounds[r].date}</td>
          <td>{props.rounds[r].course}</td>
          <td>
            {Number(props.rounds[r].strokes) +
              Number(props.rounds[r].minutes) +
              ":" +
              props.rounds[r].seconds +
              " (" +
              props.rounds[r].strokes +
              " in " +
              props.rounds[r].minutes +
              ":" +
              props.rounds[r].seconds +
              ")"}
          </td>
          <td>
            <button
              onClick={
                props.menuOpen
                  ? null
                  : () => props.initiateEditRound(thisRoundNum)
              }
            >
              <FontAwesomeIcon icon="eye" />
              <FontAwesomeIcon icon="edit" />
            </button>
          </td>
          <td>
            <button
              onClick={
                props.menuOpen ? null : () => {
                  setDeleteConfirmed(false)
                  setDeleteClicked(true);
                  setRoundToDelete(thisRoundNum)
                }
              }
            >
              <FontAwesomeIcon icon="trash" />
            </button>
          </td>
        </tr>
      );
    }
    return table;
  };

  return (
    <div
      id="roundsModeTab"
      className="mode-page"
      role="tabpanel"
      aria-label="Rounds Tab"
      tabIndex="0"
      data-testid="roundsTable"
    >
      <h1 className="mode-page-header">Rounds</h1>
      <table id="roundsTable" className="table table-hover caption-top">
        <caption id="roundsTableCaption" aria-live="polite">
          {"Table displaying " +
            props.rounds.length +
            " speedgolf round" +
            (props.rounds.length !== 1 ? "s" : "")}
        </caption>
        <thead className="table-light">
          <tr>
            <th
              scope="col"
              role="columnheader"
              className="sortable-header cell-align-middle"
              aria-sort="none"
            >
              <button
                className="btn bg-transparent table-sort-btn"
                aria-label="Sort ascending by date"
              >
                <FontAwesomeIcon icon="sort" />
              </button>
              Date
            </th>
            <th
              scope="col"
              role="columnheader"
              className="sortable-header cell-align-middle"
              aria-sort="none"
            >
              <button
                className="btn bg-transparent table-sort-btn"
                aria-label="Sort ascending by course"
              >
                <FontAwesomeIcon icon="sort" />
              </button>
              Course
            </th>
            <th
              scope="col"
              role="columnheader"
              className="sortable-header cell-align-middle"
              aria-sort="none"
            >
              <button
                className="btn bg-transparent table-sort-btn"
                aria-label="Sort ascending by score"
              >
                <FontAwesomeIcon icon="sort" />
              </button>
              Score
            </th>
            <th scope="col" className="cell-align-middle">
              View/Edit...
            </th>
            <th scope="col" className="cell-align-middle">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {props.rounds === null || props.rounds.length === 0 ? (
            <tr>
              <td colSpan="5" scope="rowgroup">
                <i>No rounds logged</i>
              </td>
            </tr>
          ) : (
            renderTable()
          )}
        </tbody>
      </table>
      <Button
      data-testid="simulateDeleteButton"
        onClick={() => {
          setDeleteConfirmed(false)
          setDeleteClicked(true);
        }}
      >
        add and delete functionality not implemented so click me
      </Button>
      {deleteClicked && deleteBtnHandler()}
      {deleteConfirmed && deleteRound()}
    </div>
  );
}