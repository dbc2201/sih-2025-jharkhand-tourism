import type {AvatarProps} from './AvatarProps';
/**
 * Avatar component for displaying user profile images or placeholders
 *
 * @param props - Component props
 * @returns Avatar component
 */
export const Avatar = ({
					src = "https://placehold.co/64x64?text=DB",
					alt = 'Avatar',
					size = 'md',
					shape = 'circle',
					status,
					placeholder,
					ring = false,
					ringColor = 'ring-primary',
					className = ''
				}: AvatarProps) => {
	// Size mapping
	const sizeClasses = {
		xs: 'w-8',
		sm: 'w-12',
		md: 'w-16',
		lg: 'w-24',
		xl: 'w-32'
	};

	// Shape mapping
	const shapeClasses = {
		circle: 'rounded-full',
		rounded: 'rounded-xl',
		square: 'rounded'
	};

	// Placeholder text size mapping
	const textSizeClasses = {
		xs: 'text-xs',
		sm: 'text-sm',
		md: 'text-base',
		lg: 'text-xl',
		xl: 'text-3xl'
	};

	// Build avatar container classes
	const avatarClasses = [
		'avatar',
		status === 'online' && 'avatar-online',
		status === 'offline' && 'avatar-offline',
		placeholder && 'avatar-placeholder',
		className
	].filter(Boolean).join(' ');

	// Build inner div classes
	const innerClasses = [
		sizeClasses[size],
		shapeClasses[shape],
		ring && `ring-2 ${ringColor} ring-offset-base-100 ring-offset-2`,
		placeholder && 'bg-neutral text-neutral-content',
		!placeholder && 'bg-base-300'
	].filter(Boolean).join(' ');

	return (
		<div className={avatarClasses}>
			<div className={innerClasses}>
				{placeholder ? (<span className={textSizeClasses[size]}>{placeholder}</span>) : (
					<img src={src} alt={alt}/>)}
			</div>
		</div>
	);
};