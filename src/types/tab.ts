// Libraries imports
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface Tab {
    children: React.ReactElement | React.ReactElement[] | undefined;
    icon: IconProp;
    index?: number;
    panelId?: string;
    tabId?: string;
    title: string;
}