import styled from "@emotion/styled";
import { mediaQuery, Breakpoints } from "../../domain/mediaQuery";

export const MainList = styled.div`
	display: flex;
	flex-direction: column;
	width: calc(100% - (2 * 16px));
	margin: 32px 0 0;
	padding: 16px;
	font-size: 32px;
	background: #fff;
	border-radius: 4px;
	box-shadow: 0 8px 32px #aab;

	${mediaQuery(Breakpoints.md)} {
		max-width: 600px;
		width: 100%;
		margin-top: 36px;
	}
`;
