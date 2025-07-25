import FuzzyText from '../../components/FuzzyText/FuzzyText';

const hoverIntensity = 0.5;
const enableHover = true;

const Error = () => {
    return (
        <div>
            <FuzzyText
                baseIntensity={0.2}
                hoverIntensity={hoverIntensity}
                enableHover={enableHover}
            >
                Under Construction :(
            </FuzzyText>
        </div>
    );
};

export default Error;