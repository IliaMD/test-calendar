const oldDate = new Date("November 16, 2022 03:24:00");
const futureDate = new Date("December 2, 2022 22:22:22");

export const eventsList = [
  {
    start: oldDate,
    end: oldDate,
    title: "Speaking Class",
    topic: "Happiness",
    time: "09-00",
    duration: "45 minutes",
    isOver: true,
  },
  {
    start: new Date(),
    end: new Date(),
    title: "Video Lesson",
    topic: "Career",
    time: "12-00",
    duration: "60 minutes",
    isOver: false,
  },
  {
    start: futureDate,
    end: futureDate,
    title: "Listening",
    topic: "Food",
    time: "16-00",
    duration: "15 minutes",
    isOver: false,
  },
];
