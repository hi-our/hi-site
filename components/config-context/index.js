/**
 * This context holds user configuration stuff, like:
 * - Dark or light mode
 * - Sound enabled or disabled
 */
import React from 'react';
import { addClass, removeClass } from "../../utils/dom-utils";

// This key is used in localStorage to remember theme preferences
export const PREFERS_DARK_KEY = 'prefers-dark';

export const PREFERS_DARK_CSS_PROP = `--${PREFERS_DARK_KEY}`;

export const ConfigContext = React.createContext();

export const ConfigProvider = ({ children }) => {
  let initialColorValue = 'light';
  let initialAllowColorTransitions = false;

  if (typeof window !== 'undefined') {
    let root = window.document.documentElement;

    // Because colors matter so much for the initial page view, we're
    // doing a lot of the work in gatsby-ssr. That way it can happen before
    // the React component tree mounts.
    initialColorValue =
      root.style.getPropertyValue(PREFERS_DARK_CSS_PROP) === 'true'
        ? 'dark'
        : 'light';

  }

  const [colorMode, rawSetColorMode] = React.useState(initialColorValue);

  const [allowColorTransitions, setAllowColorTransitions] = React.useState(
    initialAllowColorTransitions
  );

  const value = React.useMemo(() => {
    const setColorMode = value => {
      if (!allowColorTransitions) {
        setAllowColorTransitions(true);
      }

      let root = window.document.documentElement;

      const prefersDark = value === 'dark';
      root.style.setProperty(PREFERS_DARK_CSS_PROP, prefersDark);
      rawSetColorMode(value);

      if (prefersDark) {
        addClass(root, 'mode-dark')
        removeClass(root, 'mode-light')
      } else {
        addClass(root, 'mode-light')
        removeClass(root, 'mode-dark')
      }

      localStorage.setItem(PREFERS_DARK_KEY, prefersDark);
    };

    return {
      colorMode,
      setColorMode,
      allowColorTransitions,
    };
  }, [
    colorMode,
    rawSetColorMode,
    allowColorTransitions,
  ]);

  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
};
