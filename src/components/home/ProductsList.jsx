import React, { useEffect } from "react";
import { Grid, Card, Box, Typography } from "@mui/material";
import Switch from "@mui/material/Switch";
import Divider from "@mui/material/Divider";
import clockDeskTop from "../../images/access-time-24-px@3x.png";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { useProducts } from "../../context/ProductsProvider";
const ProductsList = ({ category, id }) => {
  const {
    products,
    handleIsActive,
    productsList,
    fetchProductsList,
    isChanged,
  } = useProducts();
  //   console.log(products);
  useEffect(() => {
    fetchProductsList(category, id, products);
  }, [isChanged]);

  return (
    <Grid container spacing={2}>
      {productsList.map((product, index) => (
        <Grid
          item
          sm={12}
          md={6}
          lg={4}
          key={index}
          sx={{
            width: "100%",
          }}
        >
          <Card
            sx={{
              borderRadius: "4px",
              border: "solid 1px #f6f6f6",
              height: 190,
              width: "100%",
            }}
          >
            <Box
              sx={{
                padding: "10px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="p">{product?.title}</Typography>
                <Box>
                  <Switch
                    checked={product?.isActive}
                    onChange={(event) => handleIsActive(event, index)}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 1,
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",

                    alignItems: "center",
                  }}
                >
                  <img
                    src={clockDeskTop}
                    alt="clockDeskTop"
                    height="20"
                    width="20"
                    style={{ objectFit: "contain" }}
                  />
                  <Typography
                    variant="p"
                    sx={{
                      fontSize: 15,
                    }}
                  >
                    {product?.price}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Divider />
            <Box
              sx={{
                padding: "10px",
              }}
            >
              <Box
                sx={{
                  width: { sm: "100%", md: "70%" },
                  display: "flex",
                  justifyContent: "space-between",

                  alignItems: "center",
                }}
              >
                <Box>
                  <Stack direction="row">
                    <Avatar>MS</Avatar>
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>RJ</Avatar>
                    <Avatar sx={{ bgcolor: deepPurple[500] }}>PT</Avatar>
                  </Stack>
                </Box>
                <Box>
                  <Typography variant="p">+ 2 More</Typography>
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsList;
