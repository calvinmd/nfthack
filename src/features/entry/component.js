import React, { useState } from "react";
// import { renderRequestElement, RequestData, QROptions } from '@bloomprotocol/share-kit';
import { noop } from "lodash";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
} from "reactstrap";
import { KYC } from "../../config/constants";

const ConnectWallet = ({ handleClick = noop, buttonLabel }) => {
  return (
    <>
      <CardText
        style={{
          textAlign: "center",
          marginTop: "80px",
          marginBottom: "40px",
        }}
      >
        Connect your wallet to start KYC
      </CardText>
      <Button
        onClick={handleClick}
        className="shadow-none"
        color="info"
        style={{
          width: "100%",
          borderRadius: "12px",
          marginBottom: "10px",
        }}
      >
        {buttonLabel}
      </Button>
    </>
  );
};

const Kyc = ({ onClick = noop }) => {
  // TODO: generate QR Code inline
  // const requestData = {
  //   action: "attestation",
  //   token: wallet,
  //   url: 'https://receive-kit.bloom.co/api/receive',
  //   org_logo_url: 'https://bloom.co/images/notif/bloom-logo.png',
  //   org_name: 'Bloom',
  //   org_usage_policy_url: 'https://bloom.co/legal/terms',
  //   org_privacy_policy_url: 'https://bloom.co/legal/privacy',
  //   types: ['full-name', 'phone', 'email'],
  // };
  // const qrOptions = {
  //   size: 200,
  // };
  // const callbackUrl = 'https://mysite.com/bloom-callback';
  // const container = document.createElement('div');
  // const {update, remove} = renderRequestElement({ container, requestData, qrOptions, callbackUrl });
  return (
    <>
      <CardText
        style={{
          textAlign: "center",
          marginTop: "80px",
          marginBottom: "40px",
        }}
      >
        Connect to Bloom for KYC
      </CardText>
      <Button
        onClick={onClick}
        className="shadow-none"
        color="info"
        style={{
          width: "100%",
          borderRadius: "12px",
          marginBottom: "10px",
        }}
      >
        Verify My Identity
      </Button>
    </>
  );
};

const MintToken = ({ wallet }) => {
  return (
    <>
      <CardText
        style={{
          textAlign: "center",
          marginTop: "80px",
          marginBottom: "40px",
        }}
      >
        Your identity is verified!
        <br />
        <br />
        KYC token is minted to your wallet,
        <br />
        You are now approved to use the platform!
      </CardText>
    </>
  );
};

const EntryCard = ({
  buttonLabel,
  handleClick = noop,
  wallet,
}) => {
  const [kyc, setKyc] = useState(false);
  console.log('zzz kyc:', kyc);
  const onClick = () => {
    window.open(`${KYC.url}`);
    setKyc(true);
  };
  return (
    <Card
      style={{
        minWidth: "320px",
        minHeight: "480px",
        borderRadius: "24px",
        filter: "drop-shadow(4px 8px 4px #ddd)",
      }}
    >
      <CardHeader
        style={{
          fontSize: "12px",
          display: "flex",
          justifyContent: "center",
          borderTopLeftRadius: "24px",
          borderTopRightRadius: "24px",
        }}
      >
        <div>
          <b>Molecule Protocol</b>
        </div>
      </CardHeader>
      <CardBody>
        {
          wallet
          ? kyc
            ? <MintToken wallet={wallet} />
            : <Kyc onClick={onClick} />
          : <ConnectWallet handleClick={handleClick} buttonLabel={buttonLabel} />
        }
      </CardBody>
    </Card>
  );
};

export default EntryCard;
