import React, { useState } from 'react';
import SideDrawer from '../../components/UI/SideDrawer/SideDrawer';
import Toolbar from '../../components/UI/Toolbar/Toolbar';
import Aux from '../../Wrappers/Aux/Aux'
import Notepad from '../Notepad/Notepad';

function Layout () {
    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleSideDrawer = () => {
        setOpenDrawer(!openDrawer)
    }
    return (
        <Aux>
            <Toolbar showMenu={toggleSideDrawer} />
            <SideDrawer open={openDrawer} closeMenu={toggleSideDrawer} />
            <Notepad />
        </Aux>
    )
}

export default Layout;