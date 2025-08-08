import { motion } from "motion/react";
import React, { useRef, MouseEvent } from "react";
import { useTranslations } from "next-intl";

const Roadmap = () => {
  const t = useTranslations();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);

  const handleMouseDown = (e: MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <main id="roadmap" className="bg-white py-[100px]">
      <section className="container mx-auto max-w-[88rem] lg:px-8 flex flex-col items-start justify-start gap-[100px]">
        <p className="text-primary text-center w-full text-[32px] md:text-[64px] font-bold leading-[125%] uppercase">
          {t("roadMap.heading")}
        </p>
        <div
          ref={scrollRef}
          className="w-full overflow-x-auto custom-scrollbar cursor-grab active:cursor-grabbing"
          style={{
            scrollbarWidth: "thin",
            msOverflowStyle: "none",
            userSelect: "none",
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
        >
          <div className="min-w-[1500px] h-auto pt-[120px] pb-[150px]">
            <div className="w-full h-[11px] bg-secondary/10 rounded-[10px] relative my-[200px]">
              <div className="w-[55%] h-full bg-primary/20 rounded-[10px]" />

              <RoadmapItemTop
                index={1}
                title={t("roadMap.itemTop1Title")}
                date={t("roadMap.itemTop1Date")}
                className="left-[0%]"
              />
              <RoadmapItemTop
                index={3}
                title={t("roadMap.itemTop3Title")}
                date={t("roadMap.itemTop3Date")}
                className="left-[11%]"
              />
              <RoadmapItemTop
                index={5}
                title={t("roadMap.itemTop5Title")}
                date={t("roadMap.itemTop5Date")}
                className="left-[29%]"
              />
              <RoadmapItemTop
                index={7}
                title={t("roadMap.itemTop7Title")}
                date={t("roadMap.itemTop7Date")}
                className="left-[48%]"
              />
              <RoadmapItemTop
                index={9}
                title={t("roadMap.itemTop9Title")}
                date={t("roadMap.itemTop9Date")}
                className="left-[68%]"
                isGray={true}
              />
              <RoadmapItemTop
                index={11}
                title={t("roadMap.itemTop11Title")}
                date={t("roadMap.itemTop11Date")}
                className="left-[88%]"
                isGray={true}
              />

              <RoadmapItemBottom
                index={2}
                title={t("roadMap.itemBottom2Title")}
                date={t("roadMap.itemBottom2Date")}
                className="left-[3%]"
              />
              <RoadmapItemBottom
                index={4}
                title={t("roadMap.itemBottom4Title")}
                date={t("roadMap.itemBottom4Date")}
                className="left-[20%]"
              />
              <RoadmapItemBottom
                index={6}
                title={t("roadMap.itemBottom6Title")}
                date={t("roadMap.itemBottom6Date")}
                className="left-[38%]"
              />
              <RoadmapItemBottom
                index={8}
                title={t("roadMap.itemBottom8Title")}
                date={t("roadMap.itemBottom8Date")}
                className="left-[55%]"
              />
              <RoadmapItemBottom
                index={10}
                title={t("roadMap.itemBottom10Title")}
                date={t("roadMap.itemBottom10Date")}
                className="left-[74%]"
                isGray={true}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Roadmap;

const RoadmapItemTop = ({
  index,
  className,
  title,
  date,
  isGray = false,
}: {
  index: number;
  className?: string;
  title: string;
  date: string;
  isGray?: boolean;
}) => {
  // Split title by new line for bullet list rendering
  const lines = title.split("\n").filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 5 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`absolute bottom-0 translate-y-[5px] flex flex-col items-center justify-start ${className}`}
    >
      <div
        className={`w-[1px] h-[96px]  ${
          isGray ? "bg-[#DFE9EE]" : "bg-primary"
        }`}
      ></div>
      <div
        className={`w-[20px] h-[20px] rounded-full border border-solid border-black ${
          isGray ? "bg-[#DFE9EE]" : "bg-primary"
        }`}
      />

      <div className="w-[240px] h-auto rounded-lg absolute top-0 left-[20px] -translate-y-[80%] flex flex-col items-start gap-2 px-2 md:px-5 py-[10px] md:py-[20px] text-left bg-primary text-secondary text-[12px] md:text-[16px] font-normal leading-[24px]">
        {lines.map((line, i) => (
          <p key={i} className="text-secondary">
            {line.trim()}
          </p>
        ))}
        <p className="text-[#000] text-[16px] md:text-[24px] font-normal leading-[15px] tracking-normal mt-2">
          {date}
        </p>
      </div>
    </motion.div>
  );
};

const RoadmapItemBottom = ({
  index,
  className,
  title,
  date,
  isGray = false,
}: {
  index: number;
  className?: string;
  title: string;
  date: string;
  isGray?: boolean;
}) => {
  const lines = title.split("\n").filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: -5 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`absolute top-0 -translate-y-[5px] flex flex-col items-center justify-start ${className}`}
    >
      <div
        className={`w-[20px] h-[20px] rounded-full border border-solid border-black ${
          isGray ? "bg-[#DFE9EE]" : "bg-primary"
        }`}
      />
      <div
        className={`w-[1px] h-[96px]  ${
          isGray ? "bg-[#DFE9EE]" : "bg-primary"
        }`}
      ></div>
      <div className="w-[230px] h-auto rounded-lg absolute bottom-0 left-[20px] translate-y-[80%] flex flex-col items-start gap-2 px-2 md:px-5 py-[10px] md:py-[20px] text-left bg-primary text-secondary text-[12px] md:text-[16px] font-normal leading-[24px]">
        {lines.map((line, i) => (
          <p key={i} className="text-secondary">
            {line.trim()}
          </p>
        ))}
        <p className="text-[#000] text-[16px] md:text-[24px] font-normal leading-[15px] tracking-normal mt-2">
          {date}
        </p>
      </div>
    </motion.div>
  );
};
