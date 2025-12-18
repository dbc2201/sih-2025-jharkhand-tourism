/**
 * AmenityItem Module Barrel Export
 *
 * This module serves as the public API entry point for the AmenityItem component.
 * It re-exports the component and its type definitions for convenient imports throughout the application.
 *
 * @module components/molecules/AmenityItem
 *
 * @example
 * // Import the component and types from the module
 * import { AmenityItem, type AmenityItemProps } from '@components/molecules/AmenityItem';
 *
 * // Use in a React component
 * const MyComponent = () => (
 *   <AmenityItem
 *     icon="wifi"
 *     label="Free WiFi"
 *     onClick={() => console.log('WiFi clicked')}
 *   />
 * );
 */

/**
 * Re-export the AmenityItem component
 * @see {@link AmenityItem} for component implementation details
 */
export { AmenityItem } from './AmenityItem';

/**
 * Re-export the AmenityItemProps type definition
 * @see {@link AmenityItemProps} for available props and their usage
 */
export type { AmenityItemProps } from './AmenityItemProps';

