import React, { useState } from "react";
import { Box, Card, IconButton, Typography } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ProductsList from "./ProductsList";
import { useProducts } from "../../context/ProductsProvider";
const Products = () => {
  const { category } = useProducts();
  const [toggle, isToggle] = useState(false);
  const [current, setCurrent] = useState(null);
  const handleToggle = (i) => {
    if (toggle) {
      setCurrent(null);
    } else {
      setCurrent(i);
    }
    isToggle(!toggle);
  };
  return (
    <Box
      sx={{
        width: "98%",
        margin: "auto",
      }}
    >
      {category.map((d, i) => (
        <Card
          sx={{
            width: { sm: "100%", md: "98%" },
            padding: "8px",
            marginTop: 5,
          }}
          key={i}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">{d}</Typography>
            <IconButton onClick={() => handleToggle(i)}>
              <ExpandLessIcon />
              {false && <ExpandLessIcon />}
            </IconButton>
          </Box>
          {i !== current && (
            <Box
              sx={{
                width: "100%",
              }}
            >
              <ProductsList category={d} id={i} />
            </Box>
          )}
        </Card>
      ))}
    </Box>
  );
};

export default Products;
