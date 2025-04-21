import { useState } from "react";
import styles from './ListGroup.module.css';

// { items: [], heading: string }
// Interface in TypeScript

interface Props {
    items: string[];
    heading: string;
    // (item: string) => void
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
    // Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);
    
    return (
      <>
        <h1>{heading}</h1>
        {items.length === 0 && <p>No item found</p>}
        <ul className={[styles.listGroup, styles.container].join(' ')}>
          {items.map((item, index) => (
            <li
              key={index}
              className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
              onClick={ () => {
                setSelectedIndex(index);
                onSelectItem(item);
            } }
            >
              {item}
            </li>
          ))}
        </ul>
      </>
    );
}

export default ListGroup;