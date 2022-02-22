import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import yaml, { YAMLException } from "js-yaml";
import Typography from "@mui/material/Typography";

const Upload: React.FC = () => {
	const [yamlInput, setYamlInput] = useState<string>("");
	const [error, setError] = useState<string | undefined>(undefined);

	const onSubmit = () => {
		try {
			const yamlFromText: Container = yaml.load(yamlInput) as Container;
      setError(undefined);
			console.log(yamlFromText);
		} catch (err: any) {
			const error = err as YAMLException;
			console.log(`error`, error);
			setError(error.reason);
		}
	};

	return (
		<Box
			component="form"
			sx={{
				"& > :not(style)": { m: 1, width: "98%" },
			}}
			noValidate
			autoComplete="off"
		>
			<Grid container spacing={2}>
				<Grid item xs={12} key="textarea">
					<TextField
						size="medium"
						label="Yaml"
						variant="outlined"
						multiline
						rows={20}
						maxRows={200}
						fullWidth={true}
						InputProps={{ style: { fontFamily: "monospace" } }}
						onChange={(e) => setYamlInput(e.target.value)}
					/>
				</Grid>
				<Grid item xs={2} key="textarea1">
					<Button
						color={error !== undefined ? "error" : "primary"}
						variant="contained"
						onClick={() => onSubmit()}
					>
						Submit
					</Button>
				</Grid>
				<Grid item xs={8} key="textarea2">
					<Typography variant="body1" gutterBottom color="error">
						{error}
					</Typography>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Upload;
