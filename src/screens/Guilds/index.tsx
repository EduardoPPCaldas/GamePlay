import React from 'react'
import { View , FlatList} from 'react-native'
import { Guild, GuildProps } from '../../components/Guild'
import { ListDivider } from '../../components/ListDivider'
import { style } from './style'

type Props = {
  handleGuildSelected: (guild: GuildProps) => void
}

export function Guilds({handleGuildSelected} : Props){
  const guilds = [
    {
      id: '1',
      name: 'Lendarios',
      icon: "image.png",
      owner: true
    },
  ]
  return(
    <View style={style.container}>
      <FlatList
        style = {style.guilds}
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Guild 
            data={item}
            onPress={() =>handleGuildSelected(item)}
          />
        )}
        ListHeaderComponent={()=> <ListDivider isCentered/>}
        contentContainerStyle={{paddingBottom: 27 }} // diferent from original project
        showsVerticalScrollIndicator = {false}
        ItemSeparatorComponent={() => (
          <ListDivider isCentered/>
        )}
      />
    </View>
  )
}