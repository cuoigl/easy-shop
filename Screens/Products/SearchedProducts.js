import { StyleSheet, View } from "react-native";
import { Body, Content, Left, ListItem, Thumbnail } from "native-base";

const SearchedProduct = (props) => {
  const { productsFiltered } = props;

  return (
    <Content>
      {productsFiltered.length > 0 ? (
        productsFiltered.map((item) => (
          <ListItem key={item._id} avatar>
            <Left>
              <Thumbnail
                source={{
                  uri: item.image
                    ? item.image
                    : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
                }}
              />
            </Left>
            <Body>
              <Text>{item.name}</Text>
              <Text note>{item.description}</Text>
            </Body>
          </ListItem>
        ))
      ) : (
        <View style={styles.center}>
          <Text>No products match the selected criteria</Text>
        </View>
      )}
    </Content>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SearchedProduct;
