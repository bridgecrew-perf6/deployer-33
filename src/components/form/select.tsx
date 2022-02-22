import {
	Controller,
	UseFormRegister,
	Control,
	FieldValues,
} from "react-hook-form";
import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const FormSelect: React.FC<{
	control: Control<FieldValues, any>;
	label: string;
	register: UseFormRegister<any>;
	options: string[];
}> = ({ control, label, register, options }) => {
	return (
		<Controller
			control={control}
			defaultValue={options[0]}
			{...register(label)}
			rules={{ required: `${label} required` }}
			render={({ field: { onChange, value } }) => (
				<Select
					labelId={label}
					value={value}
					label={label}
					onChange={onChange}
				>
					{options.map((option) => (
						<MenuItem value={option}>{option}</MenuItem>
					))}
				</Select>
			)}
		/>
	);
};

export default FormSelect;
