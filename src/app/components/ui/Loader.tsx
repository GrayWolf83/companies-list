import React from 'react'
import styled from 'styled-components'

const LoaderBlock = styled.div`
	width: 100%;
	padding-top: 30vh;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: 768px) {
		padding-top: 15vh;
	}
`

const Block = styled.div`
	perspective: 120px;
`
const Plane = styled.div`
	width: 3em;
	height: 3em;
	background-color: #fa6334;
	transform: rotate(0);
	animation: flip 1s infinite;

	@keyframes flip {
		50% {
			transform: rotateY(180deg);
		}
		100% {
			transform: rotateY(180deg) rotateX(180deg);
		}
	}
`

const Loader = () => {
	return (
		<LoaderBlock>
			<Block>
				<Plane />
			</Block>
		</LoaderBlock>
	)
}

export default Loader
