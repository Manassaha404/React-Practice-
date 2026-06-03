export const items = Array.from(
    { length: 30_000_000 },
    (_, i) => ({
      value: i,
      isSelected: i === 30_000_000 - 1,
    })
  );
