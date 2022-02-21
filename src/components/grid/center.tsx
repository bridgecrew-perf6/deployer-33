import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

// .center {
//   margin: 0;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   -ms-transform: translate(-50%, -50%);
//   transform: translate(-50%, -50%);
// }

const GridCentered: React.FC<{
	children?: React.ReactNode;
}> = ({ children }) => {
	return (
		<Container maxWidth="md">
			<Box
				sx={{
					bgcolor: "#cfe8fc",
          display: "flex",
          flexWrap: 'wrap',
          padding: 2,
					height: "auto",
					margin: 0,
					position: "absolute",
					top: "10vh",
					// transform: "translate(-20%, -20%)",
				}}
			>
				<div>{children}</div>
			</Box>
		</Container>
	);
};

export default GridCentered;
