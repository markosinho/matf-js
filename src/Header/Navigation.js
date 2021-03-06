import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../Shared/Shared.css';
import './Navigation.css';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import FormControl from 'react-bootstrap/FormControl';

const CustomNavigation = (props) => {

    const permissions = props.permissions;

    console.log(permissions);

    return <div className="container">
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/" className="brandCustom">Web shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">
                        <FontAwesomeIcon icon={["fas", "home"]} className="iconMargin" />Home
                    </Nav.Link>
                    <Nav.Link href="/products" hidden={!permissions.canManageProducts}>
                        <FontAwesomeIcon icon={["fas", "box"]} className="iconMargin" />Products
                        </Nav.Link>
                    <Nav.Link href="/users" hidden={!permissions.canManageUsers}>
                        <FontAwesomeIcon icon={["fas", "users"]} className="iconMargin" />Users
                    </Nav.Link>

                    <Nav.Link href="/login"  className="rightPosition">
                        <FontAwesomeIcon icon={["fas", "user"]} className="iconMargin" />Login
                    </Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form> */}
            </Navbar.Collapse>
        </Navbar>
    </div>;
}

export default CustomNavigation;