export function sortById(list: any[] = []) {
  return list.sort((a, b) => {
    if (a.id >= 0 && b.id >= 0) {
      if (a.id > b.id) {
        return 1;
      } else if (a.id < b.id) {
        return -1;
      }
    } else {
      return 0;
    }
  });
}
