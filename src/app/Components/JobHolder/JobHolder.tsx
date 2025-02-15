import Image from "next/image";

interface Props {
  Job: {
    title: string;
    technology: string;
    src: string;
  };
}

export default function JobHodler(props: Props) {
  return (
    <div className="flex flex-col justify-center items-center gap-2 md:text-2xl 2xl:gap-12">
      <div>
        <h1>{props.Job.title}</h1>
      </div>
      <div className="relative size-48 md:size-[400px] lg:w-[650px] 2xl:w-[1000px]">
        <Image src={props.Job.src} alt="" fill className="rounded-xl" />
      </div>
      <div>
        <p>{props.Job.technology}</p>
      </div>
    </div>
  );
}
