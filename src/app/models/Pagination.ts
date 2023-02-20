export interface Pagination {
  count: number;
  next: string | null;
  prev: string | null;
  pages: number;
  currentPage: number;
}

export type StatusNavigation = 'prev' | 'next';
