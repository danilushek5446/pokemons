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

export type PocemonInitialType = {
  pocemonArray?: AllPockemonsResultsType[];
  count: number;
};

export type PocemonQueryType = {
  limit: number;
  offset: number;
};
