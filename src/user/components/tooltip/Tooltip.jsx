import { useLayoutEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

function Tooltip({ targetRef, children }) {
    const [pos, setPos] = useState({ top: 0, left: 0 });
    const tooltipRef = useRef(null);

    useLayoutEffect(() => {
        if (targetRef.current && tooltipRef.current) {
            const targetRect = targetRef.current.getBoundingClientRect();
            const tooltipRect = tooltipRef.current.getBoundingClientRect();

            setPos({
                top: targetRect.bottom + 8,
                left:
                    targetRect.left +
                    targetRect.width / 2 -
                    tooltipRect.width / 2,
            });
        }
    }, [targetRef]);

    return (
        <div
            ref={tooltipRef}
            style={{ position: "absolute", top: pos.top, left: pos.left }}
            className="tooltip"
        >
            {children}
        </div>
    );
}

Tooltip.propTypes = {
    targetRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
        .isRequired,
    children: PropTypes.node.isRequired,
};

export default Tooltip;
