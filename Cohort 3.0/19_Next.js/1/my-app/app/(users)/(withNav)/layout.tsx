import Navigation from "@/comps/Navigation";

export default function WithNav({ children }: { children: React.ReactNode }) {
    return <div>
        <Navigation />
        {children}
    </div>
}