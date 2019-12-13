import React from 'react';
import {
 Box,
 Grommet,
 Heading,
 ResponsiveContext,
 Text,
} from 'grommet';
import { deepFreeze } from "grommet/utils";

const theme = deepFreeze({
  global: {
    breakpoints: {
      small: {
        value: 400,
      },
      medium: {
        value: 1200,
      },
      large: {},
    },
    colors: {
      brand: '#F7CAC9',
    },
    font: {
      family: 'Cantarell',
    },
  },
})

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    fill='horizontal'
    style={{ zIndex: '100' }}
    {...props}
  />
);

export const Layout = ({ children }) => (
  <Grommet theme={theme} full>
    <ResponsiveContext.Consumer>
      {size => (
        <>
          <AppBar>
            <Text size='xxlarge'>Entregas personales en Ixtapa Zihuatanejo 🚘 Envíos a toda la República 📦 Calle AEIOU 12345, Colonia VWXYZ<br /><a href="https://facebook.com/vadycosmeticszihuatanejo"><img src='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' height='86px' /></a> <a href='https://wa.me/5217551065013'><img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" height='96px'/></a> <a href='https://goo.gl/maps/JTbF6mNiaYWW4MDE6'><img src='https://upload.wikimedia.org/wikipedia/commons/d/d1/Google_Maps_pin.svg' height='86px'/></a></Text>
          </AppBar>
          <Box fill>
            <Box flex>
              {children}
            </Box>
          </Box>
        </>
      )}
    </ResponsiveContext.Consumer>
  </Grommet>
)
