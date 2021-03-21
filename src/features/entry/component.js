import React from "react";
import { noop } from "lodash";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
} from "reactstrap";
// import moment from "moment";

const EntryCard = ({
  buttonLabel,
  handleClick = noop,
  wallet,
}) => {
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
        <CardText>
        </CardText>
        {!wallet && (
          <>
            <CardText
              style={{
                textAlign: "center",
                marginTop: "80px",
                marginBottom: "20px",
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
        )}
        <CardText style={{ textAlign: "center", fontSize: "12px" }}>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default EntryCard;
