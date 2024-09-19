import React from "react";
import Title from "../components/Title";
import Footer from "../components/Footer";
import AboutFooter from "../components/AboutFooter";

const About = () => {
  return (
    <div>
      <Title text="A propos de nous" />
      <p className="text-white px text-xl pt-10 px-4 sm:px-4 text-about md:m-20">
        <b>BRISES SERVICES</b> est une entreprise de conception numérique fondée
        à Bamenda dont le siège est à Douala,
        <br />
        au Cameroun. Son objectif est de servir l'humanité en fournissant le
        meilleur des services numériques facilement disponibles et abordables
        pour tous.
        <br />
        <br />
        Ils s'améliorent constamment. Quelque chose qui a commencé comme un
        passe-temps est devenu aujourd'hui une entreprise de conception et de
        production à part entière. Il a été fondé par Fakembe Divine N, un
        ingénieur logiciel qui cherche à étendre son horizon à d'autres régions
        du Cameroun ainsi qu'à l'Afrique et au monde.
        <br />
        <br />
        En tant que marque qui se distingue par son style et sa texture,
        DJAYSTUDIO rend ses services disponibles en ligne et hors ligne, avec un
        bureau numérisé. Certains de ses services prestigieux sont :<br />
        <br />
        Conception de logos (2-D, 3-D…)
        <br />
        Paroles Vidéo
        <br />
        Branding et conception d'événements
        <br />
        Flyers accrocheurs
        <br />
        Couverture cinq étoiles
        <br />
        Conception de magazines
        <br />
        Conception de carte de visite
        <br />
        Carte d'anniversaire
        <br />
        Carte de mariage
        <br />
        Conception des attestations de calendrier
        <br />
        et beaucoup plus.
        <br />
        <br />
        <b>BRISE SERVICES</b> est opérationnel depuis 2016 et peut booster plus
        de 4 ans d'expérience avec de grandes réalisations au Cameroun et sur Le
        marché créatif international. Ils ont géré des projets de conception
        pour certains des plus grands noms de l'industrie du divertissement
        camerounais comme des maisons de disques comme Akumba Music, 404 Music
        Studios, Power House Entertainment, etc., et des artistes comme X
        Maleya, KO-C, Rinyu, Blaise B, Vernyuy Tina. , MD Lyonga, Adele Clarice,
        Flosha, Snazzy Shikena entre autres. Ils font également partie de
        l'équipe de branding des prestigieux BONTEH DIGITAL MEDIA
      </p>

    <AboutFooter/>
    <Footer />
    </div>
  );
};

export default About;
