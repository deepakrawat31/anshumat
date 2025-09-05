import { Comments } from "@/types";
import { UserIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import mainImg from "../../public/first.webp";
import secImg from "../../public/second.webp";
import Accord from "../components/Accord";
import Card from "../components/Card";
import Testimonials from "../components/Testimonials";

export default async function Home() {
  const data = await fetch(
    "https://dummyjson.com/comments?limit=4&select=body,postId",
  );
  const testimony = await data.json();
  const comments: Comments = testimony.comments;

  return (
    <>
      <main className="px-4">
        <div className="bg-surface-container relative isolate flex min-h-[80dvh] flex-1 flex-col gap-8 overflow-hidden p-2">
          <h1 className="text-on-surface-container text-4xl font-bold capitalize md:text-8xl">
            making change happen
          </h1>
          <div className="bg-surface flex w-full max-w-sm flex-col gap-4 p-2 text-pretty">
            <p>
              Dedicated to empowering individuals through knowledge, mentorship,
              and career development.
            </p>
            <button className="hover:text-on-primary hover:bg-primary ring-primary w-fit cursor-pointer p-2 capitalize ring-1 transition-colors duration-300">
              get involved
            </button>
          </div>
          <Image
            src={mainImg}
            alt="Main image"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-70"
          />
        </div>
      </main>
      <section className="min-h-[80dvh] space-y-8 px-4 py-8">
        <h2 className="uppercase underline underline-offset-2">mission</h2>
        <h3 className="text-4xl md:text-8xl">Makeing real impact</h3>
        <div className="flex flex-col gap-8 md:flex-row">
          <p className="w-full max-w-lg flex-1 text-pretty">
            We strive to create opportunities that nurture talent, foster
            growth, and bridge gaps in education and employment. Through
            guidance, skill-building, and community support, we work towards a
            future where every individual has the resources and confidence to
            achieve their full potential.
          </p>
          <Accord />
        </div>
      </section>
      <section className="flex p-4">
        <div className="bg-surface-container relative isolate min-h-dvh flex-1">
          <Image
            src={secImg}
            alt="Secondary image"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-top opacity-80"
          />
        </div>
      </section>
      <section className="flex min-h-[80dvh] flex-col justify-center gap-4 px-4 py-8">
        <div className="bg-surface-container text-on-surface-container flex flex-col gap-6 p-4">
          <h2 className="uppercase underline underline-offset-2">volunteer</h2>
          <h3 className="text-4xl md:text-6xl">
            Be the change you want to see
          </h3>
          <p className="w-full max-w-lg flex-1 text-pretty">
            Your supprt can transform lives. Whether through a one-time donation
            or by joining our volunteer network, you'll be helping us create a
            brighter future for all.
          </p>
        </div>
        <Card />
      </section>
      <section className="flex min-h-[80dvh] flex-col gap-4 px-4 py-8">
        <h2 className="uppercase underline underline-offset-2">stories</h2>
        <h3 className="text-4xl md:text-6xl">Voices of Chnage</h3>
        <div className="bg-surface-container text-on-surface-container flex flex-1 flex-col items-center gap-8 p-4 md:flex-row">
          <span className="bg-surface aspect-square">
            <UserIcon className="size-92" />
          </span>
          <Testimonials comments={comments} />
        </div>
      </section>
    </>
  );
}
