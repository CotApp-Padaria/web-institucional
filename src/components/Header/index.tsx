import { useRouter } from 'next/router';
import Link from 'next/link';
import { Image, Nav, Navbar, NavDropdown } from "react-bootstrap";

import styles from './index.module.css';
import { Button } from '@material-ui/core';

function Header() {

    const router = useRouter();    
    
    function handleClick(e: any, path: string) {
        e.preventDefault();
        router.push(path);
    }    

    return (
        <header>            
            <Navbar id="header" fixed="top" className={styles.navbar} collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Link href="/#welcome">
                    <Navbar.Brand>
                        <Image                         
                            src="/images/logos/logo-solido-bold-branco.png"
                            alt="Logo da CotApp"
                            width="48"
                            height="54"
                        />                    
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={`${styles.nav} col-lg-6 fw-bold`}>                        
                        <Nav.Link                             
                            onClick={(event: any) => handleClick(event, '/#benefits')}
                        >
                            Benefícios
                        </Nav.Link>                        
                        
                        <Nav.Link                             
                            onClick={(event: any) => handleClick(event, '/#features')}
                        >
                            Funcionalidades
                        </Nav.Link>                        

                        {/* <NavDropdown title="Funcionalidades" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Catálogo online</NavDropdown.Item>                            
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}

                        <Link href="/#equipe">
                            <Nav.Link>Equipe</Nav.Link>
                        </Link>

                        <Link href="/#contato">
                            <Nav.Link>Contato</Nav.Link>
                        </Link>
                    </Nav>
                    <Nav className="col-lg-6">
                        <div className="col">

                            <Button 
                                variant="contained" 
                                color="secondary"
                                className="float-end"
                                onClick={() => router.push({
                                    pathname: 'options',
                                    query: {
                                        action: 'register'
                                    }
                                })}
                            >
                                Cadastro Gratuito
                            </Button>

                            <Button 
                                variant="outlined"                                
                                className="float-end me-3"
                                onClick={() => router.push({
                                    pathname: 'options',
                                    query: {
                                        action: 'login'
                                    }
                                })}
                            >
                                Login
                            </Button>
                                                        
                        </div>                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>                                               
        </header>
    )

}

export default Header;