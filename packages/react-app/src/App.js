import { useQuery } from "@apollo/client";
import { shortenAddress, useCall, useEthers, useLookupAddress } from "@usedapp/core";
import React, { useEffect, useState } from "react";
import Interface from "./components/Interface.js";
import LakeInterface from "./components/LakeInterface.js";
import { Suspense } from "react";

import { Body, Button, Container, Header, Image, Link } from "./components";
import logo from "./DigitalStudio1.png";
import exp1 from "./Experience1.png";
import exp2 from "./Experience2.png";
import exp3 from "./Experience3.png";
import scene from "./forestNeon7.png";
import lake from "./lake.png";
import enlight from "./logo2.png";
import videoBg from "./Haza.mp4";
import { Divider } from "antd";
import { Card } from "react-bootstrap";
import "./App.css";


function App() {

  require('react-dom');
  window.React2 = require('react');
  console.log(window.React1 === window.React2);
  // Read more about useDapp on https://usedapp.io/
  const [rendered, setRendered] = useState("");
  const [test, setTest] = useState(false);
  const [showVideo, setVideo] = useState(false);

  const ens = useLookupAddress();
  const { account, activateBrowserWallet, deactivate, error } = useEthers();

  useEffect(() => {
    if (ens) {
      setRendered(ens);
    } else if (account) {
      setRendered(shortenAddress(account));
      setTest(true);
      setVideo(true);
      setInterval(() => {
        setVideo(false);
      }, 4000);
    } else {
      setRendered("");
    }
  }, [account, ens, setRendered]);

  useEffect(() => {
    if (error) {
      console.error("Error while connecting wallet:", error.message);
    }
  }, [error]);






  if(!test) {
    return (
      <div className="App">
        <Header>
          <Button
            onClick={() => {
              if (!account) {
                activateBrowserWallet();
                console.log(rendered);
              } else {
                deactivate();
                console.log(rendered);
              }
            }}
          >
            {rendered === "" && "Connect Wallet"}
            {rendered !== "" && rendered}
          </Button>
        </Header>
        <Body>
          <Image src={logo} alt="ethereum-logo" />
          <Divider />
        </Body>
        <Interface />
        <Container className="bobert">
          <Link href="https://www.dior.com/en_us/fashion">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={exp1} />
              <Card.Body>
                <Card.Title>???????</Card.Title>
                <Card.Text>
                  ???? ????? ??????? ???? ?? ????? ?? ??? ???? ????? ??? ???? ?? ??? ???? ??
                  ??? ????'? ???????.
                </Card.Text>
                <Button variant="primary">???</Button>
              </Card.Body>
            </Card>
          </Link>
          <Link href="https://www.streetfighter.com/en/">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={exp2} />
              <Card.Body>
                <Card.Title>?????????</Card.Title>
                <Card.Text>
                  ??????????? ???? ??? ??????? ??? ??? ?????????? ?? ??????????? ?? ??????.
                </Card.Text>
                <Button variant="primary">???</Button>
              </Card.Body>
            </Card>
          </Link>
          <Link href="https://www.oxfordlearnersdictionaries.com/us/definition/american_english/empathy#:~:text=noun-,noun,empathy%20(between%20A%20and%20B)" >
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={exp3} />
              <Card.Body>
                <Card.Title>???????</Card.Title>
                <Card.Text>
                  ???? ????? ??? ???? ?? ??? ?? ????? ???? ????? ??? ???? ?? ??? ???? ??'?
                  ???? ????; ???, ???, ???.
                </Card.Text>
                <Button href="https://www.dior.com/en_us" variant="primary">???</Button>
              </Card.Body>
            </Card>
          </Link>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Body>
          {showVideo && <video src={videoBg} autoPlay loop muted />}
          <Container style={{
            backgroundImage: `url(${scene})`,
            backgroundSize: 'cover',
            width: '100%',
            marginTop: '-50px'
          }}>
            <div className="holder">
              <img src={enlight} alt="logo" className="logo" />
            </div>
          </Container>
        </Body>
        <div className="buttonHolder">
          <Button
            onClick={() => {
              if (!account) {
                activateBrowserWallet();
                console.log(rendered);
              } else {
                deactivate();
                console.log(rendered);
              }
            }}
          >
            {rendered === "" && "Connect Wallet"}
            {rendered !== "" && rendered}
          </Button>
        </div>
        <div>
          <LakeInterface />
        </div>
        <Container style={{
          backgroundImage: `url(${lake})`,
          backgroundSize: 'cover'
        }}>
          <Link href="https://www.dior.com/en_us/fashion">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={exp1} />
              <Card.Body>
                <Card.Title>???????</Card.Title>
                <Card.Text>
                  ???? ????? ??????? ???? ?? ????? ?? ??? ???? ????? ??? ???? ?? ??? ???? ??
                  ??? ????'? ???????.
                </Card.Text>
                <Button variant="primary">???</Button>
              </Card.Body>
            </Card>
          </Link>
          <Link href="https://www.streetfighter.com/en/">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={exp2} />
              <Card.Body>
                <Card.Title>?????????</Card.Title>
                <Card.Text>
                  ??????????? ???? ??? ??????? ??? ??? ?????????? ?? ??????????? ?? ??????.
                </Card.Text>
                <Button variant="primary">???</Button>
              </Card.Body>
            </Card>
          </Link>
          <Link href="https://www.oxfordlearnersdictionaries.com/us/definition/american_english/empathy#:~:text=noun-,noun,empathy%20(between%20A%20and%20B)" >
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={exp3} />
              <Card.Body>
                <Card.Title>???????</Card.Title>
                <Card.Text>
                  ???? ????? ??? ???? ?? ??? ?? ????? ???? ????? ??? ???? ?? ??? ???? ??'?
                  ???? ????; ???, ???, ???.
                </Card.Text>
                <Button href="https://www.dior.com/en_us" variant="primary">???</Button>
              </Card.Body>
            </Card>
          </Link>
        </Container>
      </div>
    );
  }
}

export default App;
