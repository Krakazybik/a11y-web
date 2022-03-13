import React, { useEffect } from 'react';
import cn from 'classnames';
import { ButtonIcon } from '../button-icon';
import styles from './styles.module.scss';

export const Carousel: React.FC = ({ children }) => {
  const [selected, setSelected] = React.useState(0);
  const [pagesCount, setPagesCount] = React.useState(0);

  const childCarouselNodes = React.useMemo(
    () =>
      React.Children.map(children, (child, index) => (
        <div
          role="group"
          aria-roledescription="slide"
          aria-label={`${selected + 1} из ${pagesCount}`}
          className={cn(
            styles.Carousel_Card,
            selected !== index && styles.Hidden
          )}
        >
          {child}
        </div>
      )),
    [children, pagesCount, selected]
  );

  useEffect(
    () => setPagesCount(childCarouselNodes?.length || 0),
    [childCarouselNodes?.length, setPagesCount]
  );

  const handleChangeSlide = (modifier: number) => {
    const resultPage = selected + modifier;
    if (resultPage >= pagesCount) setSelected(0);
    else if (resultPage < 0) setSelected(pagesCount - 1);
    else setSelected(resultPage);
  };

  return (
    <section
      className={styles.Carousel}
      aria-roledescription="carousel"
      aria-label="Афиша предстоящих событий"
      aria-live="polite"
    >
      <h2 className={styles.visually_hidden}>Афиша</h2>
      <ButtonIcon
        label="Предыдущий слайд."
        icon="/carousel/left.png"
        className={styles.Carousel_Button_Left}
        width={64}
        height={64}
        type="button"
        onClick={() => handleChangeSlide(-1)}
      >
        Предыдущий слайд.
      </ButtonIcon>
      <ButtonIcon
        label="Следующий слайд."
        icon="/carousel/right.png"
        className={styles.Carousel_Button_Right}
        width={64}
        height={64}
        type="button"
        onClick={() => handleChangeSlide(1)}
      >
        Следующий слайд.
      </ButtonIcon>
      {childCarouselNodes}
    </section>
  );
};
