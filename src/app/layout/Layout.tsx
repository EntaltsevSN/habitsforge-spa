import { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="layout">
      {children}
    </div>
  )
}

export default Layout;