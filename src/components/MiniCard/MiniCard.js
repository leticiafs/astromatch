import React from 'react';
import cx from 'clsx';
import GoogleFontLoader from 'react-google-font-loader';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';



const usePersonStyles = makeStyles(() => ({
  text: {
    fontFamily: 'Montserrat',
    textOverflow: 'ellipsis',
  },
  name: {
    fontWeight: 600,
    fontSize: '1rem',
    color: '#fff',
  },
}));


export const MiniCard = React.memo(function SocialCard(props) {
    const avatarStyles = useDynamicAvatarStyles({ size: 46 });
    const styles = usePersonStyles();
  return (
    <>
        <GoogleFontLoader
          fonts={[
            { font: 'Spartan', weights: [300] },
            { font: 'Montserrat', weights: [200, 400, 700] },
          ]}/>

        <div id='minicard'>
            <Avatar classes={avatarStyles} src={props.match.photo} />
            <div className={cx(styles.name, styles.text)}>{props.match.name} </div>
        </div>
    </>
  );
});



// function MiniCard() {

  

//     return (
//       <div id="minicard">
//          <p>Foto</p>
//          <p>Nome</p>
//       </div>
        
//     );
//   }
  
//   export default MiniCard;
  