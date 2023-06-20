// React imports
import React, { useCallback, useEffect, useRef, useState } from 'react';

// Libraries imports
import { motion } from 'framer-motion';

// Local imports
import { sizeType } from '../../types/sizeType';
import { Tab } from '../../types/tab';
import TabButton from './Tab';
import TabPanel from './TabPanel';

interface Props {
    /**
     * Array of tabs to include on the component
     */
    dataSource: Tab[];
    /**
     * Size of the component
     */
    size?: sizeType;
}

export default function Tabs({
    dataSource,
    size = 'base'
}: Props): React.ReactElement {

    const wrapperRef = useRef<HTMLUListElement>(null);

    const [tabs, setTabs] = useState<Tab[]>([]);
    const [tabSelected, setTabSelected] = useState({
        currentTab: dataSource.length ? 1 : 0,
        noTabs: dataSource.length,
    })

    const handleKeyDown = useCallback((e: { keyCode: number; target: any }): void => {
        //@ts-ignore
        if (wrapperRef.current.contains(e.target)) {
            if (e.keyCode === 39) {
                const nextTab = (tabSelected.currentTab >= 1 && tabSelected.currentTab < tabSelected.noTabs)
                    ? tabSelected.currentTab + 1
                    : 1;
                setTabSelected((prevTabSelected) => ({ ...prevTabSelected, currentTab: nextTab }));
            } else if (e.keyCode === 37) {
                const prevTab = (tabSelected.currentTab > 1 && tabSelected.currentTab <= tabSelected.noTabs)
                    ? tabSelected.currentTab - 1
                    : tabSelected.noTabs;
                setTabSelected((prevTabSelected) => ({ ...prevTabSelected, currentTab: prevTab }));
            }
        }
    }, [tabSelected, wrapperRef]);

    useEffect(() => {
        if (dataSource) {
            const tabs = dataSource.map((item, idx) => ({
                children: item.children,
                icon: item.icon,
                index: idx,
                panelId: `${item.title}-panel`,
                tabId: `${item.title}-tab`,
                title: item.title,
                totalTabs: dataSource.length,
            }));
            setTabs(tabs);
        }
    }, [dataSource]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [handleKeyDown])

    const tabButtonSize = useCallback(() => {
        const sizes = {
            large: 'h-12',
            base: ' h-10',
            small: 'h-8'
        }
        return sizes[size];
    }, [size])


    return (
        <section className='flex flex-col h-full'>
            <motion.ul
                layout
                className={`flex items-center border-b border-slate-200 tabs-buttons-scrollbar shrink-0 ${tabButtonSize()}`}
                role='tablist'
                ref={wrapperRef}
            >
                {
                    tabs.map(tab =>
                        <TabButton
                            key={tab.title}
                            setTabSelected={setTabSelected}
                            size={size}
                            tab={tab}
                            tabSelected={tabSelected}
                        />
                    )
                }
            </motion.ul>
            <motion.div layout className='h-full tabs-panel-scrollbar'>
                {
                    tabs.map(tab =>
                        <TabPanel
                            key={tab.title}
                            setTabSelected={setTabSelected}
                            size={size}
                            tab={tab}
                            tabSelected={tabSelected}
                        />
                    )
                }
            </motion.div>
        </section>
    )
}