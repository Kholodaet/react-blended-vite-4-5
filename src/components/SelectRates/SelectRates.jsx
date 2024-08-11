import Select from 'react-select';

import symbols from './symbols.json';

import styles from './SelectRates.module.css';

import './ReactSelect.css';
import { useDispatch } from 'react-redux';
import { setBaseCurrency } from 'reduxState/currencySlice';

export const SelectRates = ({ baseCurrency }) => {
  const dispatch = useDispatch();
  const handleChange = ({ value }) => {
    dispatch(setBaseCurrency(value));
  };

  return (
    <div className={styles.box}>
      <p className={styles.text}>Your base currency: {baseCurrency}</p> &nbsp;
      <Select
        className={styles.select}
        options={symbols}
        value={{
          label: baseCurrency,
          value: baseCurrency,
        }}
        onChange={handleChange}
        classNamePrefix="react-select"
        isSearchable
      />
    </div>
  );
};
