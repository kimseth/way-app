import { FlatList, StyleSheet, Text, Vibration, View } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { Stack, Tabs } from 'expo-router'
import ExploreHeader from '@/components/ExploreHeader'
import listingsData from '@/assets/data/airbnb-listings.json';
import ListingsMap from '@/components/ListingsMap';
import listingsDataGeo from '@/assets/data/airbnb-listings.geo.json';
import ListingsBottomSheet from '@/components/ListingButtomSheet';
import axios from 'axios';
import { ProductType } from '@/types/type';

const HomeScreen = () => {

  const items = useMemo(() => listingsData as any, []);
  const geoItems = useMemo(() => listingsDataGeo, []);
  const [category, setCategory] = useState<string>('Tiny homes');
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const onDataChanged = (category: string) => {
    setCategory(category);
  }

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    const URL = `http://localhost:3000/products`;

    const response = await axios.get(URL);
    setProducts(response.data);
    setIsLoading(false);

    console.log(response);
  }

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerShown: false // hide the default header
        }}
      />
      <ExploreHeader onCategoryChanged={onDataChanged} />
      {/* <ListingsMap listings={geoItems} />
      <ListingsBottomSheet listings={items} category={category}/> */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ index, item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    textAlign: 'center'
  }
});