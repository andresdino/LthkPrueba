import { Component, OnInit } from '@angular/core';

import { Card, Pagination, StatusNavigation } from 'src/app/models';
import { RickAndMortyApiService } from 'src/app/services/RickAndMortyApi/rick-and-morty-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public pagination: Pagination = {
    count: 0,
    next: '',
    prev: '',
    pages: 0,
    currentPage: 1,
  };
  public isLoading = false;
  public results: Card[] = [];
  public searchText = '';

  constructor(private rickAndMortyApiService: RickAndMortyApiService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData = (newPage?: number) => {
    const { currentPage } = this.pagination;
    this.isLoading = true;

    this.rickAndMortyApiService.get(currentPage).subscribe((response) => {
      const { info, results } = response;

      const resultsMapped = results
        .map(({ name, ...rest }) => ({
          name: name.toUpperCase(),
          ...rest,
        }))
        .filter((_, idx) => idx + 1 <= 12);

      this.pagination = { ...info, currentPage: newPage ?? 1 };
      this.results = resultsMapped;
      this.isLoading = false;
    });
  };

  handleSearch = (value: string) => {
    if (typeof value === 'string') this.searchText = value;
  };

  handlePage = (type: StatusNavigation) => {
    const { currentPage } = this.pagination;
    const newCurrentPage = type === 'next' ? currentPage + 1 : currentPage - 1;

    if (typeof type === 'string') {
      this.pagination = {
        ...this.pagination,
        currentPage: newCurrentPage,
      };

      this.getData(newCurrentPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
}
