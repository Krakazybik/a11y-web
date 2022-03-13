import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { AriaSpan } from '../aria-span';
import { ToolTip } from '../tooltip';

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
  const radioRefs = React.useRef<Array<HTMLDivElement | null>>([]);
  const [tooltip, showTooltip] = React.useState(false);

  const getCyclicIndex = (index: number, modifier: number, end: number) => {
    if (index + modifier > end) return 0;
    if (index + modifier < 0) return end;
    return index + modifier;
  };

  const moveChecked = (modifier: number) => {
    const newIndex = getCyclicIndex(checked, modifier, radioItems.length - 1);
    radioRefs.current[newIndex]?.focus();
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

  const handleClick = (index: number) => {
    setChecked(index);
    onSwitch(index);
  };

  const handleShowTooltip = (state: boolean) => {
    showTooltip(state);
  };

  return (
    <div
      id="roving-radio-group"
      className={styles.Roving_Radio}
      role="radiogroup"
      aria-labelledby={`roving-radio-switch${id}`}
      onFocus={() => handleShowTooltip(true)}
      onBlur={() => handleShowTooltip(false)}
    >
      <AriaSpan
        id={`roving-radio-switch${id}`}
        text={`${ariaGroupCaption}. Используйте клавиши стрелка влево и стрелка вправо
        для перемещения между элементами.`}
      />
      {radioItems.map((item, index) => (
        <React.Fragment key={item.id}>
          <div
            role="radio"
            aria-checked={checked === index}
            aria-labelledby={`label-${item.id}`}
            id={item.id}
            tabIndex={Number(checked === index) - 1}
            onKeyDown={handleRovingKey}
            onClick={() => handleClick(index)}
            ref={(el) => {
              radioRefs.current[index] = el;
            }}
            className={cn(checked === index && styles.Selected)}
          >
            {item.label}
          </div>
          <AriaSpan id={`label-${item.id}`} text={item.ariaText} />
        </React.Fragment>
      ))}
      {tooltip && (
        <ToolTip
          elementId="roving-radio-group"
          text="Используйте клавиши стрелка влево и стрелка вправо для перемещения между элементами."
        />
      )}
    </div>
  );
};
