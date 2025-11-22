import React, { useEffect, useRef, useState } from "react"

export default function App() {

    const [messages, setMessages] = useState<string[]>([]);
    const [roomCount, updateRoomCount] = useState<number>(0);
    const [currentRoom, setCurrentRoom] = useState<number | null>(null);
    const mssgRef = useRef<HTMLInputElement | null>(null);
    const wsRef = useRef<WebSocket | null>(null);

    function sendMessage() {
        const message = mssgRef?.current?.value;
        if (message) {
            const m = {
                type: 'chat',
                payload: {
                    roomId: currentRoom,
                    message
                }
            }
            wsRef?.current?.send(JSON.stringify(m));
            alert('Message sent');

        }
        else {
            alert("Message is empty");
        }
    }

    function ButtonComp({ id }: { id: number }) {

        function getToRoom(id: number) {
            setCurrentRoom(id);
            setMessages([]); // Clear messages when switching rooms
            const message = {
                type: 'join',
                payload: {
                    roomId: id
                }
            }
            wsRef?.current?.send(JSON.stringify(message));
        }

        const isActive = currentRoom === id;

        return (
            <button
                onClick={() => { getToRoom(id) }}
                className={`w-full sm:w-auto px-5 sm:px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${isActive
                    ? 'bg-gray-700 text-gray-100 border-2 border-gray-600 shadow-xl'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                    }`}
            >
                Room {id}
            </button>
        );
    }

    useEffect(() => {
        const ws = new WebSocket(`ws://${window.location.hostname}:8080/`);
        wsRef.current = ws;
        ws.onmessage = (e) => {
            const stringRes = e?.data.toString();
            const jsonRes = JSON.parse(stringRes);
            if (jsonRes?.type == 'chat') {
                setMessages(prev => [...prev, jsonRes?.message]);
            }
            if (jsonRes?.type == 'count') {
                updateRoomCount(jsonRes?.count);
            }
        }
        // function for removing the connection on page close or reload
        function handleClose() {
            ws.close();
        }

        window.addEventListener('beforeunload', handleClose);// calling handleClose when the window loads and close

        return () => {
            window.removeEventListener('beforeunload', handleClose);
        }

    }, []);

    function Footer() {
        return (
            <footer className="w-full bg-gray-900 border-t border-gray-800">
                <div className="max-w-6xl mx-auto px-4 py-6 text-center">
                    <p className="text-gray-400 text-sm">
                        This chat app transmits messages in real time and does not log or store any data.
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                        The developer has no access to past messages or user information.
                    </p>
                    <p className="text-gray-500 text-xs mt-2">
                        For legal or compliance inquiries only: <a className="text-gray-300 hover:text-gray-100 underline underline-offset-4" href="mailto:your@email.com">your@email.com</a>
                    </p>
                </div>
            </footer>
        );
    }

    return (
        <div className="min-h-screen w-screen bg-gray-950 flex flex-col ">

            <InstructionComp />

            <main className="flex-1 flex flex-col lg:flex-row items-stretch lg:items-start justify-center gap-6 sm:gap-8 px-4 py-6 sm:p-8 max-w-7xl mx-auto w-full ">
                {/* Room Selection Sidebar */}
                <section className="flex flex-col gap-4 bg-gray-900 border border-gray-800 rounded-2xl p-4 sm:p-6 shadow-2xl w-full sm:w-80 lg:w-64 flex-shrink-0">
                    <h2 className="text-gray-100 font-bold text-xl mb-2 text-center">Select Room</h2>
                    <ButtonComp id={1} />
                    <ButtonComp id={2} />
                    <ButtonComp id={3} />
                </section>

                {/* Chat Section */}
                <section className="flex flex-col h-[75vh] sm:h-[80vh] lg:h-[85vh] w-full min-w-0 bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-gray-800 border-b border-gray-700 px-4 sm:px-6 py-4 flex justify-between items-center">
                        <h1 className="text-gray-100 font-bold text-xl sm:text-2xl truncate">Chat Room {currentRoom || '—'}</h1>
                        <div className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-full">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-gray-100 font-semibold text-sm">{roomCount} Online</span>
                        </div>
                    </div>

                    {/* Messages Container */}
                    <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-3 bg-gray-950">
                        {messages.length === 0 ? (
                            <div className="h-full flex items-center justify-center text-gray-500 text-lg">
                                No messages yet. Start the conversation!
                            </div>
                        ) : (
                            messages.map((m, idx) => (
                                <div
                                    key={idx}
                                    className="bg-gray-800 w-full max-w-full px-4 py-3 rounded-xl border border-gray-700 hover:bg-gray-750 transition-all duration-200 overflow-hidden"
                                >
                                    <p className="text-gray-100 break-words whitespace-pre-wrap overflow-hidden">
                                        {m}
                                    </p>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Input Section */}
                    <div className="bg-gray-800 border-t border-gray-700 p-4 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                        <input
                            className="flex-1 px-4 py-3 rounded-xl bg-gray-900 border-2 border-gray-700 focus:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all duration-200 text-gray-100 placeholder-gray-500"
                            type="text"
                            ref={mssgRef}
                            placeholder="Type your message..."
                        />
                        <button
                            onClick={sendMessage}
                            className="bg-gray-700 hover:bg-gray-600 text-gray-100 font-semibold px-4 sm:px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2 w-full sm:w-auto justify-center"
                        >
                            <span>Send</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}


const InstructionComp = () => {

    const [doesAccept, setAccept] = useState<boolean>(false);
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    if (doesAccept) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 ">
            {/* background */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm"></div>

            {/* MAIN*/}
            <div className="relative bg-gray-900 border-2 border-gray-700 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-scroll">
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-100">Terms of Service & Disclaimer</h2>
                                <p className="text-sm text-gray-400">Please read carefully before using this service</p>
                            </div>
                        </div>
                    </div>

                    {/* Scrollable Content */}
                    <div
                        className="flex-1 overflow-y-auto px-6 py-4 space-y-4 text-gray-300"
                        onScroll={(e) => setScrollPosition(e.currentTarget.scrollTop)}
                    >
                        {/* Important Warning */}
                        <div className="bg-red-900/20 border border-red-700 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <h3 className="font-bold text-red-400 mb-1">IMPORTANT NOTICE</h3>
                                    <p className="text-sm text-gray-300">By using this platform, you acknowledge and agree to the following terms.</p>
                                </div>
                            </div>
                        </div>

                        {/* No Data Storage */}
                        <div className="space-y-2">
                            <h3 className="font-semibold text-gray-100 flex items-center gap-2">
                                <span className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs">1</span>
                                No Data Storage or Retention
                            </h3>
                            <p className="text-sm text-gray-400 pl-8">
                                This platform operates as a <strong className="text-gray-300">real-time relay service only</strong>. We do NOT store, record, log, or retain any messages, user data, IP addresses, or any information transmitted through this service. All messages are relayed in real-time and are immediately discarded after transmission.
                            </p>
                        </div>

                        {/* User Responsibility */}
                        <div className="space-y-2">
                            <h3 className="font-semibold text-gray-100 flex items-center gap-2">
                                <span className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs">2</span>
                                User Responsibility & Conduct
                            </h3>
                            <p className="text-sm text-gray-400 pl-8">
                                You are <strong className="text-gray-300">solely responsible</strong> for all content you transmit through this platform. You agree NOT to:
                            </p>
                            <ul className="text-sm text-gray-400 pl-12 space-y-1 list-disc">
                                <li>Share illegal, harmful, threatening, abusive, or obscene content</li>
                                <li>Transmit hate speech, harassment, or discriminatory messages</li>
                                <li>Share personal information of others without consent</li>
                                <li>Engage in any illegal activities or coordinate unlawful acts</li>
                                <li>Distribute malware, viruses, or malicious code</li>
                                <li>Violate any local, national, or international laws</li>
                            </ul>
                        </div>

                        {/* Developer Disclaimer */}
                        <div className="space-y-2">
                            <h3 className="font-semibold text-gray-100 flex items-center gap-2">
                                <span className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs">3</span>
                                Complete Liability Disclaimer
                            </h3>
                            <p className="text-sm text-gray-400 pl-8">
                                The developer, owner, and operator of this platform <strong className="text-gray-300">bears NO responsibility or liability</strong> for:
                            </p>
                            <ul className="text-sm text-gray-400 pl-12 space-y-1 list-disc">
                                <li>Any content transmitted by users through this service</li>
                                <li>Any illegal, harmful, or offensive messages shared by users</li>
                                <li>Any damages, losses, or legal consequences arising from use of this service</li>
                                <li>Any disputes, conflicts, or issues between users</li>
                                <li>Any misuse, abuse, or unlawful use of this platform by any party</li>
                            </ul>
                        </div>

                        {/* No Monitoring */}
                        <div className="space-y-2">
                            <h3 className="font-semibold text-gray-100 flex items-center gap-2">
                                <span className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs">4</span>
                                No Monitoring or Moderation
                            </h3>
                            <p className="text-sm text-gray-400 pl-8">
                                This service is provided "AS IS" with <strong className="text-gray-300">no monitoring, moderation, or content filtering</strong>. The developer does not and cannot monitor, review, or control user-generated content.
                            </p>
                        </div>

                        {/* Legal Compliance */}
                        <div className="space-y-2">
                            <h3 className="font-semibold text-gray-100 flex items-center gap-2">
                                <span className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs">5</span>
                                Legal Compliance
                            </h3>
                            <p className="text-sm text-gray-400 pl-8">
                                Users must comply with all applicable laws. The developer will cooperate with law enforcement if legally required, but <strong className="text-gray-300">cannot provide historical data</strong> as none is stored. You acknowledge that your use of this service is at your own risk.
                            </p>
                        </div>

                        {/* No Warranty */}
                        <div className="space-y-2">
                            <h3 className="font-semibold text-gray-100 flex items-center gap-2">
                                <span className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs">6</span>
                                No Warranty or Guarantee
                            </h3>
                            <p className="text-sm text-gray-400 pl-8">
                                This service is provided <strong className="text-gray-300">without any warranties</strong> of any kind, express or implied. The developer makes no guarantees regarding availability, reliability, security, or fitness for any purpose.
                            </p>
                        </div>

                        {/* Indemnification */}
                        <div className="space-y-2">
                            <h3 className="font-semibold text-gray-100 flex items-center gap-2">
                                <span className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs">7</span>
                                Indemnification
                            </h3>
                            <p className="text-sm text-gray-400 pl-8">
                                You agree to <strong className="text-gray-300">indemnify and hold harmless</strong> the developer from any claims, damages, losses, liabilities, and expenses arising from your use of this service or violation of these terms.
                            </p>
                        </div>

                        {/* Final Agreement */}
                        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 mt-4">
                            <p className="text-sm text-gray-300">
                                <strong className="text-gray-100">By clicking "Accept & Continue"</strong>, you confirm that you have read, understood, and agree to be bound by these terms. You acknowledge that you are using this service entirely at your own risk and that the developer has no liability for your actions or the actions of other users.
                            </p>
                        </div>
                    </div>

                    {/* Footer Buttons */}
                    <div className="bg-gray-800 border-t border-gray-700 px-6 py-4 flex gap-3">
                        <button
                            onClick={() => window.close()}
                            className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-600 text-gray-300 font-semibold hover:bg-gray-700 transition-all duration-200"
                        >
                            Decline & Exit
                        </button>
                        <button
                            onClick={() => setAccept(true)}
                            className="flex-1 px-4 py-3 rounded-xl bg-gray-700 hover:bg-gray-600 text-gray-100 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Accept & Continue</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
