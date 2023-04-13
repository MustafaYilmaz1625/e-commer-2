import React from 'react'
import {  Grid } from "@chakra-ui/react";
import { useQuery } from "react-query";
import Card from "../../components/Navbar/Card";
import { fetchProductList } from '../../api';

function Products() {
  const { isLoading, error, data } = useQuery("products", fetchProductList);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
       
      </Grid>
    </div>
  );
}

export default Products