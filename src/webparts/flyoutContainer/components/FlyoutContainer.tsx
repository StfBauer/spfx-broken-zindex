import * as React from 'react';
import styles from './FlyoutContainer.module.scss';
import { IFlyoutContainerProps } from './IFlyoutContainerProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class FlyoutContainer extends React.Component<IFlyoutContainerProps, {}> {

  public render(): React.ReactElement<IFlyoutContainerProps> {
    return (
      <div className={ styles.container }>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, culpa.
      <div className={ styles.flyout }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quos.</div>
    </div>
    );
  }
}
