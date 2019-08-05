import React from 'react';
import { Transition } from 'react-transition-group';
import './pageIndex.css';

const PageIndex = (props) => {
  const { pageIndex } = props;
  const cn = require('classnames');

  const indexClass = cn('page-index', {
    'index-1': props.selected === '01',
    'index-0': props.selected === '00',
    'index-2': props.selected === '02',
    'index-3': props.selected === '03',
    'index-4': props.selected === '04',
    'index-5': props.selected === '05',
    'index-6': props.selected === '06',
    'index-contact': props.selected === 'Contact',
  });

  return (
    <Transition in={true} timeout={500}>
      <div className={indexClass} style={props.style}>
        {
          pageIndex.map(item => (
            props.selected === item ? (
              <a href={`#${item}`} key={item} className="index-item index__selected"><span>{item}</span></a>
            ) : (
              <a href={`#${item}`} key={item} className="index-item"><span>{item}</span></a>
            )
          ))
        }
        <div className="index-separator" />
        <a href='#Contact'
          className={props.selected === 'Contact' ? 'index__selected index-item-contact index-item' : 'index-item-contact index-item'}
        >
          <span>Contact</span>
        </a>
      </div>
    </Transition>
  );
}

export { PageIndex };