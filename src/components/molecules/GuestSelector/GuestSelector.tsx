import React, { useState, useEffect } from "react";

/**
 * GuestSelector Component
 * -----------------------
 * Type: Input + Counter
 * Purpose: Select number of guests
 * Fields: Adults, Children
 * Props:
 *  - adults (number)
 *  - children (number)
 *  - onChange ({ adults, children })
 */

interface GuestSelectorProps {
	adults?: number;
	children?: number;
	onChange?: (guests: { adults: number; children: number }) => void;
}

const GuestSelector: React.FC<GuestSelectorProps> = ({ adults = 1, children = 0, onChange }) => {
	const [adultCount, setAdultCount] = useState(adults);
	const [childCount, setChildCount] = useState(children);

	const totalGuests = adultCount + childCount;

	useEffect(() => {
		if (onChange) {
			onChange({ adults: adultCount, children: childCount });
		}
	}, [adultCount, childCount, onChange]);

	return (
		<div className="w-full max-w-sm p-4 bg-white rounded-xl shadow">
			<p className="text-sm font-semibold mb-3">Select number of guests</p>

			{/* Total Guests Input */}
			<div className="mb-4">
				<input
					type="number"
					value={totalGuests}
					readOnly
					className="w-24 text-center border rounded-md py-1"
				/>
				<span className="ml-2 text-xs text-gray-500">Total Guests</span>
			</div>

			{/* Adults Counter */}
			<div className="flex items-center justify-between mb-3">
				<span className="text-sm">Adults</span>
				<div className="flex items-center gap-2">
					<button
						onClick={() => setAdultCount(Math.max(1, adultCount - 1))}
						className="px-3 py-1 border rounded"
					>
						-
					</button>
					<span className="w-6 text-center">{adultCount}</span>
					<button
						onClick={() => setAdultCount(adultCount + 1)}
						className="px-3 py-1 border rounded"
					>
						+
					</button>
				</div>
			</div>

			{/* Children Counter */}
			<div className="flex items-center justify-between">
				<span className="text-sm">Children</span>
				<div className="flex items-center gap-2">
					<button
						onClick={() => setChildCount(Math.max(0, childCount - 1))}
						className="px-3 py-1 border rounded"
					>
						-
					</button>
					<span className="w-6 text-center">{childCount}</span>
					<button
						onClick={() => setChildCount(childCount + 1)}
						className="px-3 py-1 border rounded"
					>
						+
					</button>
				</div>
			</div>
		</div>
	);
}

export default GuestSelector;