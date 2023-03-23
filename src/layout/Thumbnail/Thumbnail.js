import IconNext from '../../image/icon-next.svg';
import IconPrevious from '../../image/icon-previous.svg';
import ImageFirst from '../../image/image-product-1-thumbnail.jpg';
import ImageSecond from '../../image/image-product-2-thumbnail.jpg';
import ImageThird from '../../image/image-product-3-thumbnail.jpg';
import ImageFourth from '../../image/image-product-4-thumbnail.jpg';

const Thumbnail = () => {
  return (
    <section className="thumbnail">
      <div>
        <button className="thumbnail__btn--next">
          <img src={IconNext} alt="next" />
        </button>
        <button className="thumbnail__btn--previous">
          <img src={IconPrevious} alt="Previous" />
        </button>
      </div>
      <div>
        <div class="thumbnail__preview">
          {' '}
          <img class="selected" src={ImageFirst} alt="" /> <img src={ImageSecond} alt="" />{' '}
          <img src={ImageThird} alt="" /> <img src={ImageFourth} alt="" />{' '}
        </div>
      </div>
    </section>
  );
};

export default Thumbnail;
