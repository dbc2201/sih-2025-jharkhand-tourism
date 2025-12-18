/**
 * AmenityItemProps Interface
 *
 * Defines the props for the AmenityItem component, which displays an amenity
 * feature with an icon and descriptive label. Used in property listings,
 * accommodation details, and feature showcases.
 *
 * @interface AmenityItemProps
 *
 * @example
 * // Basic amenity item with required props only
 * const props: AmenityItemProps = {
 *   icon: "wifi",
 *   label: "Free WiFi"
 * };
 *
 * @example
 * // Amenity item with custom sizing and color
 * const props: AmenityItemProps = {
 *   icon: "pool",
 *   label: "Swimming Pool",
 *   iconSize: "lg",
 *   iconColor: "blue"
 * };
 *
 * @example
 * // Amenity item with custom styling and click handler
 * const props: AmenityItemProps = {
 *   icon: "parking",
 *   label: "Free Parking",
 *   iconVariant: "filled",
 *   className: "custom-amenity-class",
 *   onClick: () => console.log("Parking amenity clicked")
 * };
 */

import type { IconProps } from '../../atoms/Icon/IconProps';

export interface AmenityItemProps {
	/**
	 * Name of the Material Symbol icon to display.
	 * Must be a valid Material Symbol icon name.
	 * @type {string}
	 * @example "wifi", "parking", "pool", "restaurant"
	 */
	icon: string;

	/**
	 * Display label text shown below the icon.
	 * Typically describes the amenity feature.
	 * @type {string}
	 * @example "Free WiFi", "Swimming Pool", "24/7 Parking"
	 */
	label: string;

	/**
	 * Icon size control (optional).
	 * Inherits size options from the Icon component.
	 * Defaults to 'md' if not specified.
	 * @type {IconProps['size']}
	 * @optional
	 * @example "sm", "md", "lg"
	 */
	iconSize?: IconProps['size'];

	/**
	 * Icon color variant (optional).
	 * Applies color styling to the icon based on the Icon component's color palette.
	 * If not specified, inherits the default color.
	 * @type {IconProps['color']}
	 * @optional
	 * @example "primary", "secondary", "blue", "green"
	 */
	iconColor?: IconProps['color'];

	/**
	 * Icon style variant (optional).
	 * Controls the visual presentation of the icon (outlined, rounded, sharp, etc.).
	 * Defaults to 'outlined' if not specified.
	 * @type {IconProps['variant']}
	 * @optional
	 * @example "outlined", "rounded", "sharp"
	 */
	iconVariant?: IconProps['variant'];

	/**
	 * Additional CSS classes (optional).
	 * Allows custom styling to be applied to the component container.
	 * Classes are merged with the component's default styles.
	 * @type {string}
	 * @optional
	 * @example "custom-class", "custom-class-1 custom-class-2"
	 */
	className?: string;

	/**
	 * Click event handler (optional).
	 * Callback function invoked when the amenity item is clicked.
	 * Can be used to trigger actions, analytics, or filtering.
	 * @type {() => void}
	 * @optional
	 * @example () => handleAmenityFilter('wifi')
	 */
	onClick?: () => void;
}

