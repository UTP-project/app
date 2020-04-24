import React, {useState, useMemo} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Icon} from 'react-native-elements';

import TouchableWrapper from './TouchableWrapper';

export type Option = {
  label: string;
  value: string | number;
};

type Props = {
  selected: string | number;
  options: Option[];
  onSelect: (value: string | number) => void;
};

const Picker = ({selected, options, onSelect}: Props) => {
  const [visible, setVisible] = useState(false);

  const selectedLabel = useMemo(() => {
    const selectedOption = options.find((option) => option.value === selected);
    if (selectedOption) {
      return selectedOption.label;
    }
  }, [selected, options]);

  const handleSelect = (value: string | number) => {
    onSelect(value);
    setVisible(false);
  };

  return (
    <>
      <TouchableWrapper
        containerStyle={styles.feedbackContainer}
        onPress={() => {
          setVisible(true);
        }}>
        <View style={styles.pickerContainer}>
          <Text style={styles.pickerText}>{selectedLabel}</Text>
          <View>
            <Icon type="font-awesome" name="caret-down" color="#888" />
          </View>
        </View>
      </TouchableWrapper>
      <Modal
        animationType="fade"
        transparent
        visible={visible}
        onRequestClose={() => {
          setVisible(false);
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            setVisible(false);
          }}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback>
              <ScrollView style={styles.modalMain}>
                {options.map((option) => (
                  <TouchableWrapper
                    key={option.value}
                    onPress={() => handleSelect(option.value)}>
                    <View style={styles.modalItem}>
                      <Text style={styles.modalItemText}>{option.label}</Text>
                    </View>
                  </TouchableWrapper>
                ))}
              </ScrollView>
            </TouchableWithoutFeedback>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  feedbackContainer: {
    backgroundColor: '#ececec',
    width: '100%',
    height: 48,
    borderRadius: 4,
  },
  pickerContainer: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 32,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#ddd',
  },
  pickerText: {
    flex: 1,
    fontSize: 16,
  },
  modalContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalMain: {
    backgroundColor: '#fff',
    left: 30,
    right: 30,
    position: 'absolute',
    maxHeight: Dimensions.get('window').height * 0.85,
  },
  modalItem: {
    alignItems: 'center',
  },
  modalItemText: {
    paddingVertical: 16,
    fontSize: 16,
  },
});

export default Picker;
