import React from "react";
import Container from "../../components/Container";
import Benefits from "./benefits";
import Welcome from "./welcome";


function LandinPage() {

    return (        
        <Container>             

            <Welcome/>

            <Benefits />

        </Container>     
    );

}

export default LandinPage;
