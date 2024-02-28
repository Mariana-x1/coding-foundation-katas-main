function filterApiData(apiData, mandatoryKeys) {
  return apiData.filter((objects) =>
    mandatoryKeys.every((key) => objects.hasOwnProperty(key))
  );
}

const dataone = [{ id: 1, price: 100 }, { price: 50 }];
const filteredDataone = filterApiData(dataone, ["id"]);
console.log(filteredDataone);
const datatwo = [
  { id: 1, price: 100 },
  { id: 2, title: "" },
  { id: 3, price: 50 },
];
const filteredDatatwo = filterApiData(datatwo, ["id", "price"]);
console.log(filteredDatatwo);
