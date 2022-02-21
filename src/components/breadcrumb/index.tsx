import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	textAlign: "center",
	color: theme.palette.text.secondary,
	height: 30,
	lineHeight: "30px",
}));

const Breadcrumb: React.FC<{
	crumbs: Crumbs;
}> = ({ crumbs }) => {
	function handleClick(event: any) {
		event.preventDefault();
		console.info("You clicked a breadcrumb.");
	}

	return (
		<Grid container spacing={2}>
			<Grid item xs={12} key="gridItem">
				<Box
					sx={{
						p: 1,
						// bgcolor: "background.default",
						display: "grid",
						// gridTemplateColumns: { md: "1fr 1fr" },
						gap: 2,
					}}
				>
					<Item key={1} elevation={1} style={{background: "black"}}>
						<div role="presentation" onClick={handleClick}>
							<Breadcrumbs aria-label="breadcrumb">
								{crumbs.prevs.map((page: Page) => (
									<Link underline="hover" color="inherit" href={page.linkTo}>
										<p style={{color: "black"}}>{page.name}</p>
									</Link>
								))}
								<Typography color="text.primary">
									{crumbs.current.name}
								</Typography>
							</Breadcrumbs>
						</div>
					</Item>
				</Box>
			</Grid>
		</Grid>
	);
};

export default Breadcrumb;
