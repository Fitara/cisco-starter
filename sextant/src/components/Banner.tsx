import logo from "../assets/cisco-logo.png";

interface BannerProps {
  title: string;
}

export default function Banner({ title }:BannerProps) {
  return (
    <div className='banner-container'>
      <div className='banner-wrapper'>
        <div className='banner-logo'>
          <img src={logo} alt='Logo'/>
        </div>
        <p className='banner-title'>{title}</p>
      </div>
      <div className='bg-banner'></div>
    </div>
  );
}
