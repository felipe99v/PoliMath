import React from "react";
import Example from '../Components/Example'

class Integral extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Page-header">
        <div id="jxgbox" className="jxgbox">
                    <Example />
                </div>
            </div>
      </React.Fragment>
    );
  }
}

export default Integral;