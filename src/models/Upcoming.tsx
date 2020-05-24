import { Result } from './Result';

export interface Dates {
  maximum: string;
  minimum: string;
}

export interface Upcoming {
  results: Result[];
  page: number;
  total_results: number;
  dates: Dates;
  total_pages: number;
}
