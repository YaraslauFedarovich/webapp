import { useEffect, useState } from "react";

const usePlatformStyles = (webApp) => {
  const [styles, setStyles] = useState(null);

  useEffect(() => {
    const loadStyles = async () => {
      let importedStyles;
      switch (webApp.platform) {
        case 'android':
          importedStyles = await import( "../styles/styles.module.scss");
          break;
        case 'ios':
          importedStyles = await import('../styles/styles.module.ios.scss');
      }
      setStyles(importedStyles);
    };

    loadStyles();
  }, []);

  return styles;
};

export default usePlatformStyles;