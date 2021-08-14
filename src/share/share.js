import React from 'react'
import { Share, View, Button } from 'react-native'

export const ShareExample = ({ location }) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: JSON.stringify(location),
      })
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <View style={{ marginTop: 0, marginBottom: 10 }}>
      <Button onPress={onShare} title="Share Location 🔗" />
    </View>
  )
}
