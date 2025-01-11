import CustomButton from "../../customs/CustomButton";

type ActionsProps = {
  onEdit: () => void;
  onDelete: () => void;
};

const Actions = ({ onEdit, onDelete }: ActionsProps) => {
  const handleEdit = () => {
    onEdit();
  };
  const handleDelete = () => {
    onDelete();
  };

  return (
    <td id="actions" className="w-[10%] text-center px-2 py-3 flex space-x-2">
      <CustomButton type={"primary"} onClick={handleEdit}>
        Edit
      </CustomButton>
      <CustomButton type={"danger"} onClick={handleDelete}>
        Delete
      </CustomButton>
    </td>
  );
};

export default Actions;
