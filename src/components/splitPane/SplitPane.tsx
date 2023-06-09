'use client'

// Libraries imports
import 'allotment/dist/style.css';
import { Allotment } from 'allotment';

// Local imports
import styles from './style/splitPane.module.css';

interface Props {
    /**
    * An array of initial sizes of the panes.
    */
    defaultSizes?: number[];
    /**
    * Maximum size of any pane.
    */
    maxSize?: number;
    /**
    * Minimum size of any pane.
    */
    minSize?: number;
    /**
    * Resize each view proportionally when resizing container. Default set to true.
    */
    proportionalLayout?: boolean;
    /**
    * Whether to render a separator between panes. Default set to true.
    */
    separator?: boolean;
    /**
    * Enable snap to zero for all panes. Default set to false.
    */
    snap?: boolean;
    /**
    * Direction to split. If true then the panes will be stacked vertically, otherwise they will be stacked horizontally.
    */
    vertical?: boolean;
    /**
    * Callback that is fired whenever the user double clicks a sash
    */
    onReset?: () => void;
    /**
    * Callback that is fired whenever the user changes the visibility of a pane by snapping. Note that this will only be called if the new value is different from the current visible prop on the Pane.
    */
    onVisibleChange?: () => void;
    /**
     * 	Whether this pane should be visible.
     */
    visible?: boolean;
    /**
     * Component left panel
     */
    left?: JSX.Element;
    /**
     * Component center panel
     */
    center?: JSX.Element;
    /**
     * Component right panel
     */
    right?: JSX.Element;
    /**
     * Left pane preferred size
     */
    leftPanePreferredSize?: number;
    /**
     * Center pane preferred size
     */
    centerPanePreferredSize?: number;
    /**
     * Right pane preferred size
     */
    rightPanePreferredSize?: number;
}

export const SplitPane = (Props: Props) => {
    const {
        visible, left, center, right,
        leftPanePreferredSize, centerPanePreferredSize, rightPanePreferredSize,
        ...rest
    } = Props;

    return (
        <div className='flex h-screen w-full'>
            <Allotment
                className={styles.root + ' ' + styles.splitViewContainer}
                {...rest}
            >
                <Allotment.Pane preferredSize={leftPanePreferredSize} >
                    {left}
                </Allotment.Pane>
                <Allotment.Pane preferredSize={centerPanePreferredSize} className={styles.centerPane}>
                    {center}
                </Allotment.Pane>
                <Allotment.Pane preferredSize={rightPanePreferredSize} visible={visible} className={styles.rightPane} >
                    {right}
                </Allotment.Pane>
            </Allotment>
        </div>
    );
};

export default SplitPane;