import React from "react";
import {
  ScrollView,
} from 'react-native'
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { style } from "./style";
import { categories } from "../../utils/categories";
import { Category } from "../Category";

type Props = {
  categorySelected : string;
  setCategory: (categoryId: string) => void;
  hasCheckBox?: boolean;
}

export function CategorySelect({categorySelected , setCategory, hasCheckBox = false} : Props){
  return(
    <ScrollView
      horizontal
      style={style.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingRight: 40,}}
    >
      {
        categories.map(category => (
        <Category
          key = {category.id}
          title = {category.title}
          icon = {category.icon}
          checked = {category.id === categorySelected}
          hasCheckBox = {hasCheckBox}
          onPress = {() => setCategory(category.id)}
        />))
      }
    </ScrollView>
  )
}