export const getRandomColor = (): string => {
  const colors = [
    "text-pink-400",
    "text-yellow-400",
    "text-green-400",
    "text-blue-400",
    "text-purple-400",
    "text-orange-400",
    "text-red-400",
    "text-cyan-400",
    "text-lime-400",
    "text-rose-400",
    "text-amber-400",
    "text-emerald-400",
    "text-indigo-400",
    "text-violet-400",
    "text-fuchsia-400",
    "text-teal-400",
  ];

  // Use Math.random() to get truly random colors on each render
  const colorIndex = Math.floor(Math.random() * colors.length);
  return colors[colorIndex];
};

export const getRandomBackgroundColor = () => {
  const colors = [
    "bg-red-800/10",
    "bg-blue-800/10",
    "bg-green-800/10",
    "bg-yellow-800/10",
    "bg-purple-800/10",
    "bg-pink-800/10",
    "bg-indigo-800/10",
    "bg-teal-800/10",
    "bg-orange-800/10",
    "bg-cyan-800/10",
    "bg-emerald-800/10",
    "bg-violet-800/10",
    "bg-rose-800/10",
    "bg-amber-800/10",
    "bg-lime-800/10",
    "bg-sky-800/10",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};
