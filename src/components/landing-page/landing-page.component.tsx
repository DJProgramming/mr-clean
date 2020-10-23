import React, { useGlobal } from 'reactn';
import './landing-page.component.scss';
import { Global } from '../../App';
import { TableRow } from '../../shared/components/table-row/table-row.component';
// import { Global } from '../../shared/store';

export const LandingPage = (props: any) => {
  const [theme] = useGlobal<Global>('theme');

  return (
    <div
      id='landing-page-component'
      className={`full--width full--height ${theme}`}
    >
      <div id='showcase-images--container'>
      {/* <div id='showcase-images' onClick={() => {theme === 'alt' ? setGlobal({theme: 'default'}) : setGlobal({theme: 'alt'})}}> */}
        <div id='showcase-images'>
          <img
            className='showcase-image'
            src={require('../../shared/assests/images/cover.jpg')}
            alt='clean car'
          />
        </div>
        <h2 id='landing-page--title' className='text__center'>
          Interior & Exterior Automotive Detailing
        </h2>
      </div>
      <div id={`contact-banner--${theme}`}>
        <div className='constrained-content'>
          <div id='contact-banner-content'>
            To schedule a detailing appointment or to inquire about my services,
            please contact me.
            <br />
            <br />
            <h1>Phone: 202 - 492 - 9737</h1>
          </div>
          {/* <h2 id='landing-page--title' className='text__center'>
            Interior & Exterior Automotive Detailing
          </h2> */}
        </div>
      </div>
      <div id='services'>
        <div className='constrained-content flex--column'>
          <h1 id='services-title'>Services</h1>
          <div id='services-table'>
            <TableRow class='hide--small' name='Name' type='Type' price='Price'>
              Details
            </TableRow>
            <hr />
            {/* Service #1 */}
            <TableRow
              name='Just the basics'
              type='Interior'
              price='$125'
              image={require('../../shared/assests/images/1.jpeg')}
            >
              <ul>
                <li>deep clean vacuum</li>
                <li>windows wiped down</li>
                <li>side doors and dashboard cleaned</li>
                <li>upholstery wipe down/leather cleaned</li>
                <li>center console wipe down, cup holder cleaned</li>
                <li>headliners cleaned</li>
                <li>door jamb cleaned</li>
                <li>vents cleaned</li>
                <li>steering wheel wiped down</li>
                <li>car mat cleaned</li>
                <li>crevice cleaning</li>
              </ul>
            </TableRow>
            {/* Service #2 */}
            <TableRow
              name='Just the basics'
              type='Exterior'
              price='$75'
              image={require('../../shared/assests/images/2.jpeg')}
            >
              <ul>
                <li>pre wash foam and wax </li>
                <li>vehicle is dried off</li>
                <li>tire and rim cleaning</li>
                <li>tire shine</li>
                <li>windows wiped down</li>
              </ul>
            </TableRow>
            {/* Service #3 */}
            <TableRow
              name='Covid clean out'
              type='Interior'
              price='$225'
              image={require('../../shared/assests/images/3.jpeg')}
            >
              <ul>
                <li>deep clean vacuum</li>
                <li>windows wiped down</li>
                <li>side doors and dashboard cleaned</li>
                <li>deep clean upholstery clean and shampoo*</li>
                <li>leather conditioned*</li>
                <li>center console wipe down, cup holder cleaned</li>
                <li>headliners cleaned</li>
                <li>door jamb cleaning</li>
                <li>
                  deep clean carpet shampoo (whole floor board and headliners
                  shampooed)*
                </li>
                <li>car mat pressure washed with soap*</li>
                <li>pet hair removal*</li>
                <li>some spot removal*</li>
                <li>crevice cleaning</li>
              </ul>
            </TableRow>
            {/* Service #4 */}
            <TableRow
              name='Covid clean out'
              type='Exterior'
              price='$125'
              image={require('../../shared/assests/images/4.jpeg')}
            >
              <ul>
                <li>pre wash and foam</li>
                <li>clay bar cleaned</li>
                <li>buff and wax</li>
                <li>ceramic coating</li>
                <li>windows wiped down</li>
                <li>tire and rim cleaning</li>
                <li>tire shine</li>
                <li>trunk bed cleaning</li>
                <li>engine cleaning ($35 extra)</li>
              </ul>
            </TableRow>
          </div>
          <div id='service-notes-container'>
            <div>Notes:</div>
            <ul>
              <li className='service-note'>
                All large SUV’s with a third road of seats $50 extra to the
                interior cost
              </li>
              <li className='service-note'>SUV exterior costs $25 extra</li>
              <li className='service-note'>
                All four door sedans and 2 seaters regular price as listed
              </li>
            </ul>
          </div>
          <h1 id='contact'>Contact</h1>
          <hr />
          <div className='contact-container'>
            <div className='contact-element'>
              <a
                id='instagram-link'
                className='social-media--link'
                href='https://www.instagram.com'
                target='_blank'
                rel="noopener noreferrer"
              >
                <img
                  src={require('../../shared/assests/icons/sm-icons-instagram-app-icon.png')}
                  alt='instagram'
                />
              </a>
            </div>
            <div className='contact-element'>
              <h2>Austin Burns</h2>
              <h3>202 - 492 - 9737</h3>
              <a id='email-link' href='mailto:dmvcleanmachine@gmail.com'>
                dmvcleanmachine@gmail.com
              </a>
            </div>
            <div className='contact-element'>
              <a
                id='facebook-link'
                className='social-media--link'
                href='https://www.facebook.com'
                target='_blank'
                rel="noopener noreferrer"
              >
                <img
                  src={require('../../shared/assests/icons/f_logo_RGB-Blue_512.png')}
                  alt='facebook'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
