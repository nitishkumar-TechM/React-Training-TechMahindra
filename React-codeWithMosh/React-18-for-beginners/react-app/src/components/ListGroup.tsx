function ListGroup() {
    let items = [
        'New Delhi',
        'Bihar',
        'Uttar Pradesh',
        'Mumbai',
        'Chennai'
    ];
    
    return (
      <>
        <h1>List</h1>        
        { items.length === 0 && <p>No item found</p>}
        <ul className="list-group">
          {items.map((item, index) => (
            <li key={index} className="list-group-item">
              {item}
            </li>
          ))}
        </ul>
      </>
    );
}

export default ListGroup;