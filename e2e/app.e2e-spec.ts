import { SearchMoviesPage } from './app.po';

describe('search-movies App', () => {
  let page: SearchMoviesPage;

  beforeEach(() => {
    page = new SearchMoviesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
