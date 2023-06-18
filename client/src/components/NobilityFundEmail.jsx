import React from "react";

const NobilityFundEmail = ({ campaign, donor, transactionhash }) => {
  return (
    <html>
      <head>
        <title>Receipt for Crowdfunding Campaign</title>
      </head>
      <body
        style={{
          backgroundColor: "#ffffff",
          fontFamily: "sans-serif",
          color: "black",
        }}
      >
        <div
          style={{
            border: "1px solid #eaeaea",
            borderRadius: "40px",
            margin: "40px auto",
            maxWidth: "500px",
          }}
        >
          <img
            src={campaign.image}
            alt=""
            style={{
              objectFit: "cover",
              aspectRatio: "1",
              width: "465px",
              height: "200px",
            }}
          />
          <div style={{ padding: "20px" }}>
            <h1>Thank you for your donation!</h1>
            <p>
              <strong>Campaign Details:</strong>
            </p>
            <p>
              Owner:{" "}
              <a href={`https://goerli.etherscan.io/address/${campaign.owner}`}>
                {campaign.owner}
              </a>
              <br />
              Title: {campaign.title}
              <br />
              Description: {campaign.description}
              <br />
              Target: {campaign.target} ETH
              <br />
              Deadline: {new Date(campaign.deadline).toLocaleDateString()}
              <br />
            </p>
            <p>
              <strong>Your Details:</strong>
            </p>
            <p>
              Your Address:{" "}
              <a href={`https://goerli.etherscan.io/address/${donor.donator}`}>
                {donor.donator}
              </a>
              <br />
              Donation: {donor.donation} ETH
            </p>
            <br />
            <p style={{ fontSize: "16px", fontWeight: "bold" }}>
              You can check your transaction details:
            </p>
            <br />
            <a
              href={`https://goerli.etherscan.io/tx/${transactionhash}`}
              style={{
                backgroundColor: "#000000",
                borderRadius: "5px",
                color: "#ffffff",
                display: "inline-block",
                padding: "10px 20px",
                textDecoration: "none",
                textAlign: "center",
                width: "200px",
              }}
            >
              Etherscan
            </a>
          </div>
        </div>
      </body>
    </html>
  );
};

export default NobilityFundEmail;
