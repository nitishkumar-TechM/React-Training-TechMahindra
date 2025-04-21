import { useState } from "react";
// import styles from './ListGroup.css';
import styled from 'styled-components';

// { items: [], heading: string }
// Interface in TypeScript

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  $active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${ props => props.$active? 'blue' : undefined};
`

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
        {/* <ul className='list-group'> */}
        <List>
          {items.map((item, index) => (
            <ListItem
              $active={index === selectedIndex}
              key={index}
              onClick={ () => {
                setSelectedIndex(index);
                onSelectItem(item);
            } }
            >
              {item}
            </ListItem>
          ))}
        {/* </ul> */}
        </List>
      </>
    );
}

export default ListGroup;