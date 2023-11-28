import SearchIco from 'assets/icon-search.svg?react';
import Button from 'components/Button/Button';
import React, { useRef } from 'react';
import styles from './Search.module.scss';

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

const Search = ({ hasError, onSubmit }: SearchProps) => {
  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = searchRef.current ? searchRef.current.value : '';

    if (text) {
      onSubmit(text);
      if (searchRef.current) {
        searchRef.current.value = '';
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <div className={styles.search}>
        <label htmlFor='search' className={styles.label}>
          <SearchIco />
        </label>
        <input
          className={styles.textField}
          type='text'
          name='username'
          id='search'
          placeholder='Search GitHub username'
          ref={searchRef}
        />
        {hasError && <div className={styles.error}>No result</div>}
        <Button>Search</Button>
      </div>
    </form>
  );
};

export default Search;
