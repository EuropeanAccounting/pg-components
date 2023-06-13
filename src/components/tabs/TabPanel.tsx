import React from 'react'

// Local imports
import { sizeType } from "../../types/sizeType";
import { Tab } from '../../types/tab';

interface Props {
    setTabSelected: React.Dispatch<React.SetStateAction<{
        currentTab: number;
        noTabs: number;
    }>>,
    size: sizeType;
    tab: Tab,
    tabSelected: {
        currentTab: number;
        noTabs: number;
    }
}

export default function TabPanel({ tab, tabSelected }: Props) {
    const { index, panelId, tabId, children } = tab;
    if (index == undefined || tabSelected.currentTab !== index + 1) return <></>;
    return (
        <div
            className='p-2 h-full'
            id={panelId}
            role='tabpanel'
            aria-labelledby={tabId}
            tabIndex={-1}
        >
            {children}
        </div>
    )
}