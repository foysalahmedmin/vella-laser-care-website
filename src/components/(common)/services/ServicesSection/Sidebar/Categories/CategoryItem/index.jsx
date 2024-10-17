const CategoryItem = ({ item, lang }) => {
  const { _id, name, name_bn, total } = item;
  return (
    <li className="text-sm">
      <label className="flex cursor-pointer items-center justify-between px-4 py-1">
        <div className="flex items-center gap-2">
          <input className="radio peer" value={_id} type="checkbox" />
          <span className="capitalize peer-checked:font-semibold">
            {lang === "en" ? name : name_bn}
          </span>
        </div>
        <span className="text-xs text-muted-foreground">({total || 10})</span>
      </label>
    </li>
  );
};

export default CategoryItem;
