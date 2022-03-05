import React from 'react';
import styles from './styles.module.scss';
import { getUniqueId } from '../utils';

type RovingRadioGroupProps = {
  onSwitch: (switchIndex: number) => void;
  radioItems: Array<{ label: string; ariaText: string; id: string }>;
};

const RovingRadioGroup: React.FC<RovingRadioGroupProps> = ({
  onSwitch,
  radioItems,
}) => {
  const [checked, setChecked] = React.useState(0);

  const getCyclicIndex = (index: number, modifier: number, end: number) => {
    if (index + modifier > end) return 0;
    if (index + modifier < 0) return end;
    return index + modifier;
  };

  const moveChecked = (modifier: number) => {
    const newIndex = getCyclicIndex(checked, modifier, radioItems.length - 1);
    onSwitch(newIndex);
    setChecked(newIndex);
  };

  const handleRovingKey = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case 'ArrowLeft':
        moveChecked(-1);
        break;
      case 'ArrowRight':
        moveChecked(1);
        break;
      default:
        break;
    }
  };

  return (
    <div
      className={styles.Language_Switch}
      role="radiogroup"
      aria-labelledby={getUniqueId('roving-radio-switch')}
    >
      {radioItems.map((item, index) => (
        <React.Fragment key={item.id}>
          <div
            role="radio"
            aria-checked={checked === index}
            id={getUniqueId(item.id)}
            tabIndex={Number(checked === index) - 1}
            onKeyDown={handleRovingKey}
            ref={(div) => checked === index && div?.focus()}
          >
            {item.label}
          </div>
          <label
            className={styles.visually_hidden}
            htmlFor={getUniqueId(item.id)}
          >
            {item.ariaText}
          </label>
        </React.Fragment>
      ))}
    </div>
  );
};

export const LanguageSwitch: React.FC = () => {
  const radios = [
    { id: 'language-switch-en', label: 'EN', ariaText: 'English' },
    { id: 'language-switch-ru', label: 'RU', ariaText: 'Русский' },
  ];

  return (
    <RovingRadioGroup
      radioItems={radios}
      onSwitch={(val) => console.log(val)}
    />
  );
};
