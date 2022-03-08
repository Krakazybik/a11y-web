import React, { useEffect } from 'react';
import cn from 'classnames';
import left from '../assets/left.svg';
import right from '../assets/right.svg';
import styles from './styles.module.scss';
import { ButtonIcon } from '../button-icon';

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

  return (
    <section
      className={styles.Carousel}
      aria-roledescription="carousel"
      aria-label="Highlighted television shows"
    >
      <ButtonIcon
        label="Предыдущий слайд."
        icon={left}
        className={styles.Carousel_Button_Left}
        type="button"
        onClick={() => setSelected((val) => val - 1)}
      >
        {'<'}
      </ButtonIcon>
      <ButtonIcon
        label="Следующий слайд."
        icon={right}
        className={styles.Carousel_Button_Right}
        type="button"
        onClick={() => setSelected((val) => val + 1)}
      >
        {'>'}
      </ButtonIcon>
      <div className={styles.Carousel_Card} />
      {childCarouselNodes}
    </section>
  );
};
