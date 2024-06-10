/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import React, { useState } from 'react';
import Select, {
  ActionMeta,
  SingleValue,
  StylesConfig,
  components,
} from 'react-select';

interface DropdownOption {
  value: string;
  label: string;
}

const getDropdownStyles = (
  dropdownWidth: string | number,
  dropdownHeight: string | number,
): StylesConfig<DropdownOption, false> => ({
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: 'white',
    borderColor: isFocused ? '#313237' : '#D1D1D1',
    boxShadow: isFocused ? '0 0 0 1px #313237' : styles.boxShadow,
    '&:hover': {
      borderColor: '#89939A',
      backgroundColor: '#f7f7f7',
    },
    width: dropdownWidth,
    height: dropdownHeight,
  }),
  option: (styles, { isDisabled, isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: isDisabled
      ? undefined
      : isSelected
        ? '#FAFBFC'
        : isFocused
          ? '#FFFFFF'
          : undefined,
    color: isDisabled
      ? '#ccc'
      : isSelected || isFocused
        ? '#313237'
        : '#89939A',
    cursor: isDisabled ? 'not-allowed' : 'default',
    ':hover': {
      backgroundColor: '#f1f1f1',
    },
    ':active': {
      ...styles[':active'],
      backgroundColor: !isDisabled
        ? isSelected
          ? '#313237'
          : '#b3e0ff'
        : undefined,
    },
  }),
  input: styles => ({ ...styles }),
  placeholder: styles => ({ ...styles }),
  singleValue: styles => ({ ...styles, color: '#313237' }),
  menu: styles => ({
    ...styles,
    marginTop: 5,
    width: dropdownWidth,
  }),
  indicatorSeparator: styles => ({
    ...styles,
    visibility: 'hidden',
  }),
});

interface DropdownSelectProps {
  defaultValue?: string;
  options: string[];
  dropdownWidth?: string | number;
  dropdownHeight?: string | number;
  onChange?: (
    selectedOption: SingleValue<DropdownOption>,
    actionMeta: ActionMeta<DropdownOption>,
  ) => void;
}

const Dropdown: React.FC<DropdownSelectProps> = ({
  defaultValue,
  options,
  dropdownWidth = 'auto',
  dropdownHeight = 'auto',
  onChange,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const transformedOptions = options.map(option => ({
    value: option,
    label: option,
  }));

  const defaultOption = defaultValue
    ? transformedOptions.find(option => option.value === defaultValue)
    : undefined;

  const DropdownIndicator = (props: any) => {
    return (
      <components.DropdownIndicator {...props}>
        {isMenuOpen ? <FaChevronUp /> : <FaChevronDown />}
      </components.DropdownIndicator>
    );
  };

  return (
    <Select
      defaultValue={defaultOption}
      options={transformedOptions}
      styles={getDropdownStyles(dropdownWidth, dropdownHeight)}
      onChange={onChange}
      components={{ DropdownIndicator }}
      onMenuOpen={() => setIsMenuOpen(true)}
      onMenuClose={() => setIsMenuOpen(false)}
    />
  );
};

export default Dropdown;
