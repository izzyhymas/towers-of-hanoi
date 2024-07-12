import { useState, useEffect } from "react";
import { DndContext } from "@dnd-kit/core";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { discs } from "./assets/discs";
import Tower from "./Tower.jsx";
import styles from "./Game.module.css";

function Game() {
  const [parent, setParent] = useState(null);
  const [moves, setMoves] = useState(0);
  const [towerState, setTowerState] = useState({
    t1: [...discs],
    t2: [],
    t3: [],
  });

  useEffect(() => {
    if (towerState.t3.length === discs.length) {
      alert(`YOU WON USING ${moves} MOVES!`);
    }
  }, [towerState]);

  const notify = () =>
    toast("YOU CAN'T DO THAT!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });

  // WINNING FUNCTIONALITY #2
  //const win = (t1, t2, t3) => {
  //  if (t1.length === 0 && t2.length === 0 && t3.length === discs.length) {
  //    alert("YOU WON!");
  //  }
  //};

  function handleDragEnd({ active, over }) {
    setParent(over ? over.id : null);

    const newT1 = towerState.t1.filter((disc) => disc.id !== active.id);
    const newT2 = towerState.t2.filter((disc) => disc.id !== active.id);
    const newT3 = towerState.t3.filter((disc) => disc.id !== active.id);

    // Add disc to the target tower

    // Get the disc
    const disc = discs.find((disc) => disc.id === active.id);

    // Get discs from target tower (the "over" tower)
    const targetDiscs = towerState[over.id];
    if (targetDiscs.length > 0) {
      // Get last disc in target tower
      const lastDisc = targetDiscs[targetDiscs.length - 1];

      // Check if the current disc has a larger ID than the last disc
      // If it's larger, deny the move, put the disc back where it came from

      if (disc.id < lastDisc.id) {
        // Deny the move
        notify();
        return;
      }
    }
    if (over.id === "t1") newT1.push(disc);
    else if (over.id === "t2") newT2.push(disc);
    else if (over.id === "t3") newT3.push(disc);

    setMoves(prev => prev + 1);

    setTowerState({
      t1: newT1,
      t2: newT2,
      t3: newT3,
    });

    //win(newT1, newT2, newT3);
  }

  return (
    <main className={styles.game}>
      <DndContext onDragEnd={handleDragEnd}>
        <Tower towerId={"t1"} discs={towerState.t1} />
        <Tower towerId={"t2"} discs={towerState.t2} />
        <Tower towerId={"t3"} discs={towerState.t3} />
      </DndContext>
    </main>
  );
}

export default Game;
