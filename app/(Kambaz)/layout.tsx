import { ReactNode } from "react";
import KambazNavigation from "./Navigation";
import "./styles.css";

export default function KambazLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-kambaz" className="d-flex">
      {/* Sidebar */}
      <KambazNavigation />

      {/* Main Content */}
      <div className="wd-main-content-offset p-3 flex-fill">
        {children}
      </div>
    </div>
  );
}
