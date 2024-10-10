import React, { type FC } from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import styles from './element.module.css';

type Props = {
  name: string;
};

const CustomElement: FC<Props> = (props) => {
  return (
    <div className={styles.root}>
      <h2>Hello {props.name || 'Wix CLI'}</h2>
      <p>
        Open <code>`src\site\widgets\custom-elements\my-widget`</code> to start
        building your widget
      </p>
      "hello "
      hello   bhe
      <div style={{ color: 'red' }}>
        <p>hello</p>
      </div>
    </div>
  );
};

const customElement = reactToWebComponent(
  CustomElement,
  React,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ReactDOM as any,
  {
    props: {
      name: 'string',
    },
  }
);

export default customElement;
