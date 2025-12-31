"use client";
import ReactQueryProvider from "./react-query-provider/ReactQueryProvider";

export default function RootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </>
  );
}
