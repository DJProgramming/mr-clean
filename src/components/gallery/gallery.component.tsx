import React, { useGlobal } from 'reactn';
import './gallery.component.scss';
import { Global } from '../../App';
import { IMAGE_LIST } from '../../shared/assests/gallery-list';
// import { Global } from '../../shared/store';

export const Gallery = (props: any) => {
  const [theme] = useGlobal<Global>('theme');

  return (
    <div
      id='gallery-page-component'
      className={`full--width full--height ${theme}`}
    >
      <div id='gallery-container' className='constrained-content'>
        {IMAGE_LIST.map((image: any, i) => {
          return (
            <div className='image-list--element' key={`gallery-image-${i}`}>
              <img className='gallery-image' src={image} alt=''/>
            </div>
          )
        })}
      </div>
    </div>
  );
};
