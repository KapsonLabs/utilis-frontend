import React from "react";

class Landing extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          connected: false,
        }
    }

    launchWidget = () => {
        window.AirSwapInstant.render(
            { // DAI token address
              env: 'development',
              token: '0xf68abfbdd621b5699d930da00cb673e6a913a8fe',
              baseToken: 'DAI',
            //   amount: '50',
              mode: 'buy',
              onComplete: txId => console.log('great success!', txId),
              onClose: () => console.log('cancelled prod trade'),
            },
            'body',
         ) 
    }

    render() {
        return(
            <div className="content">

                <div> 
                    <img alt="..." src={require("assets/img/logo_white.jpg")} />
                </div>

                <div className="container" >
                   <button class="btn btn-success" onClick={this.launchWidget}>Launch Trader</button>
                </div>
            </div>
        )
    }
}

export default Landing;