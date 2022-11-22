import "./styles.css";
import Particles from "react-tsparticles";
import config from "../config/particlesjs-config-light.json";
import configLight from "../config/particlesjs-config-light.json";
import configDark from "../config/particlesjs-config.json";
export default function App(props) {
  return (
    <div className="App">
      <Particles options={props.theme === 'light' ?  configDark : configLight} />
      {/* <h1>React-tsParticles</h1> */}
    </div>
  );
}


// import "./styles.css";import Particles from "react-tsparticles";
// import configLight from "../config/particlesjs-config-light.json";
// import configDark from "../config/particlesjs-config.json";
// import styled from "styled-components";

// const Box = styled.div`
// position: absolute;
// top: 0;
// right: 0;
// left: 0;
// bottom: 0;
// z-index: 0;
// `

// export default function ParticleComponent(props) {
//   return (
//     <Box>
//       {/* // bug is here, props not working */}
//       <Particles options={props.theme === 'light' ? configLight : configDark } />
//     </Box>
//   );
// }
