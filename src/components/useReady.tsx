import {useState, useEffect} from 'react';
import {InteractionManager} from 'react-native';

const useReady = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setReady(true);
    });
  }, []);

  return ready;
};

export default useReady;
