// import ItemCard from "../../common/itemCard/ItemCard";
import { Box, Skeleton, Stack } from "@mui/material";
import ItemCardContainer from "../../common/itemCard/ItemCardContainer";
// import ItemCardContainer from "../../common/itemCard/ItemCardContainer";

const ItemList = ({ items }) => {
  let arr = [1, 2, 3, 4];
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {items.length > 0
        ? items.map((elemento) => {
            return <ItemCardContainer key={elemento.id} elemento={elemento} />;
          })
        : arr.map((e) => {
            return (
              <Box key={e} sx={{ width: 200, margin: 2 }} spacing={2}>
                <Stack>
                  {/* For variant="text", adjust the height via font-size */}
                  <Skeleton variant="rectangular" width={100} height={100} />
                  <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                  <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                  {/* For other variants, adjust the size with `width` and `height` */}
                </Stack>
              </Box>
            );
          })}
    </div>
  );
};

export default ItemList;
