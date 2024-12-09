import React, { useState } from "react";
import {
  Dropdown as RsDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function Dropdown({id,ref, props, data, Selected}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <RsDropdown id={id} ref={ref} isOpen={dropdownOpen} toggle={toggle} {...props}> 
      <DropdownToggle caret size="lg">
        {Selected}
      </DropdownToggle>
      <DropdownMenu>
        {
            data && data.length > 0 ? data.map((each)=> <DropdownItem >{each.text}</DropdownItem>) : <p>No data found</p>
        }
       
      </DropdownMenu>
    </RsDropdown>
  );
}
export { Dropdown };
