import React from "react";
import Container from "../../components/Container";
import Welcome from "../../components/Index/welcome";
import Benefits from "../../components/Index/benefits";
import Register from "../../components/Index/register";


function LandinPage() {

    return (        
        <Container>             

            <Welcome/>

            <Benefits />

            <Register />
            
        </Container>     
    );

}

export default LandinPage;
