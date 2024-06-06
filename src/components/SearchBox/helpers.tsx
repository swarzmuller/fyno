import Calendar from "@/assets/calendar.svg?react";
import User from "@/assets/user.svg?react";

export const InputsArr = [
  {
    type: "text",
    name: "from",
    placeholder: "Where from?",
  },
  {
    type: "text",
    name: "to",
    placeholder: "Where to?",
  },
  {
    id: "date",
    type: "date",
    name: "date",
    min: new Date().toISOString().split("T")[0],
    icon: <Calendar />,
  },
  {
    id: "number",
    type: "number",
    name: "travellers",
    placeholder: "1",
    min: "1",
    max: "10",
    icon: <User />,
  },
];
