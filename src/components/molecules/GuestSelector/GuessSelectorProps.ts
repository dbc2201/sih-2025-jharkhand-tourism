export interface GuestSelectorProps {
    /**
     * Initial number of adults
     * Default: 1
     */
    adults?: number;

    /**
     * Initial number of children
     * Default: 0
     */
    children?: number;

    /**
     * Callback triggered whenever guest count changes
     * Returns updated adults and children count
     */
    onChange?: (data: {
        adults: number;
        children: number;
    }) => void;
}