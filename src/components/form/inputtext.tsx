import TextField from "@mui/material/TextField";
import {
	Controller,
	UseFormRegister,
	Control,
	FieldValues,
} from "react-hook-form";
import React from "react";

const FormInputText: React.FC<{
	name?: string;
	control: Control<FieldValues, any>;
	label: string;
	register: UseFormRegister<any>;
	endAdornment?: React.ReactNode;
}> = ({ name, control, label, register, endAdornment }) => {
	return (
		<Controller
			control={control}
			{...register(label)}
			render={({ field: { onChange, value } }) => (
				<TextField
					onChange={onChange}
					value={value}
					id={label}
					color="primary"
					label={label}
					InputProps={{
						endAdornment: endAdornment,
					}}
				/>
			)}
		/>
	);
};

export default FormInputText;
