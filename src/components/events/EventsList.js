import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { moduleName } from "../../ducks/events";

class EventsList extends PureComponent {
  render() {
    return <div />;
  }
}

export default connect((state) => ({
  events: state[moduleName],
}))(EventsList);
