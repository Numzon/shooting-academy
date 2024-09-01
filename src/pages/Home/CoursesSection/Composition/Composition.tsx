import imageSmall1 from '../../../../img/composition-1-small.jpg';
import imageMedium1 from '../../../../img/composition-1-medium.jpg';
import imageSmall2 from '../../../../img/composition-2-small.jpg';
import imageMedium2 from '../../../../img/composition-2-medium.jpg';
import imageSmall3 from '../../../../img/composition-3-small.jpg';
import imageMedium3 from '../../../../img/composition-3-medium.jpg';

export const Composition = () => {
  return (
    <div className="composition">
      <img
        srcSet={`${imageSmall1} 640w, ${imageMedium1} 1920w`}
        src={imageMedium1}
        sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
        alt="First composition image"
        className=" composition__image composition__image--first"
      />
      <img
        srcSet={`${imageSmall2} 640px, ${imageMedium2} 1920w`}
        alt="Second composition image"
        sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
        className="composition__image composition__image--second"
      />
      <img
        srcSet={`${imageSmall3} 640w, ${imageMedium3} 2x 1920w`}
        alt="Third composition image"
        sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
        className="composition__image composition__image--third"
      />
    </div>
  );
};

export default Composition;
