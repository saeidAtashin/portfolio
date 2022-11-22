import React from "react";
import Particles from "react-tsparticles";
import styled from "styled-components";

import configDark from "../config/particlesjs-config.json";
import configLight from "../config/particlesjs-config-light.json";

const Box = styled.div`
background-color: black;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
`;

const ParticleComponent = (props) => {
  return (
    <Box>
      <Particles
      params={{
        'particles':{
            'number':{
                'value':150
            },
            "size":{
                "value": 3
            }
        },
        "interactivity":{
            'events':{
                'onhover':{
                    'enable': true,
                    'mode': 'repulse'
                }
            }
        }
      }}
      />
    {/* //   style={{ position: "absolute", top: 0 }}
    //   params={props.theme === "light" ? configLight : configDark}
       */}
    </Box>
  );
};

export default ParticleComponent;
