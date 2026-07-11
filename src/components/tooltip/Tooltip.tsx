import { type RefObject, useLayoutEffect, useRef, useState } from "react";
import styles from "./Tooltip.module.scss";

type Props = {
    targetRef: RefObject<HTMLElement>;
    text: string;
};

function Tooltip({ targetRef, text }: Props) {
    const [pos, setPos] = useState({ top: 0, left: 0 });
    const [visible, setVisible] = useState(false);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

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

    useLayoutEffect(() => {
        if (!visible || !targetRef.current || !tooltipRef.current) return;

        const updatePosition = () => {
            const targetRect = targetRef.current!.getBoundingClientRect();
            const tooltipRect = tooltipRef.current!.getBoundingClientRect();
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

export default Tooltip;
