import React from "react";
// import Breadcrumb from "../../components/breadcrumb";
import GridC from "../../components/grid/center";
import { useForm, UseFormReturn, SubmitHandler } from "react-hook-form";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FormInputText from "../../components/form/inputtext";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

type InputProps = React.DetailedHTMLProps<
	React.InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
>;

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

type Option = {
	label: React.ReactNode;
	value: string | number | string[];
};

type SelectProps = React.DetailedHTMLProps<
	React.SelectHTMLAttributes<HTMLSelectElement>,
	HTMLSelectElement
> & { options: Option[] };

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
	({ options, ...props }, ref) => (
		<select ref={ref} {...props}>
			{options.map(({ label, value }) => (
				<option value={value}>{label}</option>
			))}
		</select>
	)
);

type FormProps<TFormValues> = {
	onSubmit: SubmitHandler<TFormValues>;
	children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
};

const Form = <TFormValues extends Record<string, any> = Record<string, any>>({
	onSubmit,
	children,
}: FormProps<TFormValues>) => {
	const methods = useForm<TFormValues>();
	return (
		<form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>
	);
};

// const prevs: Page[] = [];
// const current: Page = {
// 	name: "config",
// 	linkTo: "config",
// };
// const crumbs: Crumbs = {
// 	prevs,
// 	current,
// };

const Config: React.FC = () => {
	// const onSubmit = (data: Container) => console.log(data);
	const onSubmit = (data: any) => console.log(data);
	const { handleSubmit, control } = useForm();
	return (
		// <Breadcrumb crumbs={crumbs} />

		<GridC>
			<Form<Container> onSubmit={onSubmit}>
				{({ register }) => (
					<Box sx={{ flexGrow: 1 }}>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<Item>
									<FormInputText
										control={control}
										register={register}
										label="name"
									/>
								</Item>
							</Grid>
							<Grid item xs={12}>
								<Item>
									{/* note, this does not include the tag */}

									<FormInputText
										control={control}
										register={register}
										label="image"
									/>
								</Item>
							</Grid>
							<Grid item xs={12}>
								<Item>
									{/* https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy */}
									<Select
										{...register("imagePullPolicy")}
										options={[
											{ label: "Always", value: "Always" },
											{ label: "IfNotPresent", value: "IfNotPresent" },
											{ label: "Never", value: "Never" },
										]}
									/>
								</Item>
							</Grid>
							<Grid item xs={12}>
								<Item>
									<FormInputText
										control={control}
										register={register}
										label="args"
										endAdornment={
											<IconButton>
												<AddCircleIcon />
											</IconButton>
										}
									/>
								</Item>
							</Grid>
							<Button onClick={handleSubmit(onSubmit)}>Submit</Button>
						</Grid>
					</Box>
				)}
			</Form>
		</GridC>
	);
};

export default Config;
