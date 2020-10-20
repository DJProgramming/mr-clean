import React, { useGlobal } from 'reactn';
import './nav-bar.component.scss';
import { Global } from '../../App';
// import history from '../../shared/history';
// import { Global } from '../../shared/store';

export interface INavBarData {
  title: string;
  menuItems?: string[];
}

export interface INavLinkData {
  label: string;
  handleClick: any;
}

const NAV_LINKS: INavLinkData[] = [
  {
    label: "Services",
    handleClick: () => {
      console.log("Services");
    }
  },
  {
    label: "Gallery",
    handleClick: () => {
      console.log("Gallery");
    }
  },
  {
    label: "Contact",
    handleClick: () => {
      console.log("Contact");
    }
  }
]

export const NavBar = (props: INavBarData) => {
  const [theme] = useGlobal<Global>('theme');

  return (
    <div id='nav-bar' className={theme}>
      <div id='nav-bar--content'>
        <span id='nav-bar--title'>{props.title}</span>
        <div id='menu-options'>
          {NAV_LINKS.map((navLink: INavLinkData) => {
            // return <span key={navLink.label} className='menu-option' onClick={navLink.handleClick}>{navLink.label}</span>
          return <a className='menu-option' href={`#${navLink.label.toLowerCase()}`}>{navLink.label}</a>
          })}
        </div>
      </div>
    </div>
  );
};
