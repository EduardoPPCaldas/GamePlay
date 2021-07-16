import React , {useEffect} from 'react'
import { useState } from 'react'
import { View , FlatList} from 'react-native'
import { Guild, GuildProps } from '../../components/Guild'
import { ListDivider } from '../../components/ListDivider'
import { Load } from '../../components/Load'
import { api } from '../../services/api'
import { style } from './style'

type Props = {
  handleGuildSelected: (guild: GuildProps) => void
}

export function Guilds({handleGuildSelected} : Props){
  const [guilds, setGuilds] = useState<GuildProps[]>([])
  const [loading, setLoading] = useState(true)

  async function fetchGuilds(){
    const response = await api.get('/users/@me/guilds')
    setGuilds(response.data)
    setLoading(false)
  }

  useEffect(() =>{
    fetchGuilds()
  },[])

  return(
    <View style={style.container}>
      {
        loading ? <Load/> :
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
      }
    </View>
  )
}