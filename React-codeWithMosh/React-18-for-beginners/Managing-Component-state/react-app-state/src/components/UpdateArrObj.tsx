import { useState } from "react";
import produce from "immer";

const UpdateArrObj = () => {2
    const [bugs, setBugs] = useState([
        { id: 1, title: 'Bug 1', fixed: false},
        { id: 2, title: 'Bug 2', fixed: false},
    ]);

    const handleClick = () => {
        // setBugs(bugs.map(bug => bug.id === 1 ? { ...bug, fixed: true } : bug))

        setBugs(produce(draft => {
            const bug = draft.find(bug => bug.id === 1 )
            if (bug) bug.fixed = true;
        }))
    };

    return (
      <div>
        <div>
          <h1>Bug List</h1>{" "}
          <ul>
            {" "}
            {bugs.map((bug) => (
              <li key={bug.id}>
                {bug.title} - {bug.fixed ? "Fixed" : "Not Fixed"}{" "}
              </li>
            ))}{" "}
          </ul>{" "}
        </div>

        <button onClick={handleClick}> Click me</button>
      </div>
    );
}

export default UpdateArrObj;