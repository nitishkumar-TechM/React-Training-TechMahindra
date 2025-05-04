import { FormEvent, useState } from "react";

// Controlled Components: All input fields have their value prop to maintain
// their own state, but in this implementation we also have state variable 
// called 'person', so it is possible that these sources get out of sync.
// To solve this problem we should make react a single source of truth
// set the value attribute to person.name and person.age respectively.

// Out of Sync: Sometimes, the value in the input field and the value in
// the state variable 'person' might not match.
// This can happen if they are not updated together properly.

// Single Source of Truth: To avoid this mismatch, you should make
// React the only source of truth. This means the input fields 
// should always get their value from the state variable, 
// and any changes to the input fields should update the state variable. 
// This way, the state variable and the input fields will always be in sync.

function Form() {
  const [person, setPerson] = useState({
    name: "",
    age: '',
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-lebel">
            Name
          </label>
          <input
            id="name"
            onChange={(event) =>
              setPerson({ ...person, name: event.target.value })
            }
            value={person.name}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            id="age"
            onChange={(event) =>
              setPerson({ ...person, age: parseInt(event.target.value) })
            }
            value={person.age}
            type="number"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
