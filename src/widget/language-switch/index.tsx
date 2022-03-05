import React from 'react';
import { RovingRadioGroup } from '../../shared/roving-radio-group';

export const LanguageSwitch: React.FC = () => {
  const radios = [
    { id: 'language-switch-en', label: 'EN', ariaText: 'English' },
    { id: 'language-switch-ru', label: 'RU', ariaText: 'Русский' },
  ];

  return (
    <RovingRadioGroup
      id="language-switch"
      ariaGroupCaption="Выбор языка сайта"
      radioItems={radios}
      onSwitch={(value) => console.log(`Selected: ${value}`)}
    />
  );
};
