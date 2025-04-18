import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  let items = ["New Delhi", "Bihar", "Uttar Pradesh", "Mumbai", "Chennai"];

  const handleSelectItem = (item: string) => {
    console.log('nk ',item);    
  }

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
      <Alert>
        Hello <strong>Nitish </strong>
      </Alert>
    </div>
  );
}

export default App;