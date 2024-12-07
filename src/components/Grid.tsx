"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { animeInfo } from "@/utils/types";
import { data } from "@/data";

type InfoType = {
  title: string;
  body: string;
};

export function Grid() {
  return (
    <div className="flex flex-col gap-y-3">
      <Row data={[data[0], data[1], data[2]]} />
      <Row data={[data[3], data[4], data[5]]} />
      <Row data={[data[6], data[7], data[8]]} />
    </div>
  );
}

function Row({ data }: { data: animeInfo[] }) {
  const [infoOpen, setInfoOpen] = useState({ current: 0, open: false });
  const [info, setInfo] = useState<InfoType>();

  const open = (i: InfoType, index: number) => {
    if (!infoOpen.open) {
      setInfoOpen(() => ({ current: index, open: true }));
      setInfo(i);
    } else {
      if (infoOpen.current != index) {
        setInfoOpen((prev) => ({ ...prev, current: index }));
        setInfo(i);
      } else {
        setInfoOpen((prev) => ({ ...prev, open: false }));
      }
    }
  };

  return (
    <div className="m-auto w-[60rem]">
      <div className="flex w-full flex-row justify-center gap-x-3">
        <GridItem
          callback={open}
          image={data[0].images.jpg.large_image_url}
          title={data[0].title_english}
          body={data[0].synopsis}
          index={0}
        />
        <GridItem
          callback={open}
          image={data[1].images.jpg.large_image_url}
          title={data[1].title_english}
          body={data[1].synopsis}
          index={1}
        />
        <GridItem
          callback={open}
          image={data[2].images.jpg.large_image_url}
          title={data[2].title_english}
          body={data[2].synopsis}
          index={2}
        />
      </div>
      <Info open={infoOpen.open}>
        <div className="h-full overflow-hidden">
          <img
            src={data[infoOpen.current].images.jpg.large_image_url}
            className="h-auto w-full object-cover object-center"
          />
        </div>
        <div>
          <h1 className="font-arimo font-extrabold text-3xl">{info?.title}</h1>
          <p className="font-arimo text-sm">{info?.body}</p>
        </div>
      </Info>
    </div>
  );
}

function Info({
  open,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: open ? "32rem" : 0 }}
      transition={{ duration: 0.02, ease: "easeInOut" }}
      className={`${open ? "my-4" : "overflow-hidden"} m-auto w-full overflow-hidden rounded-sm bg-neutral-300 transition-all`}
    >
      <div className="grid grid-cols-2 grid-rows-1 space-x-5 overflow-hidden h-full p-3">
        {children}
      </div>
    </motion.div>
  );
}

function GridItem({
  callback,
  image,
  title,
  body,
  index,
}: {
  callback: (i: InfoType, n: number) => void;
  image: string;
  title: string;
  body: string;
  index: number;
}) {
  return (
    <motion.div
      className={`size-64 overflow-hidden bg-blue-400 transition-all`}
      onClick={() => {
        callback({ title: title, body: body }, index);
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.02 }}
      onHoverStart={() => console.log("hover started!")}
    >
      <img src={image} className="" />
    </motion.div>
  );
}

export default Grid;
