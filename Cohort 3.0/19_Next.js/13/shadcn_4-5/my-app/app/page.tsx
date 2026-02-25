

"use client"

import { ModeToggle } from "@/components/theme-comp";
import { Button } from "@/components/ui/button";
import { LucideFileQuestionMark } from "lucide-react";
import { toast, ToastT } from "sonner";



export default function HomePage() {

  return <div className="flex flex-col gap-10">
    HIi

    <ModeToggle></ModeToggle>
    <p className="text-customViolet">
      Hii in custom css variable
    </p>
    <p className=" dark:text-green-400 text-red-400">
      Hii in custom dark:
    </p>
    <div className="flex flex-col gap-10">
      <p className="">Click the buttons to genreate notifications- </p>
      <div className="grid md: grid-cols-6 gap-5">

        <Button onClick={() =>
          toast("hello", { position: "top-right" })
        }>Default</Button>

        <Button onClick={() =>
          toast.info("You are beautiful", { position: "top-right" })
        }>Info</Button>

        <Button onClick={() =>
          toast.warning("Danger Ahead!!", { position: "top-center" })
        }>Warning</Button>

        <Button onClick={() =>
          toast.success("Doneee!!", { position: "bottom-center" })
        }>Success</Button>

        <Button onClick={() =>
          toast.info("Are you sure", {
            description: 'On clicking Yes the form will be submitted',
            action: {
              label: "Yes",
              onClick: () => { toast.success("Form submitted", { position: "top-center", richColors: true }) }
            },
            cancel: {
              label: "No",
              onClick: () => { toast.success("Form cancelled", { position: "top-center", richColors: true }) }
            },
            position: "top-center",
            icon: <LucideFileQuestionMark className="size-5" />,
            richColors: true
          })
        }>Submit</Button>

        <Button onClick={() =>
          toast.error("Doneee!!", { position: "top-left", richColors: true })
        }>Error</Button>



      </div>
    </div>
  </div>
}
