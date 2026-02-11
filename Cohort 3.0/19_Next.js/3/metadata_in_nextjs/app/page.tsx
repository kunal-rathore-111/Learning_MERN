import Link from "next/link";




export default function HomePage() {
  return <div>
    <h1>This is the Home page and this webpage is dedicated to metaData</h1>
    <br />
    <h1 className="font-roboto">CHECKING VARIABLE AND CLASSNAME IN FONTS</h1>
    <br />
    <h1><Link href={'/react-client-server-comp'}>Navigate to react-client-server-comp</Link></h1>
  </div>
}