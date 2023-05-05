import Card from '../Card';
import genero from '../../public/images/Genero.jpg'
import movilidad from '../../public/images/Movilidad.jpg'
import futuroVerde from '../../public/images/FuturoVerde.jpg'
import bienestar from '../../public/images/Bienestar.jpg'




export const CardList = () => {

    const cards = [
        {
          id: 1,
          imageSrc: genero,
          alt: 'Card 1',
          title: 'Genero',
          description: 'Equidad y oportunidades',
        },
        {
          id: 2,
          imageSrc: movilidad,
          alt: 'Card 2',
          title: 'Movilidad',
          description: 'Accesibilidad y calidad',
        },
        {
          id: 3,
          imageSrc: futuroVerde,
          alt: 'Card 3',
          title: 'Futuro Verde',
          description: 'Sostenible y ecológico',
        },
        {
          id: 4,
          imageSrc: bienestar,
          alt: 'Card 4',
          title: 'Bienestar',
          description: 'una vida mejor y saludable',
        },
      ];
      
      return (
        <div>
          <h2 className="uppercase text-center text-2xl font-bold mb-8 mt-8 secondaryFont">Propuestas</h2>
          <div className="flex flex-wrap -mx-4">
            {cards.map((card) => (
              <Card  key={card.id} {...card} />
            ))}
          </div>
        </div>
      );
      
};
export default CardList
