import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

type RovingRadioGroupProps = {
  id: string;
  ariaGroupCaption: string;
  onSwitch: (switchIndex: number) => void;
  radioItems: Array<{ label: string; ariaText: string; id: string }>;
};

export const RovingRadioGroup: React.FC<RovingRadioGroupProps> = ({
  id,
  ariaGroupCaption,
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
      className={styles.Roving_Radio}
      role="radiogroup"
      aria-labelledby={`roving-radio-switch${id}`}
    >
      <label
        className={styles.visually_hidden}
        htmlFor={`roving-radio-switch${id}`}
      >
        {ariaGroupCaption}
      </label>
      {radioItems.map((item, index) => (
        <React.Fragment key={item.id}>
          <div
            role="radio"
            aria-checked={checked === index}
            id={item.id}
            tabIndex={Number(checked === index) - 1}
            onKeyDown={handleRovingKey}
            onClick={() => setChecked(index)}
            ref={(div) => checked === index && div?.focus()}
            className={cn(checked === index && styles.Selected)}
          >
            {item.label}
          </div>
          <label className={styles.visually_hidden} htmlFor={item.id}>
            {item.ariaText}
          </label>
        </React.Fragment>
      ))}
    </div>
  );
};
