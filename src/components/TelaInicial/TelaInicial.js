import axios from "axios";
import { useEffect, useState } from "react";
import CardPerfil from "../CardPerfil/CardPerfil";
import GoogleFontLoader from 'react-google-font-loader';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';


function TelaInicial() {

    const [profiles, setProfiles] = useState({})
   
    const getProfileToChoose = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leticiafelix/person`).then((response) => {
             setProfiles(response.data.profile)
         })
         .catch((erro) => {
             console.log(erro.message);
         });
    }

    useEffect(() => {
        getProfileToChoose()
     }, []);

    
    const onClickMatch = () => {
        const body = {
            choice: true,
            id: profiles.id
     }

        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leticiafelix/choose-person',body, ).then((response) => {
            console.log(response)
            getProfileToChoose()
        })
        .catch(err => {
            console.log(err);
        })
     }
  
     const onClickDescartar = () => {
        const body = {
            choice: false,
            id:profiles.id      
     }
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leticiafelix/choose-person', body)
        .then((response) => {
            console.log(response)
            getProfileToChoose()
        })
        .catch(err => {
            console.log(err);
        })
     };

  return (
    <div id='telainicial'>
        <GoogleFontLoader
          fonts={[
            { font: 'Spartan', weights: [300] },
            { font: 'Montserrat', weights: [200, 400, 700] },
          ]}
        />
        <CardPerfil profiles={profiles} />
        <div id="footer">
            <IconButton id='excluir' onClick={onClickDescartar}>
                <HighlightOffIcon style={{ fontSize: 50 }}/>
            </IconButton>
            <IconButton id='match' onClick={onClickMatch}>
                <FavoriteBorderIcon  style={{ fontSize: 50 }}/>
            </IconButton>
        </div>
       
    </div>
      
  );
}

export default TelaInicial;
