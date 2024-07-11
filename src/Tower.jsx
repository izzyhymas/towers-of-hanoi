import { useDroppable } from "@dnd-kit/core";

import Disc from "./Disc";
import styles from "./Tower.module.css";

function Tower({ discs, towerId }) {
  const { setNodeRef } = useDroppable({
    id: towerId,
  });

  return (
    <div ref={setNodeRef} className={styles.tower}>
      {discs.map((disc, i) => (
        <Disc key={i} disc={disc} isTopDisc={i === discs.length - 1} />
      ))}
    </div>
  );
}

export default Tower;