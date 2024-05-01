import { useEffect, useState, useRef } from 'react';
import styles from './Select.module.css';
import { XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

export type SelectOption = {
  label: string;
  value: string | number;
}

type SingleSelectProps = {
  multiple?: false;
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
}

type MultiSelectProps = {
  multiple: true;
  value: Array<SelectOption>;
  onChange: (value: Array<SelectOption>) => void;
}

type SelectProps = {
  options: Array<SelectOption>;
} & (SingleSelectProps | MultiSelectProps)

export default function Select({ multiple, value, onChange, options }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  function clearOptions() {
    multiple ? onChange([]) : onChange(undefined);
  }

  function selectOption(option: SelectOption) {
    if (multiple) {
      if (value?.includes(option)) {
        onChange(value.filter((o) => o !== option))
      } else {
        onChange([...value, option])
      }
    } else {
      if (option !== value) onChange(option);

    }
  }

  function isOptionSelected(option: SelectOption) {
    return multiple ? value.includes(option) : option === value;
  }

  useEffect(() => {
    if (isOpen) setHighlighted(0);
  }, [isOpen])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target !== containerRef.current) return;
      switch (e.code) {
        case 'Enter':
        case 'Space':
          setIsOpen((prev) => !prev)
          if (isOpen) selectOption(options[highlighted])
          break;
        case 'ArrowUp':
        case 'ArrowDown':
          if (!isOpen) {
            setIsOpen(true);
            break;
          }

          const newValue = highlighted + (e.code === 'ArrowDown' ? 1 : -1)
          if (newValue >= 0 && newValue < options.length) {
            setHighlighted(newValue)
          }
          break;
        case 'Escape':
          setIsOpen(false);
          break;
      }
    }

    containerRef.current?.addEventListener('keydown', handler);

    return () => {
      containerRef.current?.removeEventListener('keydown', handler);
    }
  }, [isOpen, options, highlighted])

  return (
    <div
      ref={containerRef}
      onClick={() => setIsOpen(prev => !prev)}
      onBlur={() => setIsOpen(false)}
      tabIndex={0}
      className={styles.container}
    >
      <span className={styles.value}>{multiple
        ? value.map((v) => (
          <button
            className={styles.optionBadge}
            key={v.value}
            onClick={(e) => {
              e.stopPropagation();
              selectOption(v);
            }}>
            {v.label}
            <span>
              <XMarkIcon className={styles.removeIcon} />
            </span>
          </button>))
        : value?.label}
      </span>
      <button
        className={styles.clearButton}
        onClick={(e) => {
          e.stopPropagation();
          clearOptions()
        }}
      >
        <XMarkIcon className={styles.icon} />
      </button>
      <div className={styles.divider}></div>
      <div className={styles.caret}><ChevronDownIcon className={styles.icon} /></div>
      <ul className={`${styles.options} ${isOpen ? styles.show : ''}`}>
        {options && options.map((option, index) => (
          <li
            className={`
              ${styles.option} 
              ${isOptionSelected(option) ? styles.selected : ''}
              ${index === highlighted ? styles.highlighted : ''}
            `}
            key={option.value}
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
            onMouseEnter={() => setHighlighted(index)}
          >{option.label}</li>
        ))}
      </ul>
    </div >
  );
}