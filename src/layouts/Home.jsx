import React from "react";
import { Grid, Row, Col, Navbar, Nav, NavDropdown} from "react-bootstrap";
import Navigation from "./Navigation";

class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          connected: false,
          token: 'DAI'
        }
    }

    setWeth = () => {
        this.setState({token: 'WETH'})
    }

    setDai = () => {
        this.setState({token: 'DAI'})
    }

    setUsdc = () => {
        this.setState({token: 'USDC'})
    }


    launchWidget = () => {
        if(this.state.token==="DAI"){
        window.AirSwapInstant.render(
            { 
              env: 'development',
              token: '0xf68abfbdd621b5699d930da00cb673e6a913a8fe',
              mode: 'buy',
              baseToken: 'DAI',
              onComplete: txId => console.log('great success!', txId),
              onClose: () => console.log('cancelled prod trade'),
            },
            'body',
         )}
        if(this.state.token==="WETH"){
            window.AirSwapInstant.render(
                { 
                  env: 'development',
                  token: '0xf68abfbdd621b5699d930da00cb673e6a913a8fe',
                  mode: 'buy',
                  baseToken: 'WETH',
                  onComplete: txId => console.log('great success!', txId),
                  onClose: () => console.log('cancelled prod trade'),
                },
                'body',
             )}
        if(this.state.token==="USDC"){
            window.AirSwapInstant.render(
                { 
                  env: 'development',
                  token: '0xf68abfbdd621b5699d930da00cb673e6a913a8fe',
                  mode: 'buy',
                  baseToken: 'USDC',
                  onComplete: txId => console.log('great success!', txId),
                  onClose: () => console.log('cancelled prod trade'),
                },
                'body',
             )}
    }

    render() {
        return(
            <div className="content">
                <Row>
                    <Col md="12" lg="12" sm="12">
                        <Navbar bg="light" expand="lg">
                            <Navbar.Brand href="#home">Test Dapp</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto nav-design">
                                <Nav.Link href="#home" className="link-design">Home</Nav.Link>
                                <Nav.Link href="#link" className="link-design">dApp</Nav.Link>
                                <Nav.Link href="#link" className="link-design">How To</Nav.Link>
                                <NavDropdown title="Select Token" id="basic-nav-dropdown" className="link-design">
                                    <NavDropdown.Item onClick={this.setWeth}>WETH</NavDropdown.Item>
                                    <NavDropdown.Item onClick={this.setDai}>DAI</NavDropdown.Item>
                                <NavDropdown.Item onClick={this.setUsdc}>USDC</NavDropdown.Item>
                                {/* <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                                </NavDropdown>
                            </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                    <Col md="12">
                        <div className="bg">
                            <button className="btn btn-success trader-button" onClick={this.launchWidget}>Launch The Trader</button>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home;