import "./styles.css";
import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
/*
  Instructions:
    1. Clicking the button should trigger handleEvent.
    2. Set the PropTypes for StatusReport component.
    2. Update the "status" prop passed into the StatusReport component
    4. Fix the unit test to confirm clicking the button updates the status text.
       Note the Tests tab next to the Browser tab.
*/
const ButtonQuestion = () => {
  const handleEvent = () => {
    console.log("Button was pressed");
  };
  return (
    <div className="App">
      <h1>Interview Question</h1>
      <h2>Follow the instructions in the source</h2>
      <Box pt="10px">
        <Button
          data-testid="button-element"
          variant="contained"
          onClick={handleEvent()}
        >
          Test Button
        </Button>
      </Box>
    </div>
  );
};
const StatusReport = ({ status }) => {
  return (
    <Box data-testid="status-element" pt="10px">
      Success? {status}
    </Box>
  );
};
export default function App() {
  const [status, setStatus] = React.useState(false);
  return (
    <>
      <ButtonQuestion />
      <StatusReport status={status} />
    </>
  );
}