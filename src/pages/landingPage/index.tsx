import React from "react";
import Container from "../../components/Container";
import Welcome from "./welcome";
import Banners from "./banners";
import Benefits from "./benefits";

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
