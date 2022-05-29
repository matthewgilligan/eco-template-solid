import { createSignal, createContext, useContext } from 'solid-js';

const CarbonIntensityContext = createContext();

export function CarbonIntensityProvider(props) {
  const [carbonIntensity, setCarbonIntensity] = createSignal({
      index: 'moderate',
      forecast: 140,
    }),
    store = [carbonIntensity, setCarbonIntensity];

  return (
    <CarbonIntensityContext.Provider value={store}>
      {props.children}
    </CarbonIntensityContext.Provider>
  );
}

export function useCarbonIntensity() {
  return useContext(CarbonIntensityContext);
}
