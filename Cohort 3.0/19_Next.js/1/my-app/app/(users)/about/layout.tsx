

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <div>
        <h1>HI this is the constant for all about and nested routes of about</h1>
        {/* render all the routes of about the / or the more-about and keeping the hi constant */}
        {children}

    </div>
}