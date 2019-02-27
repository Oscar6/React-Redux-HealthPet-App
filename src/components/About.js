import React from 'react';

class About extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div className="aboutInfo">
                <h3>About</h3>
                <div className="aboutParagraph">
                    <p>HealthPet provides pet owners relief from appointment reminders and its details. </p>
                </div>
            </div>
        );
    }
}


export default About;
