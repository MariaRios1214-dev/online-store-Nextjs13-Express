const express = require("express");
const cors = require('cors');

const {
  fetchItemDetail,
  fetchItemDescription,
  fetchSearchItems,
} = require("./api/items");
const { itemProps, author } = require("./model/items");

const app = express();
const PORT = 8080;
const configOrigin = ['http://localhost:3000']

app.use(cors({
  origin: configOrigin
}));

app.get("/api/items", async (req, res) => {
  const { q } = req.query;
  const { results } = await fetchSearchItems(q);

  const listItemsResult = []
  results.map((item) => {
    if (item) {
      const { free_shipping } = item.shipping;
      const { city_name, state } = item.address;

      itemProps.id = item.id;
      itemProps.title = item.title;
      itemProps.price = item.price;
      itemProps.picture = item.thumbnail;
      itemProps.condition = item.condition;
      itemProps.freeShipping = free_shipping;
      itemProps.soldQuantity = item.sold_quantity;
      itemProps.address.cityName = city_name;
      itemProps.address.state = state;
      listItemsResult.push({ ...itemProps });
    }
  });
  return res.json({
    author,
    items: listItemsResult.slice(0, 4)
  });
});

app.get("/api/items/:id", async (req, res) => {
  const { id } = req.params;
  const itemDetailById = await fetchItemDetail(id);
  const itemDescriptionById = await fetchItemDescription(id);
  if (itemDetailById) {

    const { pictures, shipping, seller_address } = itemDetailById;
    const { city, state } = seller_address

    itemProps.id = itemDetailById.id;
    itemProps.title = itemDetailById.title;
    itemProps.price = itemDetailById.price;
    itemProps.picture = pictures[0].url;
    itemProps.condition = itemDetailById.condition;
    itemProps.freeShipping = shipping.free_shipping;
    itemProps.soldQuantity = itemDetailById.sold_quantity;
    itemProps.address.cityName = city.name;
    itemProps.address.state = state.name;
    itemProps.description = itemDescriptionById.plain_text;

    res.json({ author, item: itemProps });
  }
});

app.listen(PORT, () => {
  console.log(`Server start  to port ${PORT}`);
});
