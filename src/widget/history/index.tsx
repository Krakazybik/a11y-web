import React from 'react';
import styles from './styles.module.scss';

type HistoryProps = {
  text: string;
  header: string;
  // eslint-disable-next-line react/require-default-props
  partIndex?: number;
};

export const History: React.FC<HistoryProps> = ({
  text,
  header,
  partIndex = 0,
}) => {
  const [showMore, setShowMore] = React.useState(false);

  return (
    <article className={styles.History}>
      <h3 className={styles.visually_hidden}>{header}</h3>
      <p>{partIndex ? text.slice(0, partIndex) : text}</p>
      {(partIndex && !showMore && (
        <button
          className={styles.History__ReadMore}
          type="button"
          onClick={() => setShowMore(true)}
        >
          Читать далее
        </button>
      )) ||
        ''}
      {partIndex && showMore && (
        <p aria-live="polite">{text.slice(partIndex)}</p>
      )}
    </article>
  );
};
