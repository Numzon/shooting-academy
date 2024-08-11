import imageSmall1 from '../../../../img/composition-1-small.jpg';
import imageSmall2 from '../../../../img/composition-2-small.jpg';
import imageSmall3 from '../../../../img/composition-3-small.jpg';

export const Composition = () => {
  return (
    <div className="composition">
      <img
        src={imageSmall1}
        alt="First composition image"
        className=" composition__image composition__image--first"
      />
      <img
        src={imageSmall2}
        alt="Second composition image"
        className="composition__image composition__image--second"
      />
      <img
        src={imageSmall3}
        alt="Third composition image"
        className="composition__image composition__image--third"
      />
    </div>
  );
};

export default Composition;
