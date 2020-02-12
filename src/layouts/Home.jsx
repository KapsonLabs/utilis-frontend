import React from "react";
import { Grid, Row, Col} from "react-bootstrap";
import Navigation from "./Navigation";

class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          connected: false,
          token: ''
        }
    }

    launchWidget = () => {
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
         ) 
    }

    render() {
        return(
            <div className="content">
                <Row>
                    <Col md="12" lg="12" sm="12">
                        <Navigation/>
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