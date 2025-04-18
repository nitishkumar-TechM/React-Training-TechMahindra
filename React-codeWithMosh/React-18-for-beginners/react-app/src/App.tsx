import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New Delhi", "Bihar", "Uttar Pradesh", "Mumbai", "Chennai"];

  const handleSelectItem = (item: string) => {
    console.log('nk ',item);    
  }

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
    </div>
  );
}

export default App;