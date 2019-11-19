import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;
    const stats = [];
    for (let i = 0; i < children.length; i++) {
      stats.push(<i className={children[i].i} key={i} />);
      stats.push(` ${children[i].t}`);
      if (i !== children.length - 1) {
        stats.push(<br />);
      }
    }
    return <div className="stats">{stats}</div>;
  }
}

Stats.propTypes = {
  children: PropTypes.array.isRequired
};

export default Stats;
