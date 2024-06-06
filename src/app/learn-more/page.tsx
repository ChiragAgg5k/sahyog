import Link from "next/link";

export default function LearnMorePage() {
  return (
    <div className={`min-h-screen p-8`}>
      <h1
        className={
          "mb-6 flex flex-col items-center border-b pb-4 text-5xl font-bold text-primary sm:flex-row"
        }
      >
        <Link href={`/`} className={`mb-4 sm:mb-0`}>
          सहयोग
        </Link>
        <span className={`text-center text-xl font-light sm:text-start`}>
          - Collaborate, Communicate, Get Things Done
        </span>
      </h1>
      <p className={`text-light`}>
        Sahayog is a platform for you and your team to collaborate, communicate,
        and get things done in public. Now what does that mean? It means you can
        create spaces that anyone can see, join, and participate in. <br />
        <br />
        Think of it as like a{" "}
        <span className={`font-semibold`}>glass-walled conference room</span>.
        You can see whats going on inside from the outside, but only those with
        permission can enter and participate. <br />
      </p>
    </div>
  );
}
