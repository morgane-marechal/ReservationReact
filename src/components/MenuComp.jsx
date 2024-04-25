import * as React from "react";
import Calendar from "react-calendar";
import { useState } from "react";
import ".././App.css";
import { Text, Input, Button } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

function MenuContainer() {
  return (
    <div className="MenuContaineronent">
      <Menu>
        <MenuButton as={Button}>Réservez une table !</MenuButton>
        <MenuList>
          <MenuItem>Réservez !</MenuItem>
          <MenuItem>Notre carte</MenuItem>
          <MenuItem>Faites-vous livrez !</MenuItem>
          <MenuItem>Contact</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}

export default MenuContainer;
