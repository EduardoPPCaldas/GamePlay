import React from "react";
import { ImageBackground, Text, View, FlatList, Alert } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";
import { Background } from "../../components/Background";
import { Header } from '../../components/Header'
import BannerImg from "../../assets/banner.png"
import { theme } from "../../global/styles/theme";
import { style } from "./style"
import { ListHeader } from "../../components/ListHeader";
import { Member, MemberProps } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";
import { useRoute } from "@react-navigation/native";
import { AppointmentProps } from "../../components/Appointment";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { Load } from "../../components/Load";

type Params = {
  guildSelected: AppointmentProps
}
type GuildWidget = {
  id: string
  name: string
  istant_invite: string
  members: MemberProps[]
  presence_count: number
}

export function AppointmentDetails() {
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget)
  const [loading, setLoading] = useState(true)

  const route = useRoute()
  const { guildSelected } = route.params as Params

  async function fetchGuildWidget() {
    try {
      const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`)
      setWidget(response.data)
      setLoading(false)
    } catch (error) {
      Alert.alert("Verifique as configurações do servidor. Será que o widget está habilitado?")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchGuildWidget()
  }, [])

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto
              name='share'
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />
      <ImageBackground
        source={BannerImg}
        style={style.banner}
      >
        <View style={style.bannerContent}>
          <Text style={style.title}>
            {guildSelected.guild.name}
          </Text>
          <Text style={style.subtitle}>
            {guildSelected.description}
          </Text>

        </View>
      </ImageBackground>
      {
        loading ? <Load/> :
        <>
          <ListHeader
            title="Jogadores"
            subtitle={`Total ${widget.members.length}`}
          />
          <FlatList
            data={widget.members}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Member data={item} />
            )}
            ItemSeparatorComponent={
              () => (
                <ListDivider isCentered />
              )
            }
            style={style.members}
          />
        </>
      }
      <View style={style.footer}>
        <ButtonIcon title={"Entrar na Partida"} />
      </View>
    </Background>
  )
}