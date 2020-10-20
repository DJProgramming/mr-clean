// import React, { useGlobal } from 'reactn';
import React from 'reactn';
import './table-row.component.scss';
// import { Global } from '../../shared/store';

export const TableRow = (props: any) => {
  // const [theme] = useGlobal<Global>('theme');

  return (
    <div className={`table--row`}
    >
      <div className='service--property service--name'>
        {props.name}
      </div>
      <div className='service--property service--type'>
        {props.type}
      </div>
      <div className='service--property service--price'>
        {props.price}
      </div>
      <div className='service--property service--details'>
        {props.children}
      </div>
    </div>
  );
};
