"use client";
import ReactQueryProvider from "./react-query-provider/ReactQueryProvider";
import StoreProvider from "./StoreProvider";

export default function RootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ReactQueryProvider>
        <StoreProvider>{children}</StoreProvider>
      </ReactQueryProvider>
    </>
  );
}
