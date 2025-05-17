'use client';

const HeaderLink: React.FC<HeaderData> = ({title, link, id}) => {
   function routeTo(link: string) {
    alert(link);
   }

  return (
    <>
      <button key={id} onClick={() => {routeTo(link)}}>{title}</button>
    </>
  )
}

type HeaderData = {
  title: string;
  link: string;
  id: number;
}

export default HeaderLink;
export type {HeaderData};