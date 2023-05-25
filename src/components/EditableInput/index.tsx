import React, { useState } from "react";

interface Props {
  children: React.ReactElement;
  value: string | undefined;
  setState: React.Dispatch<React.SetStateAction<string>>;
  update: () => void;
}

export const EditableInput: React.FC<Props> = ({
  children,
  value,
  setState,
  update,
}) => {
  const [editing, setEditing] = useState(false);
  const buttonLabel = editing ? "Save" : "Edit";

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
    update();
  };

  return (
    <div className="flex items-center gap-5">
      {editing ? (
        <div className="form-control w-full max-w-xs">
          <input
            type="text"
            className="input-bordered input"
            value={value}
            onChange={(e) => {
              setState(e.target.value);
            }}
            onBlur={handleSave}
          />
          <label className="label">
            <span className="label-text-alt" />
            <span className="label-text-alt">{value?.length || 0}</span>
          </label>
        </div>
      ) : (
        <>{children}</>
      )}
      <button
        className="btn"
        onClick={() => {
          if (editing) handleSave();
          else handleEdit();
        }}
      >
        {buttonLabel}
      </button>
    </div>
  );
};
