import React, { useState, useEffect } from "react";
import YAML from "yaml";

const JsonToYaml: React.FC<{
	json: any;
}> = ({ json }) => {
	const [component, setComponent] = useState<JSX.Element>();

	useEffect(() => {
		const doc = new YAML.Document();
		doc.contents = json;
		console.log(doc.toString());
		const doc2array = doc.toString().split("\n");
		for (let line of doc2array) {
		}
		// const components: JSX.Element[] = [];
		// for (const [key, value] of Object.entries(json)) {
		// 	console.log(key, value);
		// 	components.push(
		// 		<p>
		// 			{key} {value}
		// 		</p>
		// 	);
		// }
		// console.log(components);
		// setComponent(<div>{components.join()}</div>);
		setComponent(
			<div>
				{doc2array.map((line) => (
					<p>{line}</p>
				))}
			</div>
		);
	}, [json]);

	return <div>{component}</div>;
};

export default JsonToYaml;
