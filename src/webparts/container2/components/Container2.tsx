import * as React from 'react';
import styles from './Container2.module.scss';
import { IContainer2Props } from './IContainer2Props';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Container2 extends React.Component<IContainer2Props, {}> {
  public render(): React.ReactElement<IContainer2Props> {
    return (
      <div className={ styles.container2 }>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, culpa.
      </div>
    );
  }
}
