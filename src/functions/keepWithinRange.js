export default function keepWithinRange (value, min, max) {
    return  Math.max(min, Math.min(value, max));
};
