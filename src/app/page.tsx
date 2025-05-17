import { BrowserRouter } from "react-router";
import HeaderLink from "./header/HeaderLink";
import { HeaderData } from "./header/HeaderLink";

export default function EcommerceApp() {
  return (
    <>
      <BrowserRouter>
      {/* TODO: add routes */}
        <Header/>
      </BrowserRouter>
    </>
  );
}

function Header() {
  const headerLinksData = [
    {title: 'Collections', link: 'collections', id: 1},
    {title: 'Men', link: 'men', id: 2},
    {title: 'Women', link: 'women', id: 3},
    {title: 'About', link: 'about', id: 4},
    {title: 'Contact', link: 'contact', id: 5},
];
  const links = headerLinksData.map((linkData: HeaderData) => 
    <HeaderLink key={linkData.id} title={linkData.title} link={linkData.link} id={linkData.id}></HeaderLink>
  );
  return (
    <>
      <div id="header-links">
        {links}
      </div>
    </>
    
  )
}

