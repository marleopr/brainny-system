import { styled } from 'styled-components';
import '../assets/styled.css'
const ClockLoader = () => {
    return (
        <LoadingContainer>
            <div className="loader"></div>
        </LoadingContainer>
    )
}
export default ClockLoader
const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;