export type FetchAllPocemonsType = {
  count: number;
  next?: string;
  previous?: string;
  results: AllPockemonsResultsType[];
};

export type AllPockemonsResultsType = {
  name: string;
  url: string;
};
