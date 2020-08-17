import React from 'react';

import WorkIcon from '../../assets/work.svg';
import WorldIcon from '../../assets/world.svg';

import './style.css';

export default function SearchForm() {
  return (
    <form id='search-form' className='form-inline'>
      <div className="search-form-group">
        <label htmlFor='description-input' > Job Description </label>
        <span className='fancy-border'>
          <div className='input-around'>
            <img src={WorkIcon} height='13px' alt='work icon' />
            <input id='description-input' type='text' placeholder='Filter by name, benefits, companies, expertise' />
          </div>
        </span>

      </div>

      <div className="search-form-group">
        <label> Location </label>
        <span className='fancy-border'>
          <div className='input-around'>
            <img src={WorldIcon} height='13px' alt='world icon' />
            <input type='text' placeholder='Filter by city, state, code or country' />
          </div>
        </span>
      </div>

      <div id="checkbox-field">
        <input type="checkbox" />
        <label> Full Time Only </label>
      </div>

      <button type='submit'> Search </button>

    </form>

  )
}