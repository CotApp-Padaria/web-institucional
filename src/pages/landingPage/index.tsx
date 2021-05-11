import React from "react";
import Container from "../../components/Container";
import Banners from "./banners";
import Benefits from "./benefits";
import Welcome from "./welcome";

function LandinPage() {

    return (        
        <Container>             

            <Welcome/>

            <Banners/>

            <Benefits />            
            
        </Container>     
    );

}

export default LandinPage;
