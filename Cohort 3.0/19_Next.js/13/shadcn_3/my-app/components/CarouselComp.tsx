"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"

export function CarouselComp() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
    const [length, setLength] = React.useState(10)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    React.useEffect(() => {
        setCount(length)
    }, [length])

    return (
        <div className="mx-auto">
            <div className="mb-4 flex gap-2 justify-center">
                <input
                    type="number"
                    value={length}
                    onChange={(e) => setLength(Number(e.target.value))}
                    min="1"
                    className="border px-2 py-1 rounded"
                />
                <span className="text-sm">items in carousel</span>
            </div>
            <Carousel opts={{
                align: "start",
                loop: true
            }}
                setApi={setApi} className="">
                <CarouselContent className="h-100">
                    {Array.from({ length }).map((_, index) => (
                        <CarouselItem key={index} className="basis-1/3">
                            <Card className="m-px ">
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <div className="text-muted-foreground py-2 text-center text-sm">
                Slide {current} of {count}
            </div>
        </div>
    )
}
