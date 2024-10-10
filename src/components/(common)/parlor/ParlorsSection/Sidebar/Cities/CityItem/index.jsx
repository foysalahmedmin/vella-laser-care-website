const CityItem = ({ item, lang }) => {
  // const dispatch = useDispatch();
  // const { city } = useSelector((state) => state.parlor_filter);
  const { _id, name, name_bn, total } = item;
  return (
    <li className="text-sm">
      <label className="flex cursor-pointer items-center justify-between px-4 py-1">
        <div className="flex items-center gap-2">
          <input
            className="radio peer"
            value={_id}
            // checked={city === _id}
            // onChange={(e) => dispatch(SetParlorFilterCity(e.target.value))}
            type="checkbox"
          />
          <span className="capitalize peer-checked:font-semibold">
            {lang === "en" ? name : name_bn}
          </span>
        </div>
        {total > 0 && (
          <span className="text-xs text-muted-foreground">({total})</span>
        )}
      </label>
    </li>
  );
};

export default CityItem;
