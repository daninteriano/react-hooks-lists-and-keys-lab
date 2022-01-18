import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkTree = links.map((link) => {
    return <a key={link} href={"#"+link}>{link}</a>;
  })
  return <nav>{linkTree}</nav>;
}

export default NavBar;
