import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { postProduct } from "../../../api";
import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import newProductScheme from "./validation";
import { Formik, FieldArray } from "formik";
import { message } from "antd";

function NewProduct() {
  const queryClint = useQueryClient();

  const newProductMutetion = useMutation(postProduct, {
    onSuccess: () => queryClint.invalidateQueries("admin:product"),
  });
  const handleSubmit = async (values, bag) => {
    message.loading({ content: "Loading...", key: "product_updated" });

    const newValues = {
      ...values,
      photos: JSON.stringify(values.photos),
    };
    newProductMutetion.mutate(newValues, {
      onSuccess: () => {
        console.log("success");
        message.success({
          content: "The product successfully add",
          key: "product_updated",
          duration: 2,
        });
      },
    });
  };

  return (
    <div>
      <Text fontSize="2xl">New Product</Text>
      <Formik
        initialValues={{
          title: "",
          description: "",
          price: "",
          photos: [],
        }}
        validationSchema={newProductScheme}
        onSubmit={handleSubmit}
      >
        {({
          handleSubmit,
          errors,
          touched,
          handleChange,
          handleBlur,
          values,
          isSubmitting,
        }) => (
          <>
            <Box>
              <Box my="5" textAlign="left">
                <form>
                  <FormControl>
                    <FormLabel>Title</FormLabel>
                    <Input
                      name="title"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.title}
                      disabled={isSubmitting}
                      isInvalid={touched.title && errors.title}
                    />
                    {touched.title && errors.title && (
                      <Text color="red">{errors.title}</Text>
                    )}
                  </FormControl>
                  <FormControl mt="4">
                    <FormLabel>Description</FormLabel>
                    <Textarea
                      name="description"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                      disabled={isSubmitting}
                      isInvalid={touched.description && errors.description}
                    />
                    {touched.description && errors.description && (
                      <Text color="red">{errors.description}</Text>
                    )}
                  </FormControl>
                  <FormControl mt="4">
                    <FormLabel>Price</FormLabel>
                    <Input
                      name="price"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.price}
                      disabled={isSubmitting}
                      isInvalid={touched.price && errors.price}
                    />
                    {touched.price && errors.price && (
                      <Text color="red">{errors.price}</Text>
                    )}
                  </FormControl>
                  <FormControl mt="4">
                    <FormLabel>Photos</FormLabel>
                    <FieldArray
                      name="photos"
                      render={(arrayHelpers) => (
                        <div>
                          {values.photos &&
                            values.photos.map((photo, index) => (
                              <div key={index}>
                                <Input
                                  name={`photos.${index}`}
                                  value={photo}
                                  disabled={isSubmitting}
                                  onChange={handleChange}
                                  width="3xl"
                                />
                                <Button
                                  ml="4"
                                  type="button"
                                  colorScheme="red"
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  Remove
                                </Button>
                                <Button
                                  mt="5"
                                  onClick={() => arrayHelpers.push("")}
                                >
                                  Add a Photo
                                </Button>
                              </div>
                            ))}
                        </div>
                      )}
                    />
                  </FormControl>
                  <Button mt={4} width="full" isLoading={isSubmitting}>
                    Save
                  </Button>
                </form>
              </Box>
            </Box>
          </>
        )}
      </Formik>
    </div>
  );
}

export default NewProduct;
