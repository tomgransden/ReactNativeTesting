export const GET_NEXT = 12;

export const getOffset = (query, loadMore) => {
  if (query.offset) {
    return query.offset;
  } else if (loadMore) {
    return GET_NEXT;
  }
  return 0;
};
