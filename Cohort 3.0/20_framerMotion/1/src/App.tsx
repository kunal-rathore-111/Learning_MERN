import ButtonComp from "./Components/Button";
import CardComp from "./Components/Card";

export default function App() {

  return <div className="min-h-screen flex flex-col gap-20  bg-black text-white items-center justify-center py-20">
    <ButtonComp />
    <CardComp />
  </div>
}