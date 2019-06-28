import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import * as strings from 'FlyoutContainerWebPartStrings';
import FlyoutContainer from './components/FlyoutContainer';
import { IFlyoutContainerProps } from './components/IFlyoutContainerProps';

export interface IFlyoutContainerWebPartProps {
  description: string;
}

export default class FlyoutContainerWebPart extends BaseClientSideWebPart<IFlyoutContainerWebPartProps> {

  private fixAllZIndex = () => {

    // Adjust z-index for web part zones
    let zIndexContainer = document.querySelectorAll(".CanvasZoneContainer");

    let zIndex = zIndexContainer.length;

    zIndexContainer.forEach((elem, index) => {

      (<HTMLElement>elem).style.zIndex = (zIndex - index).toString();

    });

    // Adjust z-index for web parts
    let zIndexControlZone = document.querySelectorAll(".ControlZone");

    zIndex = zIndexControlZone.length*5;

    zIndexControlZone.forEach((elem, index) => {

      (<HTMLElement>elem).style.zIndex = (zIndex - index).toString();
      (<HTMLElement>elem).style.position = "relative";

    });

  }


  public render(): void {
    const element: React.ReactElement<IFlyoutContainerProps > = React.createElement(
      FlyoutContainer,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
    this.fixAllZIndex();
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
