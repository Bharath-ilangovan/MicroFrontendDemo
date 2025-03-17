// import { div, Box, input, Button } from '@mui/material'
// import { GridItem } from '../../ui-components/styledcomponents'
import {
	useMasterDataAppDispatch,
	useMasterDataAppSelector,
} from "../../hooks/index";
import { selectSkills } from "../../store/features/skills/SkillsSlice";
import { Suspense, lazy, useEffect, useState } from "react";
import { addSkill, getAllSKills } from "../../store/features/skills/SkillsAPI";

const SkillsDataGrid = lazy(() => import("./GetAllSkills"));

const initialSkillState: IAddSkill = {
	id: 0,
	name: undefined,
	description: undefined,
};

const Skills = () => {
	const { data, isError, isLoading, error } =
		useMasterDataAppSelector(selectSkills);
	const dispatch = useMasterDataAppDispatch();

	const [skillState, setSkillState] = useState<IAddSkill>(initialSkillState);

	const handleSkillOnChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		const { name, value } = event.target;
		setSkillState((prevState) => ({
			...prevState,
			[name]: value, // Dynamically update the key based on the input's name
		}));
	};

	const handleAddSkill = async () => {
		try {
			if (!skillState.name) {
				throw new Error("Code should not be empty");
			} else if (!skillState.description) {
				throw new Error("Description should not be empty");
			} else {
				// alert(`${skillState.code} - ${skillState.description}`);
				const res = await dispatch(addSkill(skillState));
				alert(res);
				setSkillState(initialSkillState);
			}
		} catch (e: unknown) {
			// Type guard to check if the error is an instance of Error
			if (e instanceof Error) {
				alert(e.message); // Show the error message
			} else {
				alert("An unknown error occurred"); // Fallback for unknown errors
			}
		} finally {
			// setSkillState(initialSkillState);
			dispatch(getAllSKills());
		}
	};

	useEffect(() => {
		dispatch(getAllSKills());
		return () => {
			// unmount
		};
	}, []);

	return (
		<div style={{ flexGrow: 1 }}>
			{/* component 1 - form*/}
			<div>
				<div>
					<div>
						<input
							name="name"
							value={skillState.name || ""}
							placeholder="Code"
							onChange={handleSkillOnChange}
						/>
					</div>
				</div>
				<div>
					<div>
						<input
							name="description"
							value={skillState.description || ""}
							placeholder="Description"
							onChange={handleSkillOnChange}
						/>
					</div>
				</div>
				{/* to handle space */}
				<div>
					<div></div>
				</div>
				{/* Add SKills */}
				<div>
					<div>
						<button onClick={handleAddSkill}>Add</button>
					</div>
				</div>
			</div>
			{/* component 2 - Data Grid */}
			<div>
				{isError && <div>{JSON.stringify(error)}</div>}
				<Suspense fallback={<h3>loading...</h3>}>
					<SkillsDataGrid />
				</Suspense>
			</div>
		</div>
	);
};

export default Skills;
