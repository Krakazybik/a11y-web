import React from 'react';
import { Helmet } from 'react-helmet';
import { RovingRadioGroup } from '../../shared/ui/roving-radio-group';

export const LanguageSwitch: React.FC = () => {
  const [lang, setLang] = React.useState('ru');

  const radios = [
    { id: 'language-switch-ru', label: 'RU', ariaText: 'Русский' },
    { id: 'language-switch-en', label: 'EN', ariaText: 'English' },
  ];

  const handleSwitch = (value: number) => {
    setLang(!value ? 'ru' : 'en');
  };

  return (
    <>
      <Helmet htmlAttributes={{ lang }} />
      <RovingRadioGroup
        id="language-switch"
        ariaGroupCaption="Выбор языка сайта"
        radioItems={radios}
        onSwitch={handleSwitch}
      />
    </>
  );
};
