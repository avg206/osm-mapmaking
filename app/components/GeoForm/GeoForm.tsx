import React from 'react';
import { Form, Input } from '@juno/ui-private/components/formik';
import { CollapsibleCard, Button } from '@juno/ui-private/components';

import GeoInput from './GeoInput';
import style from './GeoForm.module.css';

const GeoForm = ({ onSubmit = (...args) => console.log(...args) }) => {
  return (
    <CollapsibleCard noHeaderMargin header="Add Layer" className={style.form}>
      <Form onSubmit={onSubmit} initialValues={{}}>
        <Input name="name" label="Layer name" required />
        <GeoInput />
        <Button type="submit">Add</Button>
      </Form>
    </CollapsibleCard>
  );
};

export default GeoForm;
