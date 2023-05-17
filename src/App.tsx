import * as React from "react";
import { Map, NavigationControl } from "maplibre-gl";

const MapLibre: React.FunctionComponent = (props) => {
  const mapContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (mapContainerRef.current != null) {
      const map = new Map({
        container: mapContainerRef.current,
        style:
          "https://api.maptiler.com/maps/streets/style.json?key=3Fref4X314vlAa595WLJ"
      });

      map.addControl(new NavigationControl());
    }
  }, []);

  return (
    <div
      ref={mapContainerRef}
      style={{
        width: "100vw",
        height: "100vh"
      }}
    />
  );
};

export default MapLibre;
