import TimeLineItem from "./TimeLineItem";

interface TimeLineItem {
  id: number;
  title: string;
  description: string;
}

interface TimeLineItems {
  TimeLineData: TimeLineItem[];
}

function TimeLine({ TimeLineData }: Readonly<TimeLineItems>) {
  return (
    <ul className="timeline timeline-vertical px-1">
      {TimeLineData.map((item) => (
        <TimeLineItem key={item.id} {...item} />
      ))}
    </ul>
  );
}

export default TimeLine;
