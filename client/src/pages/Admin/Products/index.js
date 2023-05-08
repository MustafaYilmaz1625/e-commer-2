import React, { useMemo } from "react";
import {Link} from "react-router-dom"
import { Text,Button, Flex } from "@chakra-ui/react";
import {Table,Popconfirm} from "antd"
import NewProduct from "./new"

import { useQuery,useMutation,useQueryClient } from "react-query";
import { fetchProductList, deleteProduct } from "../../../api";

function Products() {
  const queryClint=useQueryClient()
  const { isLoading, isError, data, error } = useQuery(
    "admin:products",
    fetchProductList
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error {error.message}</div>;
  }

  const deleteMutetion=useMutation(deleteProduct,{
           onSuccess:()=>queryClint.invalidateQueries("admin:product")
  })
  const colums =useMemo(()=>{
    return [
      {
        title: "Title",
        dataIndex: "title",
        key: "title",
      },
      {
        title: "Price",
        dataIndex: "Price",
        key: "Price",
      },
      {
        title: "Create At",
        dataIndex: "Create At",
        key: "Create At",
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <>
            <Link to={`/admin/products/${record._id}`}>Edit</Link>
            <Popconfirm
              title="Are you sure"
              onConfirm={()=> {
               deleteMutetion.mutate(record._id,{
                onSuccess:()={
                  console.log('success')
                }
               })
              }}
              onCancel={()=>{
                alert("iptal edildi")
              }}
              okText="Yes"
              cancelText="No"
            >
              <a href="/#">Delete</a>
            </Popconfirm>
          </>
        ),
      },
    ];
  },[])

  return (
    <div>
      <Flex justifyContent="space-around" alignItems="center">
        <Text fontSize="2xl" p={5}>
          Producs
        </Text>
  
       <Link to="/product/new"> <Button>New</Button></Link>
      </Flex>
      <Table dataSource={dataSource} colums={colums} rowKey={_id} />
    </div>
  );
}

export default Products;
