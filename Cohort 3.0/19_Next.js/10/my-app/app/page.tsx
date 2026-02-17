import ServerActionFunc from "./form.action";


export default function HomePage() {

  return <div className="flex flex-col w-full min-h-screen items-center justify-center">
    <form className="flex flex-col gap-4 w-[25vw] items-center" action={ServerActionFunc}>

      <input type="text" name="name" placeholder="Please enter your name" className="text-center px-3 py-2.5 border" />

      <input type="email" name="email" placeholder="Please enter your email" className="text-center px-3 py-2.5 border" />

      <span>
        <button type="submit" className="bg-amber-300 rounded border border-white text-black p-2">Submit</button>
      </span>

    </form>
  </div>
}