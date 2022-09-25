import React from 'react';
import { Platform } from 'react-native';

const usePlatform = () => {
  const [platform, setPlatform] = React.useState<typeof Platform.OS | null>(
    null,
  );

  React.useEffect(() => {
    setPlatform(Platform.OS);
  }, []);

  return {
    platform,
  };
};

export default usePlatform;
