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
            { 
              env: 'development',
              token: '0xf68abfbdd621b5699d930da00cb673e6a913a8fe',
              mode: 'buy',
              onComplete: txId => console.log('great success!', txId),
              onClose: () => console.log('cancelled prod trade'),
            },
            'body',
         ) 
    }

    render() {
        return(

            <div className="bg">
                <button className="btn btn-success trader-button" onClick={this.launchWidget}>Launch The Trader</button>
            </div>

        )
    }
}

export default Landing;