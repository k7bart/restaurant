import { useEffect, useState, type RefObject } from "react";
import type { Category } from "@k7bart/restaurant-shared-types";

const ROOT_MARGIN = "-80px 0px -60% 0px";

export function useActiveCategory(
    categories: Category[],
    categoryRefs: RefObject<Record<string, HTMLDivElement | null>>,
) {
    const [activeCategory, setActiveCategory] = useState(categories[0]?.name);

    useEffect(() => {
        if (!categories.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) => b.intersectionRatio - a.intersectionRatio,
                    )[0];

                if (!visible?.target.id) return;

                setActiveCategory(visible.target.id as Category["name"]);
            },
            { rootMargin: ROOT_MARGIN },
        );

        categories.forEach((category) => {
            const el = categoryRefs.current?.[category.name];
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [categories, categoryRefs]);

    return [activeCategory, setActiveCategory] as const;
}
