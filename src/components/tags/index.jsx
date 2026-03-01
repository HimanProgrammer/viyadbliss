import Link from "next/link";
const Tags = ({ title }) => {
  return (
    <>
<div className="widget ltn__tagcloud-widget">
  <h4 className="ltn__widget-title ltn__widget-title-border-2">
    {title}
  </h4>
  <ul>
    <li><Link href="#">Real Estate</Link></li>
    <li><Link href="#">New Lifestyle</Link></li>
    <li><Link href="#">Second Home</Link></li>
    <li><Link href="#">Villa Projects</Link></li>
    <li><Link href="#">Corporate Benefits</Link></li>
    <li><Link href="#">Land Buying</Link></li>
    <li><Link href="#">Smart Homes</Link></li>
    <li><Link href="#">Rental Properties</Link></li>
    <li><Link href="#">Best Weekend </Link></li>
  </ul>
</div>
    </>
  );
};

export default Tags;
