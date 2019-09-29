import React from "react";
import CardButton from '../Components/CardButton'

function Home() {
    return (
        <React.Fragment>
            <div className="Page-header">
                <div class=" d-flex justify-content-center">
                    <div className="m-md-3">
                        <CardButton />
                    </div>
                    <div className="m-md-3">
                        <CardButton />
                    </div>
                    <div className="m-md-3">
                        <CardButton />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;