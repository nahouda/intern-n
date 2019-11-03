import React from "react";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Logo from './logo.png';

const Header = props =>  {
    
    return(
        <div>
        <AppBar  position="static" style={{ backgroundColor: '#2196F3' }} >
            <Toolbar >
                <Typography  >
                <img src={Logo} alt="" width="100" height="50" />
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default Header;