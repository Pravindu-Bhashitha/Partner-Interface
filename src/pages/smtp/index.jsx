import React from "react";
import { Box } from "@mui/material";
import "./index.css";

const SMTP = () => {
  return (
    <Box m="20px">
      <h1 className="header1">SMTP</h1>
      <div className="background">
        <div className="firstbuttons">
          <button className="button1">Load Existing Settings</button>
          <button className="button2">Clear Existing Settings</button>
        </div>
        <div className="Note">
          <p className="Note1">
            <b>Note:</b> You can check the accuracy of SMTP server settings and
            send emails to the test email address. You must install the Job
            Scheduler windows service on your application server in order to
            function Job Scheduler properly.
          </p>
          <br />
          <p className="Note2">*CDO: Collaboration Data Objects</p>
        </div>
        <div className="Fillings">
          <div className="Fill1">
            <label className="ServerType">Server Type*</label>
            <input className="ServerTypein" type="text"></input>
          </div>
          <div className="Fill2">
            <label className="SMTPServer">SMTP Server*</label>
            <input className="SSMTPServerin" type="text"></input>
          </div>
          <div className="Fill3">
            <label className="SMTPServerPort">SMTP Server Port</label>
            <input className="SSMTPServerPortin" type="text"></input>
          </div>
          <div className="Fill4">
            <label className="SenderEmailAddress">Sender Email Address *</label>
            <input className="SenderEmailAddressin" type="text"></input>
          </div>
          <div className="Fill5">
            <label className="RecipientEmailAddress">
              Recipient Email Address *
            </label>
            <input className="RecipientEmailAddressin" type="text"></input>
          </div>
          <div className="Fill6">
            <label className="TestEmailBody">Test Email Body *</label>
            <textarea className="TestEmailBodyin"></textarea>
          </div>
          <div className="Fill7">
            <label className="EnableCDOSettings">Enable CDO Settings</label>
            <label class="toggle">
              <input type="checkbox"></input>
              <span class="labels" data-on="ON" data-off="OFF"></span>
            </label>
          </div>
          <div className="Fill8">
            <label className="UserName">User Name *</label>
            <input className="UserNamein" type="text"></input>
          </div>
          <div className="Fill9">
            <label className="Password">Password *</label>
            <input className="Passwordin" type="text"></input>
          </div>
          <div className="secondbuttons">
            <button className="button3">Save SMTP Settings</button>
            <button className="button4">Send Test Email</button>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default SMTP;
