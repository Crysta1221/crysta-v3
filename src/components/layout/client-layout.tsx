"use client";

import { LoadingScreen } from "@/components/ui/loading-screen";
import { useLoading } from "@/hooks/useLoading";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export const ClientLayout = ({ children }: ClientLayoutProps) => {
  const { isLoading, progress } = useLoading(3000);

  return (
    <>
      <LoadingScreen isLoading={isLoading} progress={progress} />
      {!isLoading && children}
    </>
  );
};
