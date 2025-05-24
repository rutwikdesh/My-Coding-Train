import Navbar from "@/components/Navbar";
import TogglePage from "@/components/TogglePage";
import { useState } from "react";

export default function Home() {
  const [currPage, setCurrPage] = useState("home");
  return (
    <div>
      <Navbar setCurrPage={setCurrPage} />
      <TogglePage currPage={currPage} />
    </div>
  );
}
