import React from "react";
import Container from "../../components/Container";
import Welcome from "../../components/Index/welcome";
import Benefits from "../../components/Index/benefits";
import Register from "../../components/Index/register";
import Features from "../../components/Index/features";

function LandinPage() {

    return (        
        <Container>             

            <Welcome/>

            <Benefits />

            <Register />

            <Features />
            
        </Container>     
    );

}

export default LandinPage;
