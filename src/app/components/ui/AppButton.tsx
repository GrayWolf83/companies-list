import styled from 'styled-components'

const AppButton = styled.button`
	padding: 5px 10px;
	background-color: #fa6334;
	color: #fff;
	border: none;
	border-radius: 3px;
	font-size: 18px;
	cursor: pointer;

	:hover {
		background-color: #ff8a65;
	}

	:disabled {
		background-color: #ff8a65;
		cursor: auto;
	}
`

export default AppButton
