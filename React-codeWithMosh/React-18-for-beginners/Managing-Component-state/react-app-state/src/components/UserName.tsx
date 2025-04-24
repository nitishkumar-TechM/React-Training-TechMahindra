import { useState } from "react";

const UserName = () => {

    // const [firstName, setFirstName] = useState('Rahul');
    // const [lastName, setLastName] = useState('Kumar');
    const [isLoading, setLoading] = useState(false);

    const [person, setPerson] = useState({
        firstName: 'Nitish',
        lastName: 'Kumar'
    });

    // BEST PRACTICES
    // Avoid redundant state variables.
    // Group related variables inside an object.
    // Avoid deeply nested structures.

    // Keeping Components Pure
    // we should keep any kind of changes out of the render phase.



    return (
        <div>
            {/* <p>{firstName} {lastName}</p> */}
            {person.firstName} {person.lastName}

           

        </div>
    )

}

export default UserName;