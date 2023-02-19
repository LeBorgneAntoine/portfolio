import React from "react";
import './Text.style.css';


function Text({primary, secondary, large, medium, small, selectable, children, bold, thin}) {

    return <h5 className={"text " + (primary && 'primary ') + (!selectable && 'noselect ') + (!bold && 'bold ') + (!thin && 'thin ') + (secondary && 'secondary ') + (large && 'large ') + (medium && 'medium ')+ (small && 'small ')}>{children}</h5>

}


export default Text;