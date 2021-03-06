import React from "react";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Text, View, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { CategorySelect } from "../../components/CategorySelect";
import { Header } from '../../components/Header'
import { style } from "./style"
import { theme } from "../../global/styles/theme";
import { GuildIcon } from "../../components/GuildIcon";
import { SmallInput } from "../../components/SmallInput";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { ModalView } from "../../components/ModalView";
import { Guilds } from "../Guilds";
import { GuildProps } from "../../components/Guild";
import { Background } from "../../components/Background";
import uuid from 'react-native-uuid'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLECTION_APPOINTMENTS, COLLECTION_USERS } from "../../config/database"; 
import { useNavigation } from "@react-navigation/native";



export function AppointmentCreate() {
  const [category, setCategory] = useState('')
  const [openGuildsModal, setOpenGuildsModal] = useState(false)
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps)

  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [hour, setHour] = useState('')
  const [minute,setMinute] = useState('')
  const [description, setDescription] = useState('')
  const navigation = useNavigation()

  function handleOpenGuilds() {
    setOpenGuildsModal(true)
  }

  function handleCloseGuilds() {
    setOpenGuildsModal(false)
  }

  function handleGuildSelect(guildSelect: GuildProps) {
    setGuild(guildSelect)
    setOpenGuildsModal(false)
  }
  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId)
  }

  async function handleSave(){
    const newAppointment = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${month} ??s ${hour}/${minute}h`,
      description
    }

    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)
    const appointments = storage ? JSON.parse(storage) : []

    await AsyncStorage.setItem(COLLECTION_APPOINTMENTS,JSON.stringify([...appointments, newAppointment]))
    navigation.navigate('Home')
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={style.container}
    >
      <Background>
        <ScrollView>
          <Header
            title="Agendar Partida"
          />
          <Text style={[style.label, { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}>
            Categoria
          </Text>

          <CategorySelect
            hasCheckBox
            setCategory={handleCategorySelect}
            categorySelected={category}
          />

          <View style={style.form}>
            <RectButton onPress={handleOpenGuilds}>

              <View style={style.select}>
                {
                  guild.icon ? <GuildIcon guildId={guild.id} iconId={guild.icon} /> : <View style={style.image} />
                }

                <View style={style.selectBody}>
                  <Text style={style.label}>
                    {
                      guild.name ? guild.name : "Selecione um servidor"
                    }
                  </Text>
                </View>

                <Feather
                  name='chevron-right'
                  color={theme.colors.highlight}
                  size={18}
                />

              </View>
            </RectButton>
            <View style={style.field}>

              <View>
                <Text style={[style.label, { marginBottom: 12 }]}>
                  Dia e m??s
                </Text>
                <View style={style.column}>
                  <SmallInput maxLength={2} onChangeText={setDay}/>
                  <Text style={style.divider}>
                    /
                  </Text>
                  <SmallInput maxLength={2} onChangeText={setMonth}/>
                </View>
              </View>

              <View>
                <Text style={[style.label, { marginBottom: 12 }]}>
                  Hora e minuto
                </Text>
                <View style={style.column}>
                  <SmallInput maxLength={2} onChangeText={setHour} />
                  <Text style={style.divider}>
                    :
                  </Text>
                  <SmallInput maxLength={2} onChangeText={setMinute}/>
                </View>
              </View>

            </View>

            <View style={[style.field, { marginBottom: 12 }]}>
              <Text style={style.label}>
                Descri????o
              </Text>
              <Text style={style.caracteresLimit}>
                Max 100 caracteres
              </Text>
            </View>
            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
              onChangeText={setDescription}
            />

            <View style={style.footer}>
              <Button
                title={"Agendar"}
                onPress={handleSave}
              />
            </View>

          </View>

        </ScrollView>

      </Background>
      <ModalView visible={openGuildsModal} closeModal={handleCloseGuilds}>
        <Guilds handleGuildSelected={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  )
}