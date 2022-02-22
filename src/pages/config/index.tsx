import React, { useState } from "react";
// import Breadcrumb from "../../components/breadcrumb";
import GridC from "../../components/grid/center";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import yaml from "js-yaml";
import UploadYaml from "../../components/manifest/upload";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "left",
	color: theme.palette.text.secondary,
}));

const Config: React.FC = () => {
	return (
		// <Breadcrumb crumbs={crumbs} />

		<GridC>
			<Item>
        <h2>Actions</h2>
        {/* <UploadYaml/> */}
      </Item>
		</GridC>
	);
};

export default Config;
