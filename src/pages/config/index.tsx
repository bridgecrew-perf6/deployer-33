import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function handleClick(event: any) {
	event.preventDefault();
	console.info("You clicked a breadcrumb.");
}

const Config: React.FC = () => {
	return (
		<div role="presentation" onClick={handleClick}>
			<Breadcrumbs aria-label="breadcrumb">
				<Link underline="hover" color="inherit" href="/">
					<p>MUI</p>
				</Link>
				<Link
					underline="hover"
					color="inherit"
					href="/getting-started/installation/"
				>
					<p>Core</p>
				</Link>
				<Typography color="text.primary">Breadcrumbs</Typography>
			</Breadcrumbs>
		</div>
	);
};

export default Config;
