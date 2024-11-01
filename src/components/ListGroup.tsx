//import { Fragment } from "react";

import { useState } from "react";
//import { MouseEvent } from "react";

//{items: [], heading : string }

interface Props {
  items: string[];
  heading: string;
  //(item:string)=>void
  onSelectItem: (itrm: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //let selectedIndex = 3;
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //arr[0] //variable (selectedIndex)
  //arr[1] //updater function
  //const [name ,setName] =useState('')
  //items = [];
  //event handler
  //const handleClick = (event: MouseEvent) => { console.log(Event)};
  return (
    <>
      <h1>{heading}</h1>
      {/*items.length === 0 ? <p>No items found</p> : null*/}
      {items.length === 0 && <p>No item found</p>}

      <ul className="list-group active ">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active "
                : "list-group-item "
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
