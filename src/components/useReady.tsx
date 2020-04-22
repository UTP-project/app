import React, {useState, useEffect} from 'react';
import {InteractionManager} from 'react-native';

import EmptyComp from './EmptyComp';

const useReady = (WrappedComp: React.ComponentType<any>) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setReady(true);
    });
  }, []);

  return ready ? (props: any) => <WrappedComp {...props} /> : EmptyComp;
};

export default useReady;
