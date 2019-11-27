import React, { FC, useCallback } from 'react';
import { Button } from '@juno/ui-private/components';

import { Layer } from 'types';

import styles from './Layers.module.css';

interface LayerProps extends Layer {
  onRemove: (id: string) => void;
}

const LayerItem: FC<LayerProps> = ({ id, name, color, onRemove }) => {
  const handleRemove = useCallback(() => onRemove(id), [onRemove]);

  return (
    <div className={styles.row}>
      <div className={styles.info}>
        <div className={styles.color} style={{ backgroundColor: color }} />
        <div className={styles.name}>{name}</div>
      </div>

      <Button onClick={handleRemove} small className={styles.remove}>
        Remove
      </Button>
    </div>
  );
};

export default LayerItem;
