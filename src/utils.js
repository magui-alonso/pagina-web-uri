export const extractSliceData = (data, sliceType) => {
  return data.body
    .filter((slice) => slice.slice_type === sliceType)
    .reduce((all, slice) => [...all, ...slice.items], []);
};
