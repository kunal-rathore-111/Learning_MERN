"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


export default function DialogComp() {
    const [firstOpen, setFirstOpen] = useState(false)
    const [secondOpen, setSecondOpen] = useState(false)


    return (
        <>
            <Dialog
                open={firstOpen} onOpenChange={setFirstOpen}>
                <DialogTrigger asChild>
                    <Button variant="destructive">Open Dialog</Button>
                </DialogTrigger>

                <DialogContent
                    className="sm:max-w-sm transition-transform duration-700 ease-in-out data-[state=open]:rotate-0 data-[state=closed]:rotate-180"
                    showCloseButton={false}
                >
                    <DialogHeader>
                        <DialogTitle>First dialog</DialogTitle>
                        <DialogDescription>
                            Click the button below to open another dialog.
                        </DialogDescription>
                    </DialogHeader>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="secondary">Close</Button>
                        </DialogClose>

                        <Button disabled={true}
                            className="disabled:border-amber-500 border-2"
                            type="button"
                            variant={"default"}
                            onClick={() => {
                                setSecondOpen(true)
                            }}
                        >
                            Open another dialog
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <Dialog open={secondOpen} onOpenChange={setSecondOpen}>
                <DialogContent className="sm:max-w-sm">
                    <DialogHeader>
                        <DialogTitle>Second dialog</DialogTitle>
                        <DialogDescription>
                            This dialog opens only when you click the button.
                        </DialogDescription>
                    </DialogHeader>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button>Done</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
