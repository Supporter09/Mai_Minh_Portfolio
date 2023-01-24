import React from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip'

import './SkillDescTooltip.scss';

const SkillDescTooltip = (work) => {

    return (
        <>
            <ReactTooltip
                id={work.work}
                effect="solid"
                arrowColor="#fff"
                className="skills-tooltip2"
            >
                {work.work}
            </ReactTooltip>
        </>
    );
};

export default SkillDescTooltip;
