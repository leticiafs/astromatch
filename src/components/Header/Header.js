import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Header = (props) => {

  const mudarIcon = () =>{
    if (props.tela === false) {
      return <FavoriteIcon onClick={props.onClickMudarTela} edge="start" color="inherit" aria-label="menu" />
    } else if (props.tela === true){
      return <MenuIcon onClick={props.onClickMudarTela} />

    }
  }

    return(
      <div>
        <AppBar id="barra" position="static">
          <Toolbar variant="regular">
         
            <Typography id="tituloapp" variant="h6" color="#0000">
              astroMatch
            </Typography>
            {mudarIcon()}
          </Toolbar>
        </AppBar>
      </div>

);
}

export default Header;