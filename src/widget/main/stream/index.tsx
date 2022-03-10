import React from 'react';
import YouTube, { Options } from 'react-youtube';
import styles from './styles.module.scss';

export const Stream: React.FC = () => {
  const [player, showPlayer] = React.useState(false);

  const opts: Options = {
    height: '612',
    width: '1030',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClickPlay = () => {
    showPlayer(true);
  };

  return (
    <section aria-labelledby="heading-stream" className={styles.Stream}>
      <h2 id="heading-stream">Онлайн трансляция</h2>

      {player ? (
        <YouTube videoId="5qRR-5H1XgU" opts={opts} />
      ) : (
        <>
          <img
            src="https://i.ytimg.com/vi/5qRR-5H1XgU/maxresdefault.jpg"
            alt=""
            width={opts.width}
            height={opts.height}
            aria-hidden
          />
          <button
            className={styles.Play}
            onClick={handleClickPlay}
            aria-labelledby="stream-play-img"
          >
            <img
              width={118}
              height={118}
              id="stream-play-img"
              src="/assets/stream/play.png"
              alt="Запустить трансляцию"
              aria-hidden
            />
          </button>
        </>
      )}
    </section>
  );
};
