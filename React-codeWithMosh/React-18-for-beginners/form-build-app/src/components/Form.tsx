import { FieldValues, useForm } from "react-hook-form";

// Controlled Components: All input fields have their value prop to maintain
// their own state, but in this implementation we also have state variable 
// called 'person', so it is possible that these sources get out of sync.
// To solve this problem we should make react a single source of truth
// set the value attribute to person.name and person.age respectively.
// Now we are referring this input field as a controlled component.
// Beacuse its state is entirly controlled by 'react' this means that t
// the value of this input field is not managed by DOM but instead
// it stored and updated in a component state.

// Out of Sync: Sometimes, the value in the input field and the value in
// the state variable 'person' might not match.
// This can happen if they are not updated together properly.

// Single Source of Truth: To avoid this mismatch, you should make
// React the only source of truth. This means the input fields 
// should always get their value from the state variable, 
// and any changes to the input fields should update the state variable. 
// This way, the state variable and the input fields will always be in sync.

function Form() {
  const { register, handleSubmit, formState: { errors} } = useForm();  

  const onSubmit = (data: FieldValues) => console.log(data);
  
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-lebel">
            Name
          </label>
          <input
            id="name"
            { ...register('name', { required: true, minLength: 3})}
            type="text"
            className="form-control"
          />
          { errors.name?.type === 'required' && <p className="text-danger">The name field is required.</p>}
          { errors.name?.type === 'minLength' && <p className="text-danger">The name must be at least 3 characters.</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            id="age"
            { ...register('age')}
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
