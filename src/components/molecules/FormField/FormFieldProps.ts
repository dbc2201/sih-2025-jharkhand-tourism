import type {ChangeEvent} from 'react';

/**
 * Props for the FormField component
 */
export interface FormFieldProps {
    /**
     * Label text to display above the input field
     */
    label?: string;

    /**
     * Name attribute for the input field (also used as the id)
     * @required
     */
    name: string;

    /**
     * Type of the input field
     * @default 'text'
     */
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local';

    /**
     * Placeholder text for the input field
     * @default ''
     */
    placeholder?: string;

    /**
     * Current value of the input field (controlled component)
     * @default ''
     */
    value?: string;

    /**
     * Change handler function called when input value changes
     */
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;

    /**
     * Error message to display below the input field
     * When provided, the input border will turn red
     * @default ''
     */
    error?: string;

    /**
     * Whether the field is required
     * Displays a red asterisk next to the label when true
     * @default false
     */
    required?: boolean;

    /**
     * Whether the input field is disabled
     * @default false
     */
    disabled?: boolean;

    /**
     * Additional CSS classes to apply to the container div
     * @default ''
     */
    className?: string;
}

/**
 * Example usage:
 *
 * ```tsx
 * import { FormField } from './FormField';
 *
 * const MyForm = () => {
 *   const [email, setEmail] = useState('');
 *   const [error, setError] = useState('');
 *
 *   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
 *     setEmail(e.target.value);
 *     setError('');
 *   };
 *
 *   return (
 *     <FormField
 *       label="Email Address"
 *       name="email"
 *       type="email"
 *       placeholder="you@example.com"
 *       value={email}
 *       onChange={handleChange}
 *       error={error}
 *       required
 *     />
 *   );
 * };
 * ```
 */