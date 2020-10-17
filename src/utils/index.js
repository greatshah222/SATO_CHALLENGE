export const findById = (id, items) => {
  let result = items.find(item => item.id === id);

  if (!result) {
    items.forEach(item => {
      if (item.items) {
        result = findById(id, item.items);
      }
    });
  }
  return result;
};

export const findParentById = (id, node) => {
  let result;
  if (node.items && node.items.findIndex(item => item.id === id) >= 0) {
    result = node;
  }

  if (!result && node.items) {
    for (let i = 0; i < node.items.length; i++) {
      const parent = findParentById(id, node.items[i]);
      if (parent) {
        result = parent;
        break;
      }
    }
  }

  return result;
};

export const clone = src => Object.assign({}, src);
