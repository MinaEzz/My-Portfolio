import { RingLoader } from "react-spinners";

export default function Loading() {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="container">
        <div className="max-w-2xl m-auto flex flex-col items-center text-center gap-2">
          <RingLoader size={100} color="#27e0ab" />
          <p className="s2 text-white/80 capitalize">
            Getting things ready for you...
          </p>
        </div>
      </div>
    </section>
  );
}
