export default function updateUniqueItems(mapList) {
  mapList.forEach((value, key) => {
    if (value === 1) {
      mapList.set(key, 100);
    }
  });
}
