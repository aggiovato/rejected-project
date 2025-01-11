import { ExtractDataReturn } from "../../../utils/types/types";

type SupplierProps = {
  tktData: ExtractDataReturn;
};

const Supplier = ({ tktData }: SupplierProps) => {
  return (
    <td id="rejSupp" className="w-[15%] text-center font-semibold px-4 py-2">
      {tktData.rej_supp}
    </td>
  );
};

export default Supplier;
