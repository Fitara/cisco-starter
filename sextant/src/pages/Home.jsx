import Banner from "../components/Banner";
import Exhibit from "../components/Exhibit";

export default function Home() {
  const exhibits = [
    {
      title: 'Exhibit 1',
      children: <p>Content for Exhibit 1</p>,
    },
    {
      title: 'Exhibit 2',
      children: <p>Content for Exhibit 2</p>,
    },
    {
      title: 'Exhibit 3',
      children: <p>Content for Exhibit 3</p>,
    },
    {
      title: 'Exhibit 4',
      children: <p>Content for Exhibit 4</p>,
    },
  ];

  return (
    <div>
      <Banner />
      <Exhibit props={exhibits} />
    </div>
  );
}