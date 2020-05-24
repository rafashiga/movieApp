import { Result } from './Result';

export interface Search {
  page: number;
  total_results: number;
  total_pages: number;
  results: Result[];
}
