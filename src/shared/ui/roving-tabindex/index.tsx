import React, { useEffect } from 'react';
import cn from 'classnames';
import styles from '../carousel/styles.module.scss';

export const RovingTabindex: React.FC = ({ children }) => {
  const [checked, setChecked] = React.useState(0);
  const [childCount, setChildCount] = React.useState(0);

  const getCyclicIndex = (index: number, modifier: number, end: number) => {
    if (index + modifier > end) return 0;
    if (index + modifier < 0) return end;
    return index + modifier;
  };

  const moveChecked = (modifier: number) => {
    const newIndex = getCyclicIndex(checked, modifier, childCount - 1);
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

  const childRovingNodes = React.useMemo(
    () =>
      React.Children.map(children, (child, index) => (
        <div
          id={`grid-cell-${index}`}
          tabIndex={Number(checked === index) - 1}
          ref={(div) => checked === index && div?.focus()}
          className={cn(checked === index && styles.Selected)}
        >
          {child}
        </div>
      )),
    [children, childCount, checked]
  );

  useEffect(
    () => setChildCount(childRovingNodes?.length || 0),
    [childRovingNodes?.length, setChildCount]
  );

  return <div role="group">{childRovingNodes}</div>;
};
