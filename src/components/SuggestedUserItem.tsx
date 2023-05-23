import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { SuggestedUserItemProps } from "../../types";

import styles from "@/styles/SearchWidget.module.scss";

export const SuggestedUserItem: FC<SuggestedUserItemProps> = ({
  fullName,
  id,
  image,
  removeSuggestions,
}: SuggestedUserItemProps) => {
  return (
    <Link
      href={"/user/" + id}
      className={styles.suggested_user_item}
      onClick={() => removeSuggestions()}
    >
      <Image
        src={image}
        width={30}
        height={30}
        alt={fullName}
      />
      <p className={styles.fullName}>{fullName}</p>
    </Link>
  );
};
