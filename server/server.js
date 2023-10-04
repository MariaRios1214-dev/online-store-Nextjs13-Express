const express = require("express");
const cors = require('cors');

const {
  fetchItemDetail,
  fetchItemDescription,
  fetchSearchItems,
} = require("./api/items");
const {  itemProps, author } = require("./model/items");

const app = express();
const PORT = 8080;

app.use(cors({
    origin: ['http://localhost:3000']
}));

app.get("/api/items", async (req, res) => {
  const { q } = req.query;
  const { results } = await fetchSearchItems(q);

  const listItemsResult = results.slice(0, 4).map((item) => {
    const { free_shipping } = item.shipping;

    itemProps.id = item.id;
    itemProps.title = item.title;
    itemProps.price = item.price;
    itemProps.picture = item.thumbnail;
    itemProps.condition = item.condition;
    itemProps.free_shipping = free_shipping;
    itemProps.sold_quantity = item.sold_quantity;

    return itemProps;
  });
  return res.json({
    author,
    items: [...listItemsResult],
  });
});

app.get("/api/items/:id", async (req, res) => {
  const { id } = req.params;
  const itemDetailById = await fetchItemDetail(id);
  const itemDescriptionById = await fetchItemDescription(id);
  const { pictures, shipping } = itemDetailById;

  itemProps.id = itemDetailById.id;
  itemProps.title = itemDetailById.title;
  itemProps.price = itemDetailById.price;
  itemProps.picture = pictures[0].url;
  itemProps.condition = itemDetailById.condition;
  itemProps.free_shipping = shipping.free_shipping;
  itemProps.sold_quantity = itemDetailById.sold_quantity;
  itemProps.description = itemDescriptionById.plain_text;

  res.json({author, item :itemProps});
});

app.listen(PORT, () => {
  console.log(`Server start  to port ${PORT}`);
});
