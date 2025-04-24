import { useState } from "react";

const UpdateNestedObj = () => {
    const [customer, setCustomer] = useState({
        name: 'Nitish',
        address: {
            city: 'Noida',
            zipCode: 201309
        }
    });

    const [tags, setTags] = useState(['happy', 'cheerful'])

    const handleClick = () => {
        setCustomer({ ...customer, address: { ...customer.address, zipCode: 800001}})

        //Add
        setTags([...tags, 'exciting']);

        // Remove
        setTags(tags.filter(tag => tag !== 'happy'));

        // Update
        setTags(tags.map(tag => tag === 'happy' ? 'happiness' : tag))
    };

    return (
        <div>
            <p>Zip code: {customer.address.zipCode}</p>
            <button onClick={handleClick}> Press me</button>

        </div>
    )
}

export default UpdateNestedObj;