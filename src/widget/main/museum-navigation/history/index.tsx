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
  const showMoreRef = React.useRef<HTMLParagraphElement>(null);

  React.useEffect(() => {
    showMoreRef.current?.focus();
  }, [setShowMore]);

  return (
    <article className={styles.History} aria-live="polite" aria-atomic>
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
      <div aria-live="polite" aria-atomic>
        {partIndex && showMore && (
          <p aria-atomic ref={showMoreRef}>
            {text.slice(partIndex)}
          </p>
        )}
      </div>
    </article>
  );
};
