const SkinConcernItem = ({ item }) => {
  const { name, total } = item;
  return (
    <li className="text-sm">
      <label className="flex cursor-pointer items-center justify-between px-4 py-1">
        <div className="flex items-center gap-2">
          <input className="radio peer" type="checkbox" />
          <span className="capitalize peer-checked:font-semibold">{name}</span>
        </div>
        {total && (
          <span className="text-xs text-muted-foreground">({total})</span>
        )}
      </label>
    </li>
  );
};

export default SkinConcernItem;
