
import * as React from 'react';
import Calendar from 'react-calendar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Text,Input, Button} from '@chakra-ui/react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react';

  import '.././App.css';


function MenuContainer() {
  const navigate = useNavigate();

  return (
    <div className="MenuContaineronent">
    <Menu>
        <MenuButton as={Button} >
            Réservez une table !
        </MenuButton>
        <MenuList>
            <MenuItem onClick={() => navigate('/')}>Réservez !</MenuItem>
            <MenuItem>Notre carte</MenuItem>
            <MenuItem>Faites-vous livrez !</MenuItem>
            <MenuItem onClick={() => navigate('/login')}>Connectez-vous</MenuItem>
            <MenuItem>Contact</MenuItem>
        </MenuList>
    </Menu>
    </div>
  );
}

export default MenuContainer;
