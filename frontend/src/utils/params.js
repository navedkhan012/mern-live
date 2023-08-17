export const getSearchParmasInObject = (search) => {
  const searchParams = new URLSearchParams(search);
  const searchParamsObj = Object.fromEntries(searchParams);
  return searchParamsObj;
};
