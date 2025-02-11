import * as React from 'react';
import {useState} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from 'react-native-media-console/src/components/VideoResolution/styles';
const gearIcon = require('../../assets/img/gear.png');

interface VideoResolutionProps {
  handleResolutionModalOpen: () => void;
}

interface ResolutionModalProps {
  selectResolutionCallback: () => void;
}

export const VideoResolution: React.FC<VideoResolutionProps> = ({
  handleResolutionModalOpen,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleResolutionModalOpen()}
      hitSlop={{
        top: 50,
        bottom: 50,
        left: 50,
        right: 50,
      }}
    >
      <Image source={gearIcon} style={styles.icon} />
    </TouchableOpacity>
  );
};

export const ResolutionModal: React.FC<ResolutionModalProps> = ({
  selectResolutionCallback,
}) => {
  const [selectedQuality, setSelectedQuality] = useState('');

  React.useEffect(() => {
    if (selectedQuality !== '') {
      // persist new resolution
      handleSelectedResolution();
    }
  }, [selectedQuality]);

  const handleSelectedResolution = () => {
    // @ts-ignore
    selectResolutionCallback(selectedQuality);
  };
  const handleSelectQuality = (quality: string) => {
    setSelectedQuality(quality);
  };

  return (
    <View style={styles.modalContainer}>
      <View style={styles.modal}>
        <Text style={styles.modalHeading}>Video Quality</Text>
        <View style={styles.seperator}></View>
        <ScrollView>
          <TouchableOpacity
            style={[
              styles.modalSwitch,
              selectedQuality === 'high' ? styles.selectedQuality : null,
            ]}
            onPress={() => handleSelectQuality('high')}
          >
            <Text style={styles.modalText}>1080p</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.modalSwitch,
              selectedQuality === 'medium' ? styles.selectedQuality : null,
            ]}
            onPress={() => handleSelectQuality('medium')}
          >
            <Text style={styles.modalText}>720p</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.modalSwitch,
              selectedQuality === 'low' ? styles.selectedQuality : null,
            ]}
            onPress={() => handleSelectQuality('low')}
          >
            <Text style={styles.modalText}>480p</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.modalSwitch,
              selectedQuality === 'auto' ? styles.selectedQuality : null,
            ]}
            onPress={() => handleSelectQuality('auto')}
          >
            <Text style={styles.modalText}>Auto </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default VideoResolution;
