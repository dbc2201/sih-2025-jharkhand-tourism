import { useState, type ChangeEvent, type MouseEvent } from 'react';

// FormField Props Interface
interface FormFieldProps {
	label?: string;
	name: string;
	type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local';
	placeholder?: string;
	value?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	error?: string;
	required?: boolean;
	disabled?: boolean;
	className?: string;
}

export const FormField = ({
							  label,
							  name,
							  type = 'text',
							  placeholder = '',
							  value = '',
							  onChange,
							  error = '',
							  required = false,
							  disabled = false,
							  className = ''
						  }: FormFieldProps) => {
	return (
		<div className={`w-full ${className}`}>
			{/* Label */}
			{label && (
				<label
					htmlFor={name}
					className="block text-sm font-medium text-gray-700 mb-1"
				>
					{label}
					{required && <span className="text-red-500 ml-1">*</span>}
				</label>
			)}

			{/* Input */}
			<input
				id={name}
				name={name}
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				required={required}
				disabled={disabled}
				className={`
          w-full px-3 py-2 
          border rounded-md 
          text-gray-900 
          placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          disabled:bg-gray-100 disabled:cursor-not-allowed
          ${error ? 'border-red-500' : 'border-gray-300'}
        `}
			/>

			{/* Error Message */}
			{error && (
				<p className="mt-1 text-sm text-red-600">
					{error}
				</p>
			)}
		</div>
	);
};

// Type definitions for the demo
interface FormData {
	email: string;
	password: string;
	username: string;
}

type FormErrors = Record<string, string>;

// Demo Component
export default function FormFieldDemo() {
	const [formData, setFormData] = useState<FormData>({
		email: '',
		password: '',
		username: ''
	});

	const [errors, setErrors] = useState<FormErrors>({});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));

		// Clear error when user starts typing
		if (errors[name]) {
			setErrors(prev => ({ ...prev, [name]: '' }));
		}
	};

	const validateForm = (): FormErrors => {
		const newErrors: FormErrors = {};

		if (!formData.username) {
			newErrors.username = 'Username is required';
		} else if (formData.username.length < 3) {
			newErrors.username = 'Username must be at least 3 characters';
		}

		if (!formData.email) {
			newErrors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = 'Please enter a valid email address';
		}

		if (!formData.password) {
			newErrors.password = 'Password is required';
		} else if (formData.password.length < 6) {
			newErrors.password = 'Password must be at least 6 characters';
		}

		return newErrors;
	};

	const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const newErrors = validateForm();

		if (Object.keys(newErrors).length === 0) {
			alert('Form submitted successfully!');
			console.log('Form data:', formData);
		} else {
			setErrors(newErrors);
		}
	};

	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
			<div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
				<h2 className="text-2xl font-bold text-gray-900 mb-6">
					Form Field Component Demo
				</h2>

				<div className="space-y-4">
					<FormField
						label="Username"
						name="username"
						type="text"
						placeholder="Enter your username"
						value={formData.username}
						onChange={handleChange}
						error={errors.username}
						required
					/>

					<FormField
						label="Email Address"
						name="email"
						type="email"
						placeholder="you@example.com"
						value={formData.email}
						onChange={handleChange}
						error={errors.email}
						required
					/>

					<FormField
						label="Password"
						name="password"
						type="password"
						placeholder="Enter your password"
						value={formData.password}
						onChange={handleChange}
						error={errors.password}
						required
					/>

					<button
						onClick={handleSubmit}
						className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
					>
						Submit
					</button>
				</div>

				<div className="mt-6 p-4 bg-gray-50 rounded-md">
					<p className="text-sm text-gray-600 font-medium mb-2">Current Form Data:</p>
					<pre className="text-xs text-gray-700 overflow-x-auto">
            {JSON.stringify(formData, null, 2)}
          </pre>
				</div>
			</div>
		</div>
	);
}