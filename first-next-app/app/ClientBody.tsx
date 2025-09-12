"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";


export default function ClientBody({
    children,
}: {
    children: React.ReactNode;
}) {
    // Remove any extension-added classes during hydration
    useEffect(() => {
        // This runs only on the client after hydration
        document.body.className = "antialiased";
    }, []);

    const queryClient = new QueryClient();

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Header />
                <div className="antialiased">{children}</div>
                <Footer />
            </QueryClientProvider>
        </>
    );
}