"use client";

import { useState } from "react";

type InfoType = {
  title: string;
  body: string;
};

export function Grid() {
  return (
    <div className="flex flex-col gap-y-3">
      <Row />
      <Row />
      <Row />
    </div>
  );
}

function Row() {
  const [infoOpen, setInfoOpen] = useState(false);
  const [info, setInfo] = useState<InfoType>();
  const open = (i: InfoType) => {
    setInfoOpen((prev) => !prev);

    if (!infoOpen) setInfo(i);
  };

  return (
    <div className="m-auto w-1/2">
      <div className="flex justify-between gap-x-4">
        <GridItem callback={open} title={"grid1"} body={"grid1"} />
        <GridItem callback={open} title={"grid2"} body={"grid2"} />
        <GridItem callback={open} title={"grid3"} body={"grid3"} />
      </div>
      <Info open={infoOpen}>
        <h1 className="text-3xl">{info?.title}</h1>
        <p>{info?.body}</p>
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
    <div>
      <div
        className={`${open ? "my-3 h-48 w-full" : "h-0 w-0 overflow-hidden"} m-auto bg-neutral-300 transition-all`}
      >
        {children}
      </div>
    </div>
  );
}

function GridItem({
  callback,
  title,
  body,
}: {
  callback: (i: InfoType) => void;
  title: string;
  body: string;
}) {
  return (
    <div className="">
      <div
        className={`m-auto size-48 bg-blue-400 transition-all`}
        onClick={() => {
          callback({ title: title, body: body });
        }}
      ></div>
    </div>
  );
}

export default Grid;
