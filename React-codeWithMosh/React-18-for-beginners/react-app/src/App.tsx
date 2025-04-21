import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import AlertDismiss from "./components/AlertDismiss";
import { useState } from "react";
import './App.css';

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  let items = ["New Delhi", "Bihar", "Uttar Pradesh", "Mumbai", "Chennai"];

  const handleSelectItem = (item: string) => {
    console.log('nk ',item);    
  }

  const handleClickButton = () => {
    console.log('Clicked'); 
    setAlertVisible(true);   
  }

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Alert>
        Hello <strong>Nitish </strong>
      </Alert>
      {alertVisible && <AlertDismiss onClose={() => setAlertVisible(false)}>
        Hello Nitish, from <strong>Tech Mahindra</strong>
      </AlertDismiss>}
      <Button onClick={handleClickButton} color="danger">
        My Button
      </Button>
    </div>
  );
}

export default App;