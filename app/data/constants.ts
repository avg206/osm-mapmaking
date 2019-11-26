const Actions = {
  Layers: {
    Save: null,
  },
};

const mirror = (path: string, divider: string, object: any) => {
  const keys = Object.keys(object);

  return keys.reduce((prev: Record<string, any>, curr: string): Record<string, any> => {
    const item = object[curr];
    const name = `${path}${divider}${curr}`;

    if (item instanceof Object) {
      prev[curr] = mirror(name, divider, item);
    } else {
      prev[curr] = name;
    }

    return prev;
  }, {});
};

const Constants: Record<string, any> = mirror('Actions', '.', Actions);

export default Constants;
