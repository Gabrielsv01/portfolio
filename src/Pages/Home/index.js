import React from 'react';
import * as Styles from './styles';
import Eu from '../../Assets/Eu.jpg'
import GitHub from '../../Assets/GitHub.svg'
import Instagram from '../../Assets/Instagram.svg'

function Home() {
  return (

    <Styles.Background>
      <Styles.Empty />
      <Styles.Curve_Container>

        <Styles.Curve>
          <Styles.Perfil>
            <img src={Eu} alt="PicturePerfil" id="MyPicture" />
            <h1>Gabriel S. Vieira</h1>
            <h2 id="Nickname">@Gabrielsv01</h2>
            <Styles.SocialNetworking>
              <a href="https://github.com/Gabrielsv01/">
                <img src={GitHub} alt="GitHub-Logo" id="GitHub" />
              </a>
              <a href="https://www.instagram.com/gabrielsv01/">
                <img src={Instagram} alt="Instagram-Logo" id="Instagram" />
              </a>
            </Styles.SocialNetworking>
            <a href="/">
              <Styles.ProjectButton >
                <h2 id="Work">Trabalhos</h2>
              </Styles.ProjectButton>
            </a>
          </Styles.Perfil>
          <Styles.Phaser>
            <p id="Phaser">"Só por que você conhece como acontece e como se faz,
            não significa que a magnificência de quem criou
            se perdeu, pelo contrário, só realçou!."</p>
            <p id="Author">~ Silva Gabriel</p>
          </Styles.Phaser>
        </Styles.Curve>

      </Styles.Curve_Container>
    </Styles.Background>
  );
}

export default Home;
