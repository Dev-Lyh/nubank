/* eslint-disable prettier/prettier */
import React from 'react';

import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './style';

export default function Menu({ translateY  }) {
  const qrValue = 'https://www.youtube.com/watch?v=G8GaQdW2wHc';
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
      }),
    }}>
      <Code>
      <QRCode 
        value={qrValue ? qrValue : 'NA'} 
        size={80} 
        color="#8B10AE" 
        backgroundColor="#FFFFFF" 
        quietZone={4}
      /> 
      </Code>

      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#FFFFFF" />
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={20} color="#FFFFFF" />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#FFFFFF" />
          <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#FFFFFF" />
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>
          SAIR DO APP
        </SignOutButtonText>
      </SignOutButton>

    </Container>
  );
}