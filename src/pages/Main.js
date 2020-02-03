import React from "react";
import lista from "../lista";
import { FlatList } from "react-native";
import ListaItem from "../components/Restaurant/ListaItem";

export default () => {
  return (
    <FlatList
      data={lista}
      renderItem={({ item }) => <ListaItem data={item} />}
      keyExtractor={item => item.id}
    />
  );
};
