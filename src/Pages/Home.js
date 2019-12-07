import React from "react";
import CardButton from '../Components/CardButton'
import Example from '../Components/Example'

function Home() {
    return (
        <React.Fragment>
            <div className="Page-header">
                <div className=" d-flex justify-content-center">
                    <div className="m-md-3">
                        <CardButton />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Home;