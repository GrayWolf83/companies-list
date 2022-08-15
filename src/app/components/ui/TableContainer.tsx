import styled from 'styled-components'

const TableContainer = styled.div`
	position: relative;
	width: 100%;
	min-width: 320px;
	min-height: 80vh;
	max-height: 80vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 5px;
	margin: 5px;
	border: 1px solid #fff;
	overflow: auto;

	@media (max-width: 768px) {
		height: 40vh;
		min-height: 40vh;
	}
`

export default TableContainer
