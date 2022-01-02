import React from "react";
import netflix from "../images/netflix.png";
import calculatrice from "../images/calculatrice.png";
import school from "../images/info-school.png";
import pendu from "../images/pendu.png";
import jungle from "../images/jungle.png";
import casino from "../images/casino.png";
import plusmoins from "../images/plusmoins.jpg";
import portfolio from "../images/portfolio.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css";



const Portfolio = () => {

  // Netflix
  const openPopupboxNetflix = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox mb-2" src={netflix} alt="Netflix Project..." />
        <p>Réalisation d'un espace membre comme Netflix ! Avec possibilité de s'inscrire, 
          se connecter et se déconnecter. J'ai réalisé ce projet avec PHP et MySQL !</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Bass913/Espace-Membre-Netflix.git")}>https://github.com/Bass913/Espace-Membre-Netflix.git</a>
      </>
    )
    PopupboxManager.open({ content })
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Espace Membre Netflix",
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    });
  }
    

  // Calculatrice
  const openPopupboxCalculatrice = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox mb-2" src={calculatrice} alt="Calculatrice Project..." />
        <p>Réalisation d'une calculatrice permettant les fonctionnalités de bases :
           addition, soustraction, multiplication et division. J'ai utilisé Java avec la bibliothèque AWT</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Bass913/Calculatrice-en-Java.git", "_blank")}>https://github.com/Bass913/Calculatrice-en-Java.git</a>
      </>
    )
    PopupboxManager.open({ content })
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Projet Calculatrice",
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    });
  }

  

  // InfoSchool 
  const openPopupboxSchool = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox mb-2" src={school} alt="InfoSchool Project..." />
        <p>Réalisation du site internet d'une école fictive "InfoSchool" 
          qui dispense des cours et des formations. Le site a été réalisé entièrement avec HTML et Bootstrap.</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Bass913/InfoSchool.git", "_blank")}>https://github.com/Bass913/InfoSchool.git</a>
      </>
    )
    PopupboxManager.open({ content })
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Site web Info-School",
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    });
  }

  

  // Pendu Project
  const openPopupboxPendu = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox mb-2" src={pendu} alt="Pendu Project..." />
        <p>Réalisation d'un jeu du Pendu ! Parviendra-tu a trouver le mot mystère ? Programme réalisé avec Python.
        Ce programme m'a permis d'approfondir certaines notions du langage.
        </p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Bass913/Jeu-du-pendu-Python.git", "_blank")}>https://github.com/Bass913/Jeu-du-pendu-Python.git</a>
      </>
    )
    PopupboxManager.open({ content })
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Jeu du Pendu",
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    });
  }

// Maison Jungle Project
const openPopupboxJungle = () => {
  const content = (
    <>
      <img className="portfolio-image-popupbox mb-2" src={jungle} alt="Maison Jungle Project..." />
      <p>Réalisation d'une application web présentant un site de plantes. J'ai réalisé cette application à l'aide de React.js.</p>
      <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Bass913/La-maison-jungle-Reactjs.git", "_blank")}>https://github.com/Bass913/La-maison-jungle-Reactjs.git</a>
    </>
  )
  PopupboxManager.open({ content })
  PopupboxManager.update({
    content,
    config: {
      titleBar: {
        enable: true,
        text: "La Maison Jungle : site de plantes",
      },
      fadeIn: true,
      fadeInSpeed: 500
    }
  });
}

// ZCasino Project
const openPopupboxCasino = () => {
  const content = (
    <>
      <img className="portfolio-image-popupbox mb-2" src={casino} alt="ZCasino Project..." />
      <p>Jeu du ZCasino qui va te permettre de t'enrichir ! J'ai réalisé ce programme en Python. Ce programme m'a 
        permis d'approfondir certaines notions du langage.
      </p>
      <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Bass913/ZCasino.git", "_blank")}>https://github.com/Bass913/ZCasino.git</a>
    </>
  )
  PopupboxManager.open({ content })
  PopupboxManager.update({
    content,
    config: {
      titleBar: {
        enable: true,
        text: "ZCasino, le meilleur des casinos",
      },
      fadeIn: true,
      fadeInSpeed: 500
    }
  });
}

// PlusMoins Project
const openPopupboxPlusMoins = () => {
  const content = (
    <>
      <img className="portfolio-image-popupbox mb-2" src={plusmoins} alt="Plus ou Moins Project..." />
      <p>Jeu du Plus ou Moins ! Un nombre aléatoire est généré. Le but est de trouver de quel nombre il s'agit. Le programme
        donne un indice à chaque tentative pour nous aider à le déchiffrer. Réalisé en C.
      </p>
      <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Bass913/Plus-ou-Moins-C-.git", "_blank")}>https://github.com/Bass913/Plus-ou-Moins-C-.git</a>
    </>
  )
  PopupboxManager.open({ content })
  PopupboxManager.update({
    content,
    config: {
      titleBar: {
        enable: true,
        text: "Jeu du Plus ou Moins",
      },
      fadeIn: true,
      fadeInSpeed: 500
    }
  });
}

// Portfolio Project
const openPopupboxPortfolio = () => {
  const content = (
    <>
      <img className="portfolio-image-popupbox mb-2" src={portfolio} alt="Portfolio Project..." />
      <p>En effet, le site portfolio sur lequel vous vous trouvez est l'un de mes projets. Je n'ai pas eu recours à un CMS,
         je l'ai crée from scratch en utilisant Bootstrap 5, HTML/CSS et React.js
      </p>
      <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Bass913/portfolio.git", "_blank")}>https://github.com/Bass913/portfolio.git</a>
    </>
  )
  PopupboxManager.open({ content })
  PopupboxManager.update({
    content,
    config: {
      titleBar: {
        enable: true,
        text: "Jeu du Plus ou Moins",
      },
      fadeIn: true,
      fadeInSpeed: 500
    }
  });
}


  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row row-cols-auto justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
            <img className="portfolio-image" src={netflix} alt="Netflix Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxCalculatrice}>
            <img className="portfolio-image" src={calculatrice} alt="Calculatrice Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxSchool}>
            <img className="portfolio-image" src={school} alt="InfoSchool Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxPendu}>
            <img className="portfolio-image" src={pendu} alt="Task Manager React and Redux Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
        {/* ------------------------- DEUXIEME ROW -------------------------------*/}
        <div className="image-box-wrapper row row-cols-auto justify-content-center">
        <div className="portfolio-image-box" onClick={openPopupboxJungle}>
            <img className="portfolio-image" src={jungle} alt="Maison Jungle Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxCasino}>
            <img className="portfolio-image" src={casino} alt="ZCasino Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxPlusMoins}>
            <img className="portfolio-image" src={plusmoins} alt="Plus ou Moins Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
            <img className="portfolio-image" src={portfolio} alt="Portfolio Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer />
    </div>
  )
}

export default Portfolio;