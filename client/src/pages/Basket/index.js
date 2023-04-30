import React from "react";
import { useBasket } from "../../contexts/BasketContext";
import { Link } from "react-router-dom";
import { Alert, Box, Button, Image, Text } from "@chakra-ui/react";

function Basket() {
  const { items, removeFromBasket } = useBasket();

  const total = items.reduce((acc, obj) => acc + obj.price, 0);
  return (
    <Box p="5">
      {items.length < 1 && (
        <Alert status="warning">You have not any items in your basket.</Alert>
      )}

      {items.length > 1 && (
        <>
          <ul style={{ listStyleType: "decimal" }}>
            {items.map((item) => (
              <li key={item._id} style={{ marginBottom: 15 }}>
                <Link to={`/product/${items._id}`}>
                  <Text fontSize="18">
                    {item.title}-{item.price} TL
                  </Text>
                  <Image
                    htmlHeight={200}
                    loading="lazy"
                    src={item.photos[0]}
                    alt="basket item"
                  />
                </Link>
                <Button
                  mt="2"
                  size="sm"
                  colorScheme="pink"
                  onClick={() => removeFromBasket(item._id)}
                >
                  Remove from basket
                </Button>
              </li>
            ))}
          </ul>
          <Box mt="10">
            <Text fontsize="22">Total:{total} </Text>
          </Box>
        </>
      )}
    </Box>
  );
}

export default Basket;
