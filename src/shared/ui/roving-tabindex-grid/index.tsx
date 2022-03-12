import React, { useEffect } from 'react';
import cn from 'classnames';
import { AriaSpan } from '../aria-span';
import styles from './styles.module.scss';

type RovingTabindexGridProps = {
  id: string;
  caption: string;
  className?: string;
  onChange: (index: number) => void;
};

export const RovingTabindexGrid: React.FC<RovingTabindexGridProps> = ({
  id,
  caption,
  children,
  className,
  onChange,
}) => {
  const [checked, setChecked] = React.useState(0);
  const [childCount, setChildCount] = React.useState(0);
  const groupRefs = React.useRef<Array<HTMLLIElement | null>>([]);

  const getCyclicIndex = (index: number, modifier: number, end: number) => {
    if (index + modifier > end) return 0;
    if (index + modifier < 0) return end;
    return index + modifier;
  };

  const moveChecked = (modifier: number) => {
    const newIndex = getCyclicIndex(checked, modifier, childCount - 1);
    groupRefs.current[newIndex]?.focus();
    onChange(newIndex);
    setChecked(newIndex);
  };

  const handleRovingKey = (event: React.KeyboardEvent<HTMLLIElement>) => {
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
        // eslint-disable-next-line jsx-a11y/no-redundant-roles,jsx-a11y/no-noninteractive-element-interactions
        <li
          role="listitem"
          id={`grid-cell-${index}`}
          tabIndex={Number(checked === index) - 1}
          ref={(el) => {
            groupRefs.current[index] = el;
          }}
          onKeyDown={handleRovingKey}
        >
          {child}
        </li>
      )),
    [children, checked]
  );

  useEffect(
    () => setChildCount(childRovingNodes?.length || 0),
    [childRovingNodes?.length, setChildCount]
  );

  return (
    <>
      <AriaSpan
        id={`group-${id}`}
        text={`${caption}. Используйте клавиши стрелка влево и стрелка вправо
        для перемещения между элементами.`}
      />
      <ul
        role="group"
        aria-labelledby={`group-${id}`}
        className={cn(styles.Group, className)}
      >
        {childRovingNodes}
      </ul>
    </>
  );
};
