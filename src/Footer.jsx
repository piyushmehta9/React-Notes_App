import { Copyright } from "@material-ui/icons";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="footer">
        <p style={{ fontWeight: "530", padding: "2px" }}>
          Copyright
          <Copyright
            style={{ marginBottom: "-2px", fontSize: "15px" }}
          ></Copyright>
          PiyushMehta {year}
        </p>
      </div>
    </>
  );
};

export default Footer;
