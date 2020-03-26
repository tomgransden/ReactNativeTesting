import {GET_NEXT, getOffset} from '../getOffset';

describe('getOffset', () => {
  it('If query.offset is available it returns it', () => {
    const result = getOffset({offset: 6}, false);
    expect(result).toEqual(6);
  });

  it('Should return 0 when no offset and loadMore is false', () => {
    const result = getOffset({}, false);
    expect(result).toEqual(0);
  });

  it('Should return GET_NEXT when no offset and loadMore is true', () => {
    const result = getOffset({}, true);
    expect(result).toEqual(GET_NEXT);
  });
});
