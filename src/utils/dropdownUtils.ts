import { Option } from "@k7bart/restaurant-shared-types";

const toDropdownOption = <
    T extends Record<K1 | K2, unknown>,
    K1 extends keyof T,
    K2 extends keyof T,
>(
    option: T,
    keyToLabel: K1,
    keyToValue: K2,
): Option => ({
    label: String(option[keyToLabel]),
    value: String(option[keyToValue]),
});

const transformRawDataToDropdownOptions = <
    T extends Record<K1 | K2, unknown>,
    K1 extends keyof T,
    K2 extends keyof T,
>(
    options: T[],
    keyToLabel: K1,
    keyToValue: K2,
): Option[] => {
    if (!options.length) return [];

    return options.map((option) =>
        toDropdownOption(option, keyToLabel, keyToValue),
    );
};

export { toDropdownOption, transformRawDataToDropdownOptions };
