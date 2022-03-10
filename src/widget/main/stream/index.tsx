import React from 'react';

export const Stream: React.FC = () => (
  <section aria-labelledby="heading-stream">
    <h2 id="heading-stream">Онлайн трансляция</h2>
    <iframe
      title="Ай Вейвей: движение к общечеловеческому"
      width={1030}
      height={612}
      src="https://www.youtube.com/embed/5qRR-5H1XgU?autoplay=0"
      frameBorder={0}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      loading="lazy"
      allowFullScreen
    />
  </section>
);
