import React from "react";
import { Link } from "react-router-dom";
import Web3Connect from "web3connect";
import { ethers } from 'ethers';
import Web3 from 'web3';
import Portis from "@portis/web3";

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Row,
    Col
  } from "reactstrap";

class Landing extends React.Component{

    render() {
        return(
            <div className="content">

            <div> 
                <img alt="..." src={require("assets/img/logo_white.jpg")} />
            </div>

            <div className="container" >
                <Web3Connect.Button
                    label = {"Connect Wallet"}
                    providerOptions={{
                        portis: {
                            package: Portis, // required
                            options: {
                            id: "7b4b6647-0d2d-4ae2-8597-a34fbcdaa4fa" // required
                            }
                        },
                        //   fortmatic: {
                        //     package: Fortmatic, // required
                        //     options: {
                        //       key: "FORTMATIC_KEY" // required
                        //     }
                        //   },
                    }}

                    onConnect={(provider) => {
                        const web3 = new Web3(provider); // add provider to web3
                        // const web3 = new ethers.providers.Web3Provider(provider);
                    }}

                    onClose={() => {
                        console.log("Web3Connect Modal Closed"); // modal has closed
                    }}
                />
            </div>
            </div>
        )
    }
}

export default Landing;