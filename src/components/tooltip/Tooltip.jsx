import { useLayoutEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Tooltip.module.scss";

function Tooltip({ targetRef, text }) {
    const [pos, setPos] = useState({ top: 0, left: 0 });
    const [visible, setVisible] = useState(false);
    const tooltipRef = useRef(null);
    const timeoutRef = useRef(null);

    // Hover handling
    useLayoutEffect(() => {
        if (!targetRef.current) return;

        const target = targetRef.current;
        const show = () => {
            timeoutRef.current = setTimeout(() => setVisible(true), 300);
        };
        const hide = () => {
            clearTimeout(timeoutRef.current);
            setVisible(false);
        };

        target.addEventListener("mouseenter", show);
        target.addEventListener("mouseleave", hide);

        return () => {
            target.removeEventListener("mouseenter", show);
            target.removeEventListener("mouseleave", hide);
            clearTimeout(timeoutRef.current);
        };
    }, [targetRef]);

    // Positioning
    useLayoutEffect(() => {
        if (!visible || !targetRef.current || !tooltipRef.current) return;

        const updatePosition = () => {
            const targetRect = targetRef.current.getBoundingClientRect();
            const tooltipRect = tooltipRef.current.getBoundingClientRect();
            setPos({
                top: targetRect.bottom,
                left:
                    targetRect.left +
                    targetRect.width / 2 -
                    tooltipRect.width / 2,
            });
        };

        updatePosition();

        window.addEventListener("scroll", updatePosition, true);
        window.addEventListener("resize", updatePosition);

        const resizeObserver = window.ResizeObserver
            ? new ResizeObserver(updatePosition)
            : null;
        if (resizeObserver) resizeObserver.observe(targetRef.current);

        return () => {
            window.removeEventListener("scroll", updatePosition, true);
            window.removeEventListener("resize", updatePosition);
            if (resizeObserver) resizeObserver.disconnect();
        };
    }, [visible, targetRef]);

    if (!visible) return null;

    return (
        <div
            ref={tooltipRef}
            style={{ top: pos.top, left: pos.left }}
            className={styles.tooltip}
        >
            {text}
        </div>
    );
}

Tooltip.propTypes = {
    targetRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
        .isRequired,
    text: PropTypes.string.isRequired,
};

export default Tooltip;
