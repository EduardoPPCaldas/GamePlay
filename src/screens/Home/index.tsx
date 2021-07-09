import React, { useState } from "react";
import {
  View,
  FlatList,
} from 'react-native'
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { Profile } from "../../components/Profile";
import { ListHeader } from "../../components/ListHeader";
import { style } from "./style";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";



export function Home() {
  const [category, setCategory] = useState('')

  const navigation = useNavigation()

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '2',
      guild: {
        id: '2',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    }
  ]

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  function handleAppointmentDetails(){
    navigation.navigate('AppointmentDetails')
  }
  function handleAppointmentCreate(){
    navigation.navigate('AppointmentCreate')
  }

  return (
    <Background>
      <View>
        <View style={style.header}>
          <Profile />
          <ButtonAdd onPress={handleAppointmentCreate}/>
        </View>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
        <View style={style.content}>
          <ListHeader title="Partidas Agendadas" subtitle="Total 6" />
          <FlatList
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Appointment 
                data={item} 
                onPress={handleAppointmentDetails}
              />
            )}
            style={style.matches}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider />}
          />
        </View>
      </View>
    </Background>
  )
}