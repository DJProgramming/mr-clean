import React, { useGlobal } from 'reactn';
import './nav-bar.component.scss';
import { Global } from '../../App';
// import history from '../../shared/history';
// import history from '../../shared/history';
// import { Global } from '../../shared/store';

import { useHistory } from "react-router-dom";


export interface INavBarData {
  title: string;
  menuItems?: string[];
}

export interface INavLinkData {
  label: string;
  handleClick?: any;
}



export const NavBar = (props: INavBarData) => {
  const NAV_LINKS: INavLinkData[] = [
    {
      label: "Services",
      // handleClick: () => {
      //   console.log("Services");
      // }
    },
    {
      label: "Gallery",
      handleClick: () => {
        history.push('/gallery')
        console.log("Gallery");
      }
    },
    {
      label: "Contact",
      // handleClick: () => {
      //   history.push('contact')
      //   console.log("Contact");
      // }
    }
  ]

  const [theme] = useGlobal<Global>('theme');

  let history = useHistory();

  return (
    <div id='nav-bar' className={theme}>
      <div id='nav-bar--content'>
        <a href='/mr-clean' id='nav-bar--title'>{props.title}</a>
        <div id='menu-options'>
          {NAV_LINKS.map((navLink: INavLinkData) => {
            // return <span key={navLink.label} className='menu-option' onClick={navLink.handleClick}>{navLink.label}</span>
            if(navLink.handleClick) {
              return <span key={navLink.label} className='menu-option' onClick={navLink.handleClick}>{navLink.label}</span>
            }
            return <a key={navLink.label} className='menu-option' href={`/mr-clean/#${navLink.label.toLowerCase()}`}>{navLink.label}</a>
          })}
        </div>
      </div>
    </div>
  );
};
