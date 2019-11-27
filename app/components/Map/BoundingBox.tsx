import { FC, useContext, useEffect, useState } from 'react';
import { MapContext } from 'react-mapbox-gl';

const BoundingBox: FC<{}> = () => {
  const map = useContext(MapContext);

  const [topLeft, setTopLeft] = useState(null);
  const [bottomRight, setBottomRight] = useState(null);

  useEffect(() => {
    map.on('boxzoomstart', () => {
      map.once('mousemove', (e) => {
        setTopLeft(e.lngLat.wrap());
      });
    });
    map.on('boxzoomend', () => {
      map.once('mousemove', (e) => {
        setBottomRight(e.lngLat.wrap());
      });
    });
  }, []);

  console.log(topLeft, bottomRight);

  return null;
};

export default BoundingBox;
