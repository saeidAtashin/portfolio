import Particles from "react-tsparticles";
import configLight from "../config/particlesjs-config-light.json";
import configDark from "../config/particlesjs-config.json";
export default function App(props) {
  return (
    <div>
      <Particles options={props.theme === 'light' ?  configDark : configLight} />
    </div>
  );
}
