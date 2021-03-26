export const sortAscending = (data) => {
  return data.sort((a, b) => a.positive_reactions_count - b.positive_reactions_count);
};

export const sortDescending = (data) => {
  return data.sort((a, b) => a.positive_reactions_count - b.positive_reactions_count).reverse();
};
