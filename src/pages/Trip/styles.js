import React from 'react'
import styled from 'styled-components/native';




const CollabsContainer = styled.View`
  width: 100%;
  height: auto;
  background: #fff;
  padding: 10px 30px;
`

const CollabsTitle = styled.Text`
  font-size: 18px;
  color: #000;
  font-weight: bold;
  margin-bottom: 15px;
`

const Collab = styled.View`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`

const Picture = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background: #eee;
  margin-right: 10px;
`

const Name = styled.Text`
  font-size: 15px;
  color: #111;
`

const Collabs = () => {
  return (
    <CollabsContainer>
      <CollabsTitle>Quem vai com você</CollabsTitle>
      <Collab>
        <Picture />
        <Name>André Paulo</Name>
      </Collab>

      <Collab>
        <Picture />
        <Name>Gabriel Alves</Name>
      </Collab>

      <Collab>
        <Picture />
        <Name>Rodrigo Marques</Name>
      </Collab>

      <Collab>
        <Picture />
        <Name>Léo David</Name>
      </Collab>
    </CollabsContainer>
  )
}


export const TripContainer = styled.ScrollView`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  background: #fff;
`

const BorderTop = styled.View`
  width: 100px;
  height: 6px;
  border-radius: 6px;
  background: rgba(0,0,0,0.08);
  margin: 10px auto;
`

const InfoContainer = styled.View`
  padding: 10px 30px;
`

const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
`

const Text = styled.Text`
  font-size: 14px;
`

const Hr = styled.View`
  width: 70%;
  height: 1px;
  background: #eee;
  margin: 10px auto;
`

export const TripDetails = ({visible}) => {
  return (
    <TripContainer visible={visible}>
      <BorderTop/>
      <InfoContainer>
        <Title>De onde</Title>
        <Text>Caixa Econômica Federal</Text>
        <Text>4955, Bairro Esperança</Text>
      </InfoContainer>
      <InfoContainer>
        <Title>Para onde</Title>
        <Text>Rua do Ichiraku</Text>
        <Text>4955, Vila Da Folha</Text>
      </InfoContainer>
      <Hr/>
      <Collabs />
    </TripContainer>
  )
}