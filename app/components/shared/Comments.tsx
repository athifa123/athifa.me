// "use client";

// import { useTheme } from "next-themes";
// import Giscus from "@giscus/react";
// import { giscusRepoId, giscusCategoryId } from "@/lib/env.api";

// export default function Comments() {
//   const { theme } = useTheme();
  
//   // Handle undefined theme with fallback
//   const giscusTheme =
//     theme === "light"
//       ? "light"
//       : theme === "dark"
//       ? "transparent_dark"
//       : "dark"; // fallback theme

//   return (
//     <Giscus
//       id="comments"
//       repo="athifa123/athifa.me"
//       repoId={giscusRepoId}
//       category="Announcements"
//       categoryId={giscusCategoryId}
//       mapping="title"
//       term="Welcome to @giscus/react component!"
//       reactionsEnabled="1"
//       emitMetadata="0"
//       inputPosition="bottom"
//       theme={giscusTheme}
//       lang="en"
//       loading="lazy"
//     />
//   );
// }