import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

export default function PageContainer({
  children,
}: PageContainerProps) {
  return (
    <main className="min-h-screen bg-[#09090B] px-6 pt-36 pb-20 text-white">
      <div className="mx-auto max-w-7xl">
        {children}
      </div>
    </main>
  );
}