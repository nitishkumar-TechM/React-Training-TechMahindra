
import { useState } from 'react'
import './App.css'
import UserName from './components/UserName';
import Message from './components/Message';
import UpdateObj from './components/UpdateObj';
import UpdateNestedObj from './components/UpdateNestedObj';
import UpdateArrObj from './components/UpdateArrObj';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import ExpandableText from './components/ExpandableText';

function App() {
 // [false, true] // store the boolean value in an array and map from here
 // whenever React rerender the components. 
  const [isVisible, setVisiblity] = useState(false);
  // const [isActive, setActive] = useState(true);

  const [cartItems, setCartItems] = useState(['Product1', 'Product2']);

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: 'John',
    },
  });

  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushroom']
  });

  const handlePizza = () => {
    setPizza({...pizza, toppings: [...pizza.toppings, 'Cheese']});
  }

  const handleGameClick = () => {
    setGame({...game, player: {...game.player, name: 'Nitish'}});
  }

  const [cart, setCart] = useState({
    discount: .1,
    items: [
      {id:1, title: 'Product 1', quantity: 1},
      {id:2, title: 'Product 2', quantity: 1},
    ]
  })

  const handleCartQuan = () => {
    setCart({...cart, items: cart.items.map(item => item.id === 1 ? {...item, quantity: item.quantity + 1 }: item)})
  }
  
  const handleClick = () => {
    setVisiblity(true);
    // setName('nitish')
    
    console.log(isVisible);   // old value.
    
  }
  // React updates the state asynchronously, meaning not immediately.
  // this done for performance rerason, because as part of handling an event,
  // we could set multiple state variable.
  // Every time we call set() method, react Rerender our component,
  // will end with too many rendering.
  // So react will send these useState set() into batches and apply them in later time.

  // State is stored outside of components.

  // Use hooks at the top level of our components.

  return (
    <>
      <h1>Hello Nitish</h1>
      <button onClick={handleClick}>Show</button>
      <p>
        <h1>Game</h1>
        <h3>{game.player.name}</h3>
      </p>
      <button onClick={handleGameClick}> Game Click me</button>
      <UserName />

      <button onClick={handleClick}>Show</button>
      <p>
        <h1>Pizza</h1>
        <ul>
          {pizza.toppings.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </p>
      <button onClick={handlePizza}> Pizza Click me</button>

      <p>
        <h1>Cart</h1>
        <h3>
          Quantity:{" "}
          <ul>
            {cart.items.map((item) => (
              <li>{item.quantity}</li>
            ))}
          </ul>
        </h3>
      </p>
      <button onClick={handleCartQuan}> Cart Click me</button>

      <Message />

      <UpdateObj />

      <UpdateNestedObj />

      <UpdateArrObj />

      <NavBar cartItemsCount={cartItems.length} />

      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />

      <ExpandableText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo numquam
        nostrum obcaecati laboriosam beatae non maxime, dolorum minima odio
        sequi ipsa. Fuga unde sequi doloremque voluptatum quas eum officiis
        maiores mollitia, earum libero, animi nihil dolorum error sunt
        doloribus? Fuga alias nam consequuntur ea ut voluptatibus beatae omnis
        voluptate amet tempora recusandae illo porro sapiente, accusamus quam ad
        vitae voluptatem dolorum est deleniti odit suscipit commodi nostrum.
        Odit, corporis! Facere laborum ab consectetur quibusdam voluptas
        numquam, itaque doloribus voluptatem veniam amet tempore hic soluta enim
        reprehenderit laboriosam vitae accusantium temporibus veritatis illum
        assumenda eum sit cum. Nesciunt molestiae suscipit obcaecati?
      </ExpandableText>
    </>
  );
}

export default App
