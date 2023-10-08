//
export const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#0B0B18",
        color: "white",
        fontSize: "0.9rem",
        textAlign: "center",
        padding: "3px",
        boxSizing: "border-box",
      }}
    >
      &copy; Istrability, 2019-
      {new Date()
        .toLocaleDateString("sv-SE", { timeZone: "Europe/Zagreb" })
        .substring(0, 4)}
    </footer>
  );
};
