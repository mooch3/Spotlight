import React from 'react';
import SideDrawer from '../../components/UI/SideDrawer/SideDrawer';
import Toolbar from '../../components/UI/Toolbar/Toolbar';
import Aux from '../../Wrappers/Aux/Aux'
import Notepad from '../Notepad/Notepad';

function Layout () {

    return (
        <Aux>
            <Toolbar />
            <SideDrawer />
            <Notepad />
        </Aux>
    )
}

export default Layout;