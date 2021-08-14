import React from 'react'
import MapView from 'react-native-maps'
import styled from 'styled-components'

const Map = styled(MapView)`
  height: 79%;
  width: 100%;
`
export const MapScreen = ({ location }) => {
  return (
    <>
      <Map
        region={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.009,
          longitudeDelta: 0.004,
        }}
      >
        <MapView.Marker
          title="Your Location"
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
        />
      </Map>
    </>
  )
}

/**
 * <>
      <Map
        region={{
          latitude: lat,
          longitude: lng,
        }}
      >
        <MapView.Marker
          title="Your location"
          coordinate={{
            latitude: lat,
            longitude: lng,
          }}
        />
      </Map>
    </>
 */
