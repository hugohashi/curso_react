import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imageData from "./carousel"

const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
      <img src={image.url} alt={image.alt} />
      <p className="legend">{image.label}</p>
    </div>
  ));

function Projects(){
    const [currentIndex, setCurrentIndex] = useState();
            
    function handleChange(index) {
        setCurrentIndex(index);
    }

    return(
        <>
        
        <p className="text">
            Veja abaixo uma pequena amostra dos muitos projetos realizados pela nossa equipa ao longo dos anos. Cada projeto apresentou os seus desafios únicos e o nosso vasto conhecimento e experiência permitiu-nos entregar com sucesso resultados de alta qualidade e satisfação dos clientes.
            <br></br><br></br>

            Estes projetos demonstram a nossa versatilidade em termos de tipos de trabalhos, dimensão dos projetos e variedade de materiais e técnicas utilizadas. Desde pequenas remodelações residenciais a grandes projetos comerciais, o nosso compromisso com a perfeição e atenção aos detalhes é sempre o mesmo.
            <br></br><br></br>

            Se está a equacionar uma remodelação, esperamos que estes exemplos o/a inspirem e demonstrem que podemos transformar a sua visão em realidade. Teremos o maior prazer em fornecer-lhe referências de clientes anteriores e discutir consigo como podemos exceder as suas expetativas.
            <br></br><br></br>

            Aguardamos a oportunidade de acrescentar o seu projeto à nossa galeria de trabalhos realizados com sucesso!
            <br></br><br></br>

        </p>
        
        <div className="carrosel">
                <Carousel
                    showArrows={true}
                    autoPlay={false}
                    infiniteLoop={true}
                    selectedItem={imageData[currentIndex]}
                    onChange={handleChange}
                    className="carousel-container">
                    {renderSlides}
                </Carousel>
        </div>
        
        </>
    )
};

export default Projects;
