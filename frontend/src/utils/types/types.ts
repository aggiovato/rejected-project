/****************************************************************
 * HELPERS TYPES
 ****************************************************************/

export type StyleTimeReturn = [
  number,
  number,
  number,
  number,
  number,
  { date: string; time: string } | null
];

export type TimeToT1Return = {
  time: string;
  isUrgent: boolean;
};

export type ExtractDataReturn = {
  booking_code: string;
  booking_slice: string;
  booking_iata: string;
  booking_url: string;
  t1: { date: string; time: string } | null;
  t2: { date: string; time: string } | null;
  rej_supp: string;
  time_to_t1: TimeToT1Return;
  error: string | null;
};

/****************************************************************
 * TABLE TYPES
 ****************************************************************/

export type TableTktType = {
  agent: string;
  agentColor: string;
  tktNumber: string;
  subject: string;
  booking: string | null;
  t1: string | null;
  rejSupp: string | null;
  dtt: string | null;
  actions: string | null;
  tags: string | null;
};

/****************************************************************
 * TYPE TOAST
 ****************************************************************/
export type ToastType = {
  id: number;
  message: string;
  type: "success" | "error";
};

export type ToastContextType = {
  addToast: (message: string, type?: "success" | "error") => void;
};
