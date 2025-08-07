import React from "react";
import "./Styles.scss";
import { Trampos } from "./Trampos";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAward } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <section className="bio">
        <div className="icon">
          <img
            src="./icon.png"
            alt="ícone que representa a Mariana, uma mulher branca de cabelos cacheados curtos, fundo lilás, desenhado pela artista Momorsa"
          />
          <div>
            <h1>Mariana Cunha</h1>
            <p>front-end developer, jornalista</p>
            <div className="redes-sociais">
              <a href="mailto:mari.marques26@gmail.com"><i>mari.marques26@gmail.com</i></a>
              <a href="https://www.linkedin.com/in/mariana--cunha/" target="_blank" rel="noopener noreferrer"><i>linkedin</i></a>
              <a href="https://github.com/mariana-cunha" target="_blank" rel="noopener noreferrer"><i>github</i></a>
              <a href="./curriculo-2025.pdf" target="_blank" rel="noopener noreferrer"><i>cv</i></a>
            </div>
          </div>
        </div>
        {/* <div className="descricao">
          <p className="bold">informação, design e programação.</p>
          <p>Clique nos cards abaixo para conhecer os meus trabalhos publicados.</p>
          <p>Adicionei um ícone <FontAwesomeIcon size="1x" alt="ícone de premiação" icon={faAward} /> nos itens que tive reconhecimento em alguma premiação. É possível que alguns links estejam disponíveis apenas para assinantes do Estadão. Também tenho o <a href="./curriculo-2025.pdf" target="_blank" rel="noopener noreferrer">currículo em PDF</a>, se precisar.
          </p>
        </div> */}
      </section>
      <section className="cards">
        <Trampos />
      </section>
      <footer>
        Mariana Cunha ≈ <a href="https://youtu.be/vXskkLrIWkE" target="_blank" rel="noopener noreferrer">vivendo a utopia de um Brasil feliz</a> em 2025
      </footer>
    </div>
  );
}

export default App;
