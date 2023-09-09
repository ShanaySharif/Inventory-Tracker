import React from "react";
import NewTrackerForm from "./NewTrackerForm";
import TrackerList from "./TrackerList";
import TrackerDetail from "./TrackerDetail";


class TrackerControl extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        formVisibleOnPage: false,
        mainTrackerList: [],
        selectedTicket: null,
      };