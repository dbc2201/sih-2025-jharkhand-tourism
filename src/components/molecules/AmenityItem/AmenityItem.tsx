import { Icon } from '../../atoms/Icon';
import type { AmenityItemProps } from './AmenityItemProps';

/**
 * AmenityItem Component
 *
 * A flexible, reusable component that displays an amenity feature with an icon and descriptive label.
 * Commonly used in property listings, accommodation details, or feature showcases to visually represent
 * available amenities (e.g., WiFi, parking, kitchen, etc.).
 *
 * @component
 *
 * @example
 * // Basic amenity display
 * <AmenityItem
 *   icon="wifi"
 *   label="Free WiFi"
 * />
 *
 * @example
 * // With custom styling and click handler
 * <AmenityItem
 *   icon="parking"
 *   label="Free Parking"
 *   iconSize="lg"
 *   iconColor="blue"
 *   onClick={() => handleAmenityClick('parking')}
 *   className="custom-class"
 * />
 *
 * @param {AmenityItemProps} props - The component props
 * @param {string} props.icon - The name of the icon to display (passed to Icon component)
 * @param {string} props.label - The text label describing the amenity
 * @param {string} [props.iconSize='md'] - The size of the icon ('sm' | 'md' | 'lg')
 * @param {string} [props.iconColor] - The color of the icon (optional, inherits default if not provided)
 * @param {string} [props.iconVariant='outlined'] - The style variant of the icon ('outlined' | 'filled' | etc.)
 * @param {string} [props.className=''] - Additional CSS classes for custom styling of the container
 * @param {() => void} [props.onClick] - Callback function triggered when the component is clicked
 *
 * @returns {JSX.Element} A styled container with centered icon and label, interactive on click
 *
 * @accessibility
 * - Uses `role="img"` for semantic meaning
 * - Uses `aria-label={label}` to provide accessible name for screen readers
 * - Fully keyboard accessible via natural button/click handler behavior
 */
export const AmenityItem = ({
	icon,
	label,
	iconSize = 'md',
	iconColor,
	iconVariant = 'outlined',
	className = '',
	onClick
}: AmenityItemProps) => {
	return (
		// Container: flex column layout, centered items, with hover opacity effect for visual feedback
		<div
			className={`flex flex-col items-center gap-2 p-2 cursor-pointer transition-all hover:opacity-75 ${className}`}
			onClick={onClick}
			role="img"
			aria-label={label}
		>
			{/* Icon: customizable with size, color, and variant */}
			<Icon
				name={icon}
				size={iconSize}
				color={iconColor}
				variant={iconVariant}
			/>
			{/* Label: small, medium-weight text centered below the icon */}
			<span className="text-sm font-medium text-center">{label}</span>
		</div>
	);
};
