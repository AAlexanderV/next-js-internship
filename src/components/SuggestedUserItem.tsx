import { FC } from "react";

export const SuggestedUserItem: FC<{ fullName: string }> = ({ fullName }: { fullName: string }) => {
  return <div className="suggested_user_item">{fullName}</div>;
};
