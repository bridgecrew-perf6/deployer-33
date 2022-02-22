import React, { useState } from "react";
// import Breadcrumb from "../../components/breadcrumb";
import GridC from "../../components/grid/center";
import {
	useForm,
	UseFormReturn,
	useFieldArray,
	SubmitHandler,
	Controller,
} from "react-hook-form";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FormInputText from "../../components/form/inputtext";
import FormSelect from "../../components/form/select";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

import JsonToYaml from "../../components/jsontoyaml";
// import YAML from "json-to-pretty-yaml";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "left",
	color: theme.palette.text.secondary,
}));

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
	const { handleSubmit, control } = useForm();
	const [state, setState] = useState<Container>({
		name: "",
		image: "",
		imagePullPolicy: "",
		args: [""],
		ports: [
			{
				containerPort: 1234,
			},
		],
	});

	const { fields, append, remove } = useFieldArray({
		control,
		name: "args",
	});

	const onSubmit = (data: any) => {
		console.log(data);
		setState({
			...state,
			...data,
		});
	};

	return (
		// <Breadcrumb crumbs={crumbs} />

		<GridC>
			<Form<any> onSubmit={onSubmit}>
				{({ register }) => (
					// <Box sx={{ flexGrow: 1 }}>
					<Item>
						<Grid container spacing={2}>
							<Grid item xs={6} key="leftGrid">
								<Grid container spacing={2}>
									<Grid item xs={12}>
										<FormInputText
											control={control}
											register={register}
											label="name"
										/>
									</Grid>
									<Grid item xs={12}>
										{/* note, this does not include the tag */}

										<FormInputText
											control={control}
											register={register}
											label="image"
										/>
									</Grid>
									<Grid item xs={12}>
										{/* https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy */}
										<FormSelect
											control={control}
											register={register}
											label="imagePullPolicy"
											options={["Always", "IfNotPresent", "Never"]}
										/>
										{/* <Select
											{...register("imagePullPolicy")}
											options={[
												{ label: "Always", value: "Always" },
												{ label: "IfNotPresent", value: "IfNotPresent" },
												{ label: "Never", value: "Never" },
											]}
										/> */}
									</Grid>
									<Grid item xs={12}>
										{fields.map((item, index) => (
											<div key={item.id}>
												{/* <input {...register(`test.${index}.firstName`)} />
													<Controller
														render={({ field }) => <input {...field} />}
														name={`test.${index}.lastName`}
														control={control}
													/> */}
												<Controller
													control={control}
													key={item.id}
													defaultValue=""
													{...register("args")}
													render={({ field: { onChange, value } }) => (
														<TextField
															onChange={onChange}
															value={value.arg}
															color="primary"
															label="arg"
															InputProps={{
																endAdornment: (
																	<IconButton onClick={() => remove(index)}>
																		<AddCircleIcon />
																	</IconButton>
																),
															}}
														/>
													)}
												/>
											</div>
										))}
										<button type="button" onClick={() => append({ arg: "" })}>
											append
										</button>
									</Grid>
									<Grid item xs={12}>
										<Button onClick={handleSubmit(onSubmit)}>Submit</Button>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={6} key="rightGrid">
								<Grid container spacing={0} sx={{ height: "100%" }}>
									<Item>
										output
										<div style={{ color: "black" }}>
											{state && <JsonToYaml json={state} />}
										</div>
									</Item>
								</Grid>
							</Grid>
						</Grid>
					</Item>
					// </Box>
				)}
			</Form>
		</GridC>
	);
};

export default Config;
