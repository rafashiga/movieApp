import { Result } from './Result';

export interface Popular {
  page: number;
  total_results: number;
  total_pages: number;
  results: Result[];
}
