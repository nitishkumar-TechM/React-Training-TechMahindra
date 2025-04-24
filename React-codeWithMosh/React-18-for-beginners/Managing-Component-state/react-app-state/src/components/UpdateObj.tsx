import { useState } from "react";

const UpdateObj = () => {

    const [drink, setDrink] = useState({
        title: 'Pepsi',
        price: 4,
    });

    const handleClick = () => {
        setDrink({...drink, price: 7});
    };

    return (
        <div>
            <p>{drink.price}</p>
            <button onClick={handleClick}>Click me</button>

        </div>
    )
}

export default UpdateObj;