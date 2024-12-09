import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";

function Navtab({ navItem }) {
  const location = useLocation()
  return (
    <Nav justified pills>
      {navItem &&
        navItem.length > 0 &&
        navItem.map((each) => (
          <NavItem active={location.pathname === each.route}>
            <NavLink to={each.route}>
              {each.name}
            </NavLink>
          </NavItem>
        ))}
    </Nav>
  );
}

export { Navtab };
