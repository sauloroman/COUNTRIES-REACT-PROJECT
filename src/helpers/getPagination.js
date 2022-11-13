export const getPagination = ( countries = [] ) => {

  let pagination = [];

  let quantityPage = Math.ceil(countries.length / 20);

  for (let page = 0; page < quantityPage; page++) {
    let initialBound = 20 * page;
    let finalBound = initialBound + 20;
    let pages = [];

    for (let i = initialBound; i < finalBound; i++) {
      countries[i] && (pages = [...pages, countries[i]]);
    }

    pagination = [...pagination, pages];
  }

  return pagination;
}