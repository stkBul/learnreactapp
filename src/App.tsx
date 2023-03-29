import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div>
      <Button onClick={() => setShowAlert(!showAlert)} color="primary">
        show alert
      </Button>
      {showAlert && (
        <Alert>
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
        </Alert>
      )}
    </div>
  );
}

export default App;
