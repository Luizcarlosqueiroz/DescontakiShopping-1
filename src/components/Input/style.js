import styled from 'styled-components';

export const MyInput = styled.input`
	width: 500px;
	height: 40px;
	border: 0.5px solid;
	border-radius: 3px;
	padding: 0 0 0 20px;
	margin: 5px 0 0 0;
	color: rgb(54, 53, 53);
	background-color: #dad8d8;
	font-size: 18px;
	&:focus {
		background-color: #ededed;
		border: 1px solid #ec6533;
	}
	&::placeholder {
		color: #a6a6a6;
	}
`
export const Span = styled.span`
	text-align: initial;
	color: red;
	padding: 4px 0 2px 2px;
`