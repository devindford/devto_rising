export const sortList = (a, b, sortingOrder) => {
  switch (sortingOrder) {
    case 'asc': {
      return a.positive_reactions_count - b.positive_reactions_count;
    }
    case 'desc': {
      return b.positive_reactions_count - a.positive_reactions_count;
    }
    default: {
      return;
    }
  }
};

export const toJSON = (_: Response) => _.json();
