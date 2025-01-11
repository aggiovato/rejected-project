// Helpers para el componente Row
import {
  StyleTimeReturn,
  TimeToT1Return,
  ExtractDataReturn,
} from "../types/types";

const agents = [
  "AMB",
  "RA",
  "AR",
  "LB",
  "AO",
  "MGS",
  "PV",
  "GV",
  "GR",
  "BB",
  "FN",
];

const colors = [
  "#FFB6C1", // Light Pink
  "#FFA07A", // Light Salmon
  "#FFDAB9", // Peach Puff
  "#D8BFD8", // Thistle
];

const randomizeAgent = () => {
  return agents[Math.floor(Math.random() * agents.length)];
};

const randomizaColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const styleTime = (time: string): StyleTimeReturn | null => {
  if (!time || typeof time !== "string") {
    console.error("Invalid time format:", time);
    return null;
  }

  const [datePart, timePart] = time.split(" ");
  const [day, month, year] = datePart.split("-").map(Number);
  const [hours, minutes] = timePart.split(":").map(Number);

  const string = {
    date: `${day}/${month}/${year}`,
    time: `${hours}h:${minutes}min`,
  };
  return [day, month, year, hours, minutes, string];
};

const timeToT1 = (t1: string): TimeToT1Return => {
  const styledTime = styleTime(t1);
  if (!styledTime) {
    return {
      time: "Invalid date",
      isUrgent: false,
    };
  }
  const [day, month, year, hours, minutes] = styledTime;

  const targetDate = new Date(year, month - 1, day, hours, minutes);
  const now = new Date();

  const diffMs = targetDate.getTime() - now.getTime();

  if (diffMs <= 0) {
    return {
      time: "Passed",
      isUrgent: false,
    };
  }

  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  const isUrgent = diffHours < 48;

  let time;
  if (isUrgent) {
    const hours = diffHours;
    const minutes = diffMinutes % 60;
    time = `${hours} h | ${minutes} min`;
  } else {
    if (diffDays < 30) {
      time = `${diffDays} days`;
    } else {
      const months = Math.floor(diffDays / 30);
      time = `${months} months`;
    }
  }

  return {
    time,
    isUrgent,
  };
};

const extractData = (subject: string): ExtractDataReturn => {
  if (!subject || typeof subject !== "string") {
    return { error: "Invalid subject format" } as ExtractDataReturn;
  }

  const base_booking_url =
    "http://new.ziptransfers.com/Admin/Reservas/reservas.aspx?reserva=";

  const parts = subject?.trim().split(";");

  if (parts?.length < 5)
    throw new Error(
      "Wrong format: must have at least 5 parts separated by semicolons."
    );

  const booking_code = parts[1];
  if (!/^ZIP\d{6}[A-Z]{3}$/.test(booking_code))
    throw new Error(
      "Wrong format: booking code must be in the format 'ZIP####AAA'."
    );

  const t1 = parts[2];
  if (!t1 || !/\d{2}-\d{2}-\d{4} \d{2}:\d{2}/.test(t1))
    throw new Error(
      "Wrong format: first day transfer must be in the format 'DD-MM-YYYY HH:MM'."
    );

  const rej_supp = parts[4];
  if (!rej_supp)
    throw new Error("Wrong format: rejecting supplier is required.");

  const booking_number = booking_code.slice(3, -3);
  const booking_slice = booking_code.slice(0, -3);
  const booking_iata = booking_code.slice(9);
  const booking_url = `${base_booking_url}${booking_number}`;
  const t2 = parts[3] || null;

  return {
    booking_code,
    booking_slice,
    booking_iata,
    booking_url,
    t1: styleTime(t1)?.[5] || null,
    t2: t2 ? styleTime(t2)?.[5] || null : null,
    rej_supp,
    time_to_t1: timeToT1(t1),
    error: null,
  };
};

const validateTktNumber = (tktNumber: string): boolean => {
  if (tktNumber.length > 8) {
    throw new Error("Invalid tktNumber format: Exceeds maximum length of 8.");
  }

  if (!tktNumber.split("").every((char) => !isNaN(Number(char)))) {
    throw new Error(
      "Invalid tktNumber format: Contains non-numeric characters."
    );
  }

  return true;
};

export {
  randomizeAgent,
  randomizaColor,
  styleTime,
  timeToT1,
  extractData,
  validateTktNumber,
};
