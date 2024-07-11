import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

function Disc({ disc, isTopDisc }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: disc.id,
    disabled: !isTopDisc,
  });
  const style = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
  };

  return (
    <img
      src={disc.image}
      className="discImg"
      alt="Disc"
      ref={setNodeRef}
      style={style}
      draggable={isTopDisc}
      {...listeners}
      {...attributes}
    ></img>
  );
}

export default Disc;
