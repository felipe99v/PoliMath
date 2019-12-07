import React from "react";
import We from '../Components/We'

class Nosotros extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Page-header">
                <div className=" d-flex justify-content-center">
                    <div className="m-md-3">
                        <We/>
                    </div>           
                </div>
                
            </div>
      </React.Fragment>
    );
  }
}

export default Nosotros;
