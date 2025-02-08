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
    >
      <Image source={gearIcon} style={styles.icon} />
    </TouchableOpacity>
  );
};

export const ResolutionModal: React.FC<ResolutionModalProps> = ({
  selectResolutionCallback,
}) => {
  const [selectedQuality, setSelectedQuality] = useState('auto');

  React.useEffect(() => {
    handleSelectedResolution();
  }, [selectedQuality]);

  const handleSelectedResolution = () => {
    selectResolutionCallback(selectedQuality);
  };

  const handleSelectQuality = (quality: string) => {
    switch (quality) {
      case 'auto':
        setSelectedQuality('auto');
        break;
      case 'high':
        setSelectedQuality('high');
        break;
      case 'medium':
        setSelectedQuality('medium');
        break;
      case 'low':
        setSelectedQuality('low');
        break;
      default:
        setSelectedQuality('auto');
        break;
    }
  };
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modal}>
        <ScrollView>
          <TouchableOpacity
            style={[
              styles.modalSwitch,
              selectedQuality === 'auto' ? styles.selectedQuality : null,
            ]}
            onPress={() => handleSelectQuality('auto')}
          >
            <Text style={styles.modalText}>Auto (Recommended)</Text>
          </TouchableOpacity>
          {selectedQuality === 'auto' || selectedQuality === 'high' ? null : (
            <View style={styles.seperator} />
          )}
          <TouchableOpacity
            style={[
              styles.modalSwitch,
              selectedQuality === 'high' ? styles.selectedQuality : null,
            ]}
            onPress={() => handleSelectQuality('high')}
          >
            <Text style={styles.modalText}>1080p Best Quality</Text>
          </TouchableOpacity>
          {selectedQuality === 'high' || selectedQuality === 'medium' ? null : (
            <View style={styles.seperator} />
          )}
          <TouchableOpacity
            style={[
              styles.modalSwitch,
              selectedQuality === 'medium' ? styles.selectedQuality : null,
            ]}
            onPress={() => handleSelectQuality('medium')}
          >
            <Text style={styles.modalText}>720p Basic Quality</Text>
          </TouchableOpacity>
          {selectedQuality === 'medium' || selectedQuality === 'low' ? null : (
            <View style={styles.seperator} />
          )}
          <TouchableOpacity
            style={[
              styles.modalSwitch,
              selectedQuality === 'low' ? styles.selectedQuality : null,
            ]}
            onPress={() => handleSelectQuality('low')}
          >
            <Text style={styles.modalText}>480p Low Quality</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default VideoResolution;
