import React, { useCallback } from 'react';
import { File } from '@juno/ui-private/components/formik';
import { useFormikContext } from 'formik';

import style from './GeoForm.module.css';

const GeoInput = () => {
  const form = useFormikContext();

  const handleFileUpload = useCallback((path, file: Blob) => {
    form.setFieldValue('file', path);

    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === 'string') {
        try {
          form.setFieldValue('geojson', JSON.parse(reader.result));
        } catch (err) {
          form.setFieldError('file', 'invalid file format');
        }
      } else {
        form.setFieldError('file', 'invalid file format');
      }
    };

    if (file) {
      reader.readAsText(file);
    }
  }, []);

  return (
    <File
      label="Layer src"
      name="file"
      required
      fieldClassName={style.field}
      inputClassName={style.input}
      onChangeCustom={handleFileUpload}
    />
  );
};

export default GeoInput;
